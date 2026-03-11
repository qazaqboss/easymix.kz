export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, message, products, source } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.warn('RESEND_API_KEY is not set. Email will not be sent.');
    return res.status(500).json({ error: 'Сервер не настроен (отсутствует API ключ)' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'EasyMix Website <onboarding@resend.dev>', // Should be updated to verified domain later
        to: ['ezmarketkz@gmail.com'],
        subject: `Новая заявка с сайта: ${source || 'Контактная форма'}`,
        html: `
          <h1>Новая заявка от ${name}</h1>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${products ? `<p><strong>Выбранные товары/расчет:</strong> ${products}</p>` : ''}
          ${message ? `<p><strong>Сообщение:</strong> ${message}</p>` : ''}
          <hr>
          <p><small>Отправлено с сайта easymix.kz</small></p>
        `,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      const errorData = await response.json();
      console.error('Resend error:', errorData);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
