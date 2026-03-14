import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, message, products, source } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"EasyMix Website" <${process.env.GMAIL_USER}>`,
    to: 'ezmarketkz@gmail.com',
    subject: `Новая заявка с сайта — ${source || 'Сайт'}`,
    html: `
      <h2>Новая заявка с сайта EasyMix</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Имя</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Телефон</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        ${products ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Товары</td><td style="padding:8px;border:1px solid #ddd">${products}</td></tr>` : ''}
        ${message ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Сообщение</td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>` : ''}
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Источник</td><td style="padding:8px;border:1px solid #ddd">${source || 'Сайт'}</td></tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Заявка отправлена' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Не удалось отправить письмо' });
  }
}
