/* ================================================================
   EASYMIX — New Website JavaScript
   Hero carousel, product filter, scroll animations, counters, modal
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  console.log("EasyMix Script V2 Loaded - Embed logic active");

  // ---- Product Data (for modals) ----
  const productData = {
    tt1: {
      name: 'TileAdhesive', code: 'TT1', category: 'Плиточный клей',
      img: 'images/bag_tt1.png',
      video: 'https://youtu.be/RF1s8xHWMxU?si=NtcPnZSXNZeFsMqq',
      description: 'Усиленный плиточный клей премиум-класса на цементной основе. Разработан специально для керамогранита, крупноформатной плитки и натурального камня.',
      specs: [
        ['Масса', '25 кг'], ['Класс', 'C1'], ['Адгезия', '≥ 0.7 МПа'],
        ['Толщина слоя', '3–7 мм'], ['Расход', '5–8 кг/м²'], ['Жизнеспособность', '2 часа'],
        ['Время укладки', '15 мин'], ['Марка по прочности', 'М200']
      ],
      applications: ['Керамогранит и натуральный камень', 'Крупноформатная плитка', 'Внутренние и наружные работы']
    },
    tt2: {
      name: 'TileStandard', code: 'TT2', category: 'Плиточный клей',
      img: 'images/bag_tt2.png',
      video: 'https://youtu.be/_O2UZXvkTyg?si=xw30_echmwF0Ia8i',
      description: 'Стандартный плиточный клей для внутренних и наружных работ. Обеспечивает надёжную фиксацию керамической плитки и керамогранита среднего формата.',
      specs: [
        ['Масса', '25 кг'], ['Класс', 'C0'], ['Адгезия', '≥ 0.5 МПа'],
        ['Толщина слоя', '2–6 мм'], ['Расход', '3–4 кг/м²'], ['Жизнеспособность', '3 часа'],
        ['Время корректировки', '15 мин'], ['Марка по прочности', 'М150']
      ],
      applications: ['Керамическая плитка и керамогранит', 'Стены и полы', 'Внутренние и наружные работы']
    },
    tt3: {
      name: 'PerfectTile', code: 'TT3', category: 'Затирка',
      img: 'images/bag_tt3.png',
      video: '',
      description: 'Белая затирка для швов на основе белого цемента. Водостойкая, эластичная, для внутренних и наружных работ в сухих и влажных помещениях.',
      specs: [
        ['Масса', '2 кг'], ['Класс', 'CG2'], ['Ширина шва', '2–15 мм'],
        ['Прочность на сжатие', '≥ 15 МПа'], ['Расход', '0.3–0.5 кг/м²'], ['Жизнеспособность', '60 мин'],
        ['Основа', 'Белый цемент'], ['Водостойкость', 'Водостойкая']
      ],
      applications: ['Затирка швов плитки', 'Внутренние и наружные работы', 'Влажные помещения']
    },
    pl1: {
      name: 'PerfectLevel', code: 'PL1', category: 'Цементный наливной пол',
      img: 'images/bag_pl1.png',
      video: 'https://youtu.be/Huj1vEDVOk8?si=sGahxoUKoiqXRMcl',
      description: 'Высокопрочный самовыравнивающийся пол на цементной основе. Идеален для оснований, подверженных значительным нагрузкам, в том числе во влажных помещениях.',
      specs: [
        ['Масса', '25 кг'], ['Толщина слоя', '2–40 мм'], ['Расход', '1.5 кг/м²/1мм'],
        ['Прочность на сжатие', '≥ 25 МПа'], ['Жизнеспособность', '40 мин'], ['Хождение', '6–10 часов'],
        ['Основа', 'Цементная'], ['Помещения', 'Сухие и влажные']
      ],
      applications: ['Финишное выравнивание под плитку', 'Основание под ламинат и ПВХ', 'Полы с подогревом']
    },
    pl2: {
      name: 'PerfectLevel', code: 'PL2', category: 'Гипсовый наливной пол',
      img: 'images/bag_pl2.png',
      video: 'https://youtu.be/Oy04jdi2h5k?si=V1af5Eh-hV8lkPPb',
      description: 'Финишный наливной пол на гипсовой основе для идеально гладкой поверхности. Предназначен для внутренних работ исключительно в сухих помещениях.',
      specs: [
        ['Масса', '20 кг'], ['Толщина слоя', '5–20 мм'], ['Прочность на сжатие', '10–20 МПа'],
        ['Жизнеспособность', '30–40 мин'], ['Хождение', '6–10 часов'], ['Покрытие через', '5–7 дней'],
        ['Основа', 'Гипсовая'], ['Помещения', 'Только сухие']
      ],
      applications: ['Идеально гладкая поверхность', 'Тонкие финишные покрытия', 'Паркет, виниловые полы']
    },
    pl3: {
      name: 'FibroScreed', code: 'PL3', category: 'Наливной пол',
      img: 'images/bag_pl3.png',
      video: '',
      description: 'Армированная полипропиленовым фиброволокном цементная стяжка. Для создания высокопрочных полов, выдерживающих значительные нагрузки.',
      specs: [
        ['Масса', '25 кг'], ['Толщина слоя', '15–100 мм'], ['Марка прочности', 'М150–М200'],
        ['Расход материала', '20–25 кг/м² на 10мм'], ['Жизнеспособность', '2 часа'], ['Хождение', '6–10 часов'],
        ['Морозостойкость', 'F25'], ['Основа', 'Цемент + фиброволокно']
      ],
      applications: ['Промышленные цеха и склады', 'Гаражи и паркинги', 'Наружные площадки и террасы']
    },
    pl4: {
      name: 'PerfectTop', code: 'PL4', category: 'Промышленная смесь',
      img: 'images/bag_pl4.png',
      video: '',
      description: 'Сухая упрочняющая смесь (топпинг) для обработки свежеуложенного бетонного пола. Создаёт сверхпрочный слой, устойчивый к истиранию и ударам.',
      specs: [
        ['Масса', '25 кг'], ['Прочность на сжатие', '≥ 60 МПа'], ['Истираемость', '0.14 г/см²'],
        ['Ударопрочность', '20 кг/мм²'], ['Расход', '3–8 кг/м²'], ['Марка прочности', 'М600'],
        ['Пешеходная нагрузка', '24 часа'], ['Морозостойкость', 'F50']
      ],
      applications: ['Склады и логистические центры', 'Автосалоны и паркинги', 'Производственные цеха']
    },
    pp1: {
      name: 'PerlitePlaster', code: 'PP1', category: 'Штукатурка',
      img: 'images/bag_pp1.png',
      video: '',
      description: 'Лёгкая гипсовая штукатурка с перлитом для улучшенной тепло- и звукоизоляции. Подходит для ручного и машинного нанесения.',
      specs: [
        ['Масса', '30 кг'], ['Толщина слоя', '2–70 мм'], ['Расход', '14 кг/м² на 10мм'],
        ['Прочность на сжатие', '≥ 5 МПа'], ['Жизнеспособность', '≥ 1 часа'], ['Время высыхания', '1 день'],
        ['Основа', 'Гипс + перлит'], ['Звукоизоляция', '+3–5 дБ']
      ],
      applications: ['Выравнивание стен и потолков', 'Улучшение тепло- и звукоизоляции', 'Жилые и коммерческие помещения']
    },
    bc1: {
      name: 'BaseCoat', code: 'BC1', category: 'Штукатурка',
      img: 'images/bag_bc1.png',
      video: '',
      description: 'Универсальная гипсовая штукатурка для базового выравнивания стен и потолков. Обеспечивает прочное покрытие под финишную отделку.',
      specs: [
        ['Масса', '30 кг'], ['Толщина слоя', '2–50 мм'], ['Расход', '14 кг/м² на 10мм'],
        ['Прочность на сжатие', '≥ 5 МПа'], ['Жизнеспособность', '≥ 1 часа'], ['Адгезия', '0.5 МПа'],
        ['Основа', 'Гипс'], ['Зерно', '0.7 мм']
      ],
      applications: ['Базовое выравнивание стен', 'Кирпичная кладка и бетон', 'Подготовка под шпаклевание']
    },
    dp1: {
      name: 'DecoPlaster', code: 'DP1', category: 'Штукатурка',
      img: 'images/bag_dp1.png',
      video: '',
      description: 'Белая декоративная штукатурка на цементной основе с эффектом «дождевой» текстуры. Атмосферостойкая и водостойкая.',
      specs: [
        ['Масса', '25 кг'], ['Зерно', '2.5 мм'], ['Расход', '2.5–3 кг/м²'],
        ['Прочность на сжатие', '≥ 5 МПа'], ['Морозостойкость', 'F25'], ['Жизнеспособность', '2 часа'],
        ['Основа', 'Белый цемент'], ['Цвет', 'Белый']
      ],
      applications: ['Декоративная отделка фасадов', 'Акцентные зоны в интерьере', 'Создание рельефных текстур']
    },
    sc1: {
      name: 'SkimCoat', code: 'SC1', category: 'Шпаклёвка',
      img: 'images/bag_sc1.png',
      video: '',
      description: 'Гипсовая финишная шпаклёвка для создания идеально гладких поверхностей под покраску и обои.',
      specs: [
        ['Масса', '25 кг'], ['Толщина слоя', '0.2–3 мм'], ['Расход', '0.8–1 кг/м²/мм'],
        ['Прочность на сжатие', '≥ 4.0 МПа'], ['Жизнеспособность', '90 мин'], ['Основа', 'Гипс'],
        ['Белизна', '≥ 85%'], ['Применение', 'Внутреннее']
      ],
      applications: ['Финишная подготовка стен и потолков', 'Под покраску и обои', 'Заделка мелких трещин и неровностей']
    },

    ft2: {
      name: 'PolymerWhiteCoat', code: 'FT2', category: 'Шпаклёвка',
      img: 'images/bag_ft2.png',
      video: '',
      description: 'Финишная полимерная шпаклёвка на мраморной основе. Ультратонкое нанесение для безупречно гладкой, белоснежной поверхности.',
      specs: [
        ['Масса', '25 кг'], ['Толщина слоя', '1–2 мм'], ['Расход материала', '1.1 кг/м² на 1мм'],
        ['Жизнеспособность', '6 часов'], ['Основа', 'Полимерная + мрамор'], ['Белизна', '≥ 92%'],
        ['Адгезия', '≥ 0.2 МПа']
      ],
      applications: ['Суперфинишная отделка интерьеров', 'Под высококачественную окраску', 'Тонкая финишная подготовка']
    },
    '2in1': {
      name: 'Putty+Plaster', code: '2in1', category: 'Универсальная смесь',
      img: 'images/bag_2in1.png',
      video: 'https://youtu.be/_nYE55xojnE?si=ZhPYZEk_MObK7riB',
      description: 'Инновационная смесь, объединяющая свойства штукатурки и шпаклёвки. Позволяет значительно сэкономить время на подготовке стен.',
      specs: [
        ['Масса', '25 кг'], ['Толщина слоя', '0.5–15 мм'], ['Расход материала', '1.2 кг/м² на 1мм'],
        ['Жизнеспособность', '≥ 1 часа'], ['Прочность на сжатие', '≥ 2.5 МПа'], ['Основа', 'Гипс'],
        ['Адгезия', '≥ 0.4 МПа']
      ],
      applications: ['Одновременная штукатурка и шпаклёвка', 'Ремонт и реставрация стен', 'Экономичные ремонтные работы']
    },
    '3in1': {
      name: 'All Purpose', code: '3in1', category: 'Универсальная смесь',
      img: 'images/bag_3in1.png',
      video: 'https://youtu.be/uwGvJCkAlUw?si=4Ax9foF1xbHb5MNm',
      description: 'Универсальная цементная смесь «три в одном»: стяжка, штукатурка и кладочный раствор. Для любых строительных задач внутри и снаружи.',
      specs: [
        ['Масса', '30 кг'], ['Толщина слоя', '15–50 мм'], ['Марка прочности', 'М150–М200'],
        ['Расход материала', '22–25 кг/м² на 10мм'], ['Жизнеспособность', '2 часа'], ['Прочность', '20 МПа'],
        ['Морозостойкость', 'F35'], ['Основа', 'Цемент']
      ],
      applications: ['Стяжка пола и кладка кирпича', 'Оштукатуривание фасадов и цоколей', 'Универсальный ремонтный состав']
    },
    cc1: {
      name: 'Shotcrete Pro', code: 'CC1', category: 'Промышленная смесь',
      img: 'images/bag_cc1.png',
      video: '',
      description: 'Специализированная торкрет-бетонная смесь для машинного нанесения. Обладает сверхвысокой прочностью и водонепроницаемостью.',
      specs: [
        ['Масса', '25 кг'], ['Прочность (28 сут)', '≥ 45 МПа'], ['Адгезия', '≥ 2.0 МПа'],
        ['Водонепроницаемость', 'W12'], ['Морозостойкость', 'F50'], ['Прочность (6 ч)', '≥ 2 МПа'],
        ['Прочность (24 ч)', '≥ 15 МПа'], ['Расход', '20.5 кг/м² на 10мм']
      ],
      applications: ['Укрепление тоннелей и шахт', 'Ремонт гидротехнических сооружений', 'Мостовое строительство и ремонт']
    },
  };

  // Showcase carousel data — 9 premium products
  const showcaseData = [
    { name: 'TileAdhesive TT1', slogan: 'Усиленный клей для керамогранита C1' },
    { name: 'TileStandard TT2', slogan: 'Стандартный клей для плитки C0' },
    { name: 'PerfectTile TT3', slogan: 'Белая водостойкая затирка' },
    { name: 'PerfectLevel PL1', slogan: 'Высокопрочный цементный пол' },
    { name: 'PerfectLevel PL2', slogan: 'Финишный гипсовый пол' },
    { name: 'Fibro Screed PL3', slogan: 'Армированная стяжка с фиброй' },
    { name: 'PerfectTop PL4', slogan: 'Упрочнитель бетонных полов' },
    { name: 'Perlite Plaster PP1', slogan: 'Лёгкая теплоизоляционная штукатурка' },
    { name: 'Basecoat BC1', slogan: 'Базовая гипсовая штукатурка' },
    { name: 'DecoPlaster DP1', slogan: 'Декоративная штукатурка (Дождик)' },
    { name: 'SkimCoat SC1', slogan: 'Ультратонкая финишная шпаклёвка' },
    { name: 'PolymerWhiteCoat FT2', slogan: 'Ультратонкая полимерная шпаклёвка' },
    { name: 'Putty + Plaster 2in1', slogan: 'Штукатурка + Шпаклёвка 2в1' },
    { name: 'All Purpose 3in1', slogan: 'Стяжка + Штукатурка + Кладка' },
    { name: 'Shotcrete Pro CC1', slogan: 'Торкрет-бетон сверхвысокой прочности' }
  ];

  // ================================================================
  // NAVBAR — scroll behavior & mobile menu
  // ================================================================
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const allNavLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    allNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        link.classList.toggle('active', scrollY >= top && scrollY < top + height);
      }
    });
  });

  // ================================================================
  // HERO SHOWCASE CAROUSEL (3D Swiper)
  // ================================================================
  const showcaseCarousel = document.getElementById('showcaseCarousel');
  const showcaseBags = document.querySelectorAll('.showcase-bag');
  const showcaseDots = document.querySelectorAll('.dot');
  const showcaseLabel = document.getElementById('showcaseLabel');
  let currentSlide = 0;
  let autoSlideInterval;
  let startX = 0;
  let isDragging = false;

  function updateCarousel(index) {
    const total = showcaseData.length;
    currentSlide = (index + total) % total;

    showcaseBags.forEach((bag, i) => {
      bag.classList.remove('active', 'prev', 'next', 'prev-deep', 'next-deep');
      const diff = (i - currentSlide + total) % total;

      if (diff === 0) bag.classList.add('active');
      else if (diff === 1) bag.classList.add('next');
      else if (diff === total - 1) bag.classList.add('prev');
      else if (diff === 2) bag.classList.add('next-deep');
      else if (diff === total - 2) bag.classList.add('prev-deep');
    });

    // Update labels
    if (showcaseLabel) {
      showcaseLabel.querySelector('.showcase-name').textContent = showcaseData[currentSlide].name;
      showcaseLabel.querySelector('.showcase-category').textContent = showcaseData[currentSlide].slogan;
    }

    // Update dots
    showcaseDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => updateCarousel(currentSlide + 1), 6000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Event Listeners for Dots
  showcaseDots.forEach(dot => {
    dot.addEventListener('click', () => {
      updateCarousel(parseInt(dot.dataset.index));
      resetAutoSlide();
    });
  });
  // Mouse/Touch Swipe Logic
  if (showcaseCarousel) {
    const handleStart = (e) => {
      isDragging = true;
      startX = (e.type === 'mousedown') ? e.pageX : e.touches[0].clientX;
    };

    const handleMove = (e) => {
      if (!isDragging) return;
      const currentX = (e.type === 'mousemove') ? e.pageX : e.touches[0].clientX;
      const diff = currentX - startX;

      if (Math.abs(diff) > 70) {
        if (diff > 0) updateCarousel(currentSlide - 1);
        else updateCarousel(currentSlide + 1);
        isDragging = false;
        resetAutoSlide();
      }
    };

    const handleEnd = () => { isDragging = false; };

    showcaseCarousel.addEventListener('mousedown', handleStart);
    showcaseCarousel.addEventListener('touchstart', handleStart, { passive: true });
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);
  }

  // Initialize
  updateCarousel(0);
  startAutoSlide();

  // ================================================================
  // HERO STAT COUNTERS (in stats bar)
  // ================================================================
  function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + ' 000 000+';
    if (num >= 1000) return num.toLocaleString('ru-RU');
    return num.toString();
  }

  function animateHeroStats() {
    document.querySelectorAll('.hero-stat-number').forEach(el => {
      const target = parseInt(el.dataset.target);
      const duration = 2000;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(target * eased);
        el.textContent = formatNumber(current);
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    });
  }

  // Trigger hero stats when hero becomes visible
  const heroStatsBar = document.querySelector('.hero-stats-bar');
  if (heroStatsBar) {
    const heroStatsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateHeroStats();
          heroStatsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    heroStatsObserver.observe(heroStatsBar);
  }

  // ================================================================
  // CATALOG FILTER
  // ================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  // Category card links trigger filter
  document.querySelectorAll('.category-card[data-filter]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = card.dataset.filter;
      activateFilter(filter);
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activateFilter(btn.dataset.filter);
    });
  });

  function activateFilter(filter) {
    // Update active button
    filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === filter));

    // Filter cards with animation
    productCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.classList.remove('hidden');
        // Re-trigger animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        });
      } else {
        card.classList.add('hidden');
      }
    });
  }

  // ================================================================
  // ABOUT STAT COUNTERS
  // ================================================================
  function animateCounters() {
    document.querySelectorAll('.counter').forEach(counter => {
      const target = parseInt(counter.dataset.target);
      const duration = 2500;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(target * eased);

        if (target >= 1000000) {
          counter.textContent = (current / 1000000).toFixed(0) + ' 000 000';
        } else if (target >= 1000) {
          counter.textContent = current.toLocaleString('ru-RU');
        } else {
          counter.textContent = current;
        }

        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    });
  }

  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsGrid);
  }

  // ================================================================
  // SCROLL REVEAL ANIMATIONS
  // ================================================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Staggered reveal for grid items
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Find all siblings in the same grid and stagger
        const parent = entry.target.parentElement;
        const children = parent.querySelectorAll('.category-card, .product-card, .contact-card, .stat-card');
        children.forEach((child, i) => {
          setTimeout(() => {
            child.classList.add('visible');
          }, i * 80);
        });
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe first child of each grid as trigger
  document.querySelectorAll('.categories-grid, .catalog-grid, .contacts-grid, .stats-grid').forEach(grid => {
    const first = grid.querySelector('.category-card, .product-card, .contact-card, .stat-card');
    if (first) staggerObserver.observe(first);
  });

  // ================================================================
  // MODAL SYSTEM
  // ================================================================
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  function getYoutubeEmbedUrl(url) {
    if (!url) return null;
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1].split('?')[0];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;
  }

  function openModal(productId) {
    const product = productData[productId];
    if (!product) return;

    const specsHTML = product.specs.map(([label, value]) =>
      `<div class="spec-item"><span class="spec-label">${label}</span><span class="spec-value">${value}</span></div>`
    ).join('');

    const applicationsHTML = product.applications.map(app =>
      `<li>${app}</li>`
    ).join('');

    const embedUrl = getYoutubeEmbedUrl(product.video);

    modalContent.innerHTML = `
      <div class="modal-product-header">
        <div class="modal-product-img"><img src="${product.img}" alt="${product.name} ${product.code}"></div>
        <div class="modal-product-title">
          <h2>${product.name} <span>${product.code}</span></h2>
          <div class="modal-category">${product.category}</div>
          <div class="modal-description">${product.description}</div>
          ${embedUrl ? `
            <div class="modal-video-container">
              <iframe 
                src="${embedUrl}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
          ` : (product.video ? `
            <a href="${product.video}" target="_blank" rel="noopener" class="modal-video-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Смотреть видео
            </a>
          ` : '')}
        </div>
      </div>
      <div class="modal-specs">
        <h3>Технические характеристики</h3>
        <div class="modal-specs-grid">${specsHTML}</div>
      </div>
      <div class="modal-applications">
        <h3>Область применения</h3>
        <ul>${applicationsHTML}</ul>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Click handlers for product cards
  document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(btn.dataset.product);
    });
  });

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset.product);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ================================================================
  // HERO PARTICLES (subtle decorative dots)
  // ================================================================
  const particlesContainer = document.getElementById('heroParticles');
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        background: rgba(45, 138, 78, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: particleFloat ${Math.random() * 6 + 4}s ease-in-out infinite;
        animation-delay: ${Math.random() * 4}s;
      `;
      particlesContainer.appendChild(particle);
    }

    // Add particle animation to head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleFloat {
        0%, 100% { transform: translate(0, 0); opacity: 0.5; }
        50% { transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 30 + 10}px, ${Math.random() > 0.5 ? '' : '-'}${Math.random() * 30 + 10}px); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  // ================================================================
  // SHOPPING CART
  // ================================================================
  const cart = [];
  const cartToggle = document.getElementById('cartToggle');
  const cartCount = document.getElementById('cartCount');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartClose = document.getElementById('cartClose');
  const cartItemsEl = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');
  const cartTotalCount = document.getElementById('cartTotalCount');
  const orderForm = document.getElementById('orderForm');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  // Open / close cart
  function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  cartToggle.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Toast helper
  function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

  // Add to cart
  function addToCart(productId) {
    const data = productData[productId];
    if (!data) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ id: productId, name: `${data.name} ${data.code}`, img: data.img, category: data.category, qty: 1 });
    }
    updateCartUI();
    showToast(`${data.name} ${data.code} добавлен в корзину`);
  }

  // Remove from cart
  function removeFromCart(productId) {
    const idx = cart.findIndex(item => item.id === productId);
    if (idx > -1) cart.splice(idx, 1);
    updateCartUI();
  }

  // Change quantity
  function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(productId);
      return;
    }
    updateCartUI();
  }

  // Render cart
  function updateCartUI() {
    const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

    // Badge
    cartCount.textContent = totalItems;
    cartCount.classList.toggle('visible', totalItems > 0);

    // Total count in footer
    cartTotalCount.textContent = totalItems;

    // Toggle footer / empty
    if (cart.length === 0) {
      cartEmpty.style.display = 'flex';
      cartFooter.style.display = 'none';
      // Remove item cards
      cartItemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());
      return;
    }
    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';

    // Render items
    const existingIds = new Set();
    cartItemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());

    cart.forEach(item => {
      existingIds.add(item.id);
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.dataset.cartId = item.id;
      div.innerHTML = `
        <div class="cart-item-img"><img src="${item.img}" alt="${item.name}"></div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.category}</p>
          <div class="cart-item-controls">
            <button class="qty-btn" data-action="minus" data-id="${item.id}">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" data-action="plus" data-id="${item.id}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${item.id}" title="Удалить">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      `;
      cartItemsEl.appendChild(div);
    });
  }

  // Delegate clicks inside cart
  cartItemsEl.addEventListener('click', (e) => {
    const qtyBtn = e.target.closest('.qty-btn');
    if (qtyBtn) {
      const id = qtyBtn.dataset.id;
      const delta = qtyBtn.dataset.action === 'plus' ? 1 : -1;
      changeQty(id, delta);
      return;
    }
    const removeBtn = e.target.closest('.cart-item-remove');
    if (removeBtn) {
      removeFromCart(removeBtn.dataset.id);
    }
  });

  // Inject "В корзину" buttons on all product cards
  document.querySelectorAll('.product-card').forEach(card => {
    const pid = card.dataset.product;
    const btnContainer = card.querySelector('.card-info');
    const detailBtn = card.querySelector('.card-btn');

    // Wrap existing button & new cart button
    const wrapper = document.createElement('div');
    wrapper.className = 'card-buttons';
    detailBtn.parentNode.insertBefore(wrapper, detailBtn);
    wrapper.appendChild(detailBtn);

    const cartBtn = document.createElement('button');
    cartBtn.className = 'card-cart-btn';
    cartBtn.dataset.product = pid;
    cartBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg> В корзину`;
    wrapper.appendChild(cartBtn);

    cartBtn.addEventListener('click', () => addToCart(pid));
  });

  // Order form submission
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const email = document.getElementById('orderEmail').value.trim();

    if (!name || !phone || !email) return;

    const orderItems = cart.map(i => `${i.name} x${i.qty}`).join(', ');
    console.log('=== НОВАЯ ЗАЯВКА ===');
    console.log('Имя:', name);
    console.log('Телефон:', phone);
    console.log('Email:', email);
    console.log('Товары:', orderItems);
    console.log('====================');

    // Clear cart & form
    cart.length = 0;
    updateCartUI();
    orderForm.reset();
    closeCart();
    showToast('Заявка успешно отправлена! Мы свяжемся с вами.');
  });
  // ================================================================
  // CALCULATOR LOGIC
  // ================================================================
  const calcSidebar = document.getElementById('calcSidebar');
  const calcOverlay = document.getElementById('calcOverlay');
  const calcToggle = document.getElementById('calcToggle');
  const calcClose = document.getElementById('calcSidebarClose');

  if (calcToggle) {
    calcToggle.addEventListener('click', () => {
      calcSidebar.classList.add('open');
      calcOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (calcClose) {
    calcClose.addEventListener('click', () => {
      calcSidebar.classList.remove('open');
      calcOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (calcOverlay) {
    calcOverlay.addEventListener('click', () => {
      calcSidebar.classList.remove('open');
      calcOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  const calcData = {
    wall: [
      { id: 'bc1', name: 'Basecoat BC1', cat: 'Гипсовая штукатурка', col: '#95a5a6', byT: true, c: 1.4, bw: 30, mn: 2, mx: 50, tip: 'Гипсовая штукатурка для стен. Ручной или машинный способ.' },
      { id: 'pp1', name: 'PerlitePlaster PP1', cat: 'Перлитовая штукатурка', col: '#bdc3c7', byT: true, c: 1.4, bw: 30, mn: 2, mx: 70, tip: 'Лёгкая штукатурка с перлитом. Теплоизоляционная.' },
      { id: 'dp1', name: 'DecoPlaster DP1', cat: 'Декоративная штукатурка', col: '#e67e22', byT: false, c: 2.5, bw: 25, mn: null, mx: null, tip: 'Декоративная фасадная штукатурка. Тонкий слой 1–5 мм.' },
      { id: '2in1', name: '2in1 Putty+Plaster', cat: 'Штукатурка + шпаклёвка 2в1', col: '#27ae60', byT: true, c: 1.3, bw: 25, mn: 1, mx: 15, tip: 'Универсальная 2в1 — заменяет два продукта.' },
      { id: 'ft1', name: 'FinalTouch FT1', cat: 'Финишная шпаклёвка', col: '#d5dbdb', byT: true, c: 1.2, bw: 25, mn: 0.5, mx: 2, tip: 'Финишная шпаклёвка под окраску и обои.' },
      { id: 'ft2', name: 'PolymerWhiteCoat FT2', cat: 'Полимерная шпаклёвка', col: '#f8f9fa', byT: true, c: 1.1, bw: 25, mn: 0.5, mx: 2, tip: 'Белоснежная полимерная шпаклёвка.' },
      { id: 'sc1', name: 'Skimcoat SC1', cat: 'Выравнивающая шпаклёвка', col: '#b2bec3', byT: true, c: 1.4, bw: 25, mn: 1, mx: 3, tip: 'Цементная шпаклёвка. Водостойкая.' },
      { id: '3in1w', name: '3in1 Specialist', cat: 'Цементная штукатурка', col: '#2c3e50', byT: true, c: 1.6, bw: 25, mn: 5, mx: 30, tip: 'Универсальная цементная штукатурка для внутренних и наружных работ.' },
    ],
    tile: [
      { id: 'tt1', name: 'TileAdhesive TT1', cat: 'Усиленный клей C2', col: '#e67e22', bw: 25, c: { 6: 4.0, 8: 4.5, 10: 5.0 }, tip: 'Усиленный клей C2 для тяжёлой плитки.' },
      { id: '3in1t', name: '3in1 Specialist', cat: 'Плиточный клей', col: '#2c3e50', bw: 25, c: { 6: 3.5, 8: 4.0, 10: 4.5 }, tip: 'Универсальный клей для кафеля и керамогранита.' },
    ],
    floor: [
      { id: 'pl1', name: 'PerfectLevel PL1', cat: 'Самовыравнивающийся пол', col: '#3498db', byT: true, c: 1.8, bw: 25, mn: 2, mx: 10, tip: 'Самовыравнивающийся пол. Растекается сам.' },
      { id: 'pl2', name: 'PerfectLevel PL2', cat: 'Финишный выравниватель', col: '#2980b9', byT: true, c: 1.8, bw: 20, mn: 5, mx: 20, tip: 'Гипсовый наливной пол. Финишный слой 5–20 мм.' },
      { id: 'pl3', name: 'FibroScreed PL3', cat: 'Армированная стяжка', col: '#1a6ba6', byT: true, c: 2.0, bw: 25, mn: 10, mx: 40, tip: 'Фибороармированная стяжка для высоких нагрузок.' },
      { id: '3in1f', name: '3in1 Specialist', cat: 'Стяжка для пола', col: '#2c3e50', byT: true, c: 1.8, bw: 25, mn: 10, mx: 50, tip: 'Цементная стяжка для пола до 5 см.' },
    ],
    ceiling: [
      { id: 'ft1c', name: 'FinalTouch FT1', cat: 'Финишная шпаклёвка', col: '#d5dbdb', byT: true, c: 1.2, bw: 25, mn: 0.5, mx: 3, tip: 'Финишная шпаклёвка на потолок.' },
      { id: 'ft2c', name: 'PolymerWhiteCoat FT2', cat: 'Полимерная шпаклёвка', col: '#f8f9fa', byT: true, c: 1.1, bw: 25, mn: 0.5, mx: 2, tip: 'Белоснежная полимерная шпаклёвка.' },
    ],
  };

  let selected = { wall: null, tile: null, floor: null, ceiling: null };
  let combSize = 6, loadType = 3, indType = 'cc1';

  function renderCalcList(sec) {
    const el = document.getElementById('cpl-' + sec);
    if (!el) return;
    el.innerHTML = '';
    calcData[sec].forEach(p => {
      const d = document.createElement('div');
      d.className = 'pitem';
      d.dataset.id = p.id;
      const cs = p.byT === undefined ? p.c[combSize] + ' кг/м²' : p.byT ? p.c + ' кг/м²·мм' : p.c + ' кг/м²';
      d.innerHTML = `<div class="pdot" style="background:${p.col}"></div><div class="pinfo"><div class="pname">${p.name}</div><div class="pcat">${p.cat}</div></div><div class="pcons">${cs}</div>`;
      d.onclick = () => {
        selected[sec] = p.id;
        document.querySelectorAll(`#cpl-${sec} .pitem`).forEach(x => x.classList.toggle('sel', x.dataset.id === p.id));
        if (sec === 'wall') {
          const st = document.getElementById('w-thk-step');
          if (p.byT) {
            st.style.display = 'block';
            const r = document.getElementById('w-thk'); r.min = p.mn; r.max = p.mx; r.value = Math.round((p.mn + p.mx) / 2);
            document.getElementById('w-thk-val').textContent = r.value + ' мм';
            document.getElementById('w-thk-lim').textContent = `диапазон: ${p.mn}–${p.mx} мм`;
          } else st.style.display = 'none';
        }
        if (sec === 'floor') {
          const r = document.getElementById('f-thk'); r.min = p.mn; r.max = p.mx; r.value = Math.round((p.mn + p.mx) / 2);
          document.getElementById('f-thk-val').textContent = r.value + ' мм';
          document.getElementById('f-thk-lim').textContent = `диапазон: ${p.mn}–${p.mx} мм`;
        }
      };
      el.appendChild(d);
    });
  }

  // Init sections
  ['wall', 'tile', 'floor', 'ceiling'].forEach(renderCalcList);

  // Nav Tabs
  document.querySelectorAll('.cntab').forEach(b => {
    b.onclick = () => {
      document.querySelectorAll('.cntab').forEach(x => x.classList.remove('active'));
      document.querySelectorAll('.cpanel').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      document.getElementById('cpanel-' + b.dataset.tab).classList.add('active');
    };
  });

  // Range updates
  const setRv = (id, vid) => {
    const r = document.getElementById(id); if (r) r.oninput = () => document.getElementById(vid).textContent = r.value + ' мм';
  };
  setRv('w-thk', 'w-thk-val'); setRv('f-thk', 'f-thk-val'); setRv('cc-thk', 'cc-thk-val'); setRv('c-thk', 'c-thk-val');

  // Pills
  document.getElementById('comb-pills').onclick = e => {
    const p = e.target.closest('.crpill'); if (!p) return;
    document.querySelectorAll('#comb-pills .crpill').forEach(x => x.classList.remove('sel'));
    p.classList.add('sel'); combSize = parseInt(p.dataset.v); renderCalcList('tile');
  };
  document.getElementById('load-pills').onclick = e => {
    const p = e.target.closest('.crpill'); if (!p) return;
    document.querySelectorAll('#load-pills .crpill').forEach(x => x.classList.remove('sel'));
    p.classList.add('sel'); loadType = parseFloat(p.dataset.v);
  };
  document.getElementById('ind-pills').onclick = e => {
    const p = e.target.closest('.crpill'); if (!p) return;
    document.querySelectorAll('#ind-pills .crpill').forEach(x => x.classList.remove('sel'));
    p.classList.add('sel'); indType = p.dataset.v;
    document.getElementById('cc1-block').style.display = indType === 'cc1' ? '' : 'none';
  };

  window.calc = (sec) => {
    const resCard = document.getElementById('cresult-card');
    const orderBtn = document.getElementById('cOrderBtn');
    const orderForm = document.getElementById('cOrderForm');

    // Reset order form state on new calc
    orderForm.style.display = 'none';
    orderBtn.style.display = 'block';

    const showRes = (name, cat, kg, bw, base, rsv, total, tip) => {
      resCard.style.display = 'block';
      document.getElementById('cr-pname').textContent = name;
      document.getElementById('cr-pcat').textContent = cat;
      document.getElementById('cr-bags').textContent = total;
      document.getElementById('cr-kg').textContent = Math.round(kg) + ' кг';
      document.getElementById('cr-bw').textContent = bw + ' кг';
      document.getElementById('cr-tip').innerHTML = '<strong>💡 Совет:</strong> ' + tip;
      resCard.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };

    if (sec === 'wall') {
      const p = calcData.wall.find(x => x.id === selected.wall); if (!p) return alert('Выберите смесь');
      const area = parseFloat(document.getElementById('w-area').value) || 0;
      const layers = parseFloat(document.getElementById('w-layers').value) || 1;
      const res = parseFloat(document.getElementById('w-res').value) / 100 || 0.1;
      let kg = p.byT ? area * p.c * parseFloat(document.getElementById('w-thk').value) * layers : area * p.c * layers;
      const total = Math.ceil((kg / p.bw) * (1 + res));
      showRes(p.name, p.cat, kg * (1 + res), p.bw, 0, 0, total, p.tip);
    } else if (sec === 'tile') {
      const p = calcData.tile.find(x => x.id === selected.tile); if (!p) return alert('Выберите клей');
      const area = parseFloat(document.getElementById('t-area').value) || 0;
      const surf = parseFloat(document.getElementById('t-surf').value) || 0;
      const res = parseFloat(document.getElementById('t-res').value) / 100 || 0.15;
      const kg = area * (p.c[combSize] + surf);
      const total = Math.ceil((kg / p.bw) * (1 + res));
      showRes(p.name, p.cat, kg * (1 + res), p.bw, 0, 0, total, p.tip);
    } else if (sec === 'floor') {
      const p = calcData.floor.find(x => x.id === selected.floor); if (!p) return alert('Выберите смесь');
      const area = parseFloat(document.getElementById('f-area').value) || 0;
      const t = parseFloat(document.getElementById('f-thk').value);
      const res = parseFloat(document.getElementById('f-res').value) / 100 || 0.1;
      const kg = area * p.c * t;
      const total = Math.ceil((kg / p.bw) * (1 + res));
      showRes(p.name, p.cat, kg * (1 + res), p.bw, 0, 0, total, p.tip);
    } else if (sec === 'topping') {
      const area = parseFloat(document.getElementById('tp-area').value) || 0;
      const kg = area * loadType;
      const total = Math.ceil(kg / 25);
      showRes('PerfectTop PL4', 'Топпинг', kg, 25, 0, 0, total, 'Наносите в 2 этапа.');
    } else if (sec === 'industrial') {
      const area = parseFloat(document.getElementById('cc-area').value) || 0;
      const t = parseFloat(document.getElementById('cc-thk').value);
      const res = parseFloat(document.getElementById('cc-res').value) / 100 || 0.15;
      const kg = area * (20.5 / 10) * t;
      showRes('Shotcrete Pro CC1', 'Промышленный бетон', kg * (1 + res), 25, 0, 0, Math.ceil((kg / 25) * (1 + res)), 'Для крупных объектов.');
    } else if (sec === 'ceiling') {
      const p = calcData.ceiling.find(x => x.id === selected.ceiling); if (!p) return alert('Выберите смесь');
      const area = parseFloat(document.getElementById('c-area').value) || 0;
      const l = parseFloat(document.getElementById('c-layers').value) || 2;
      const t = parseFloat(document.getElementById('c-thk').value);
      const kg = area * p.c * t * l;
      showRes(p.name, p.cat, kg * 1.1, p.bw, 0, 0, Math.ceil((kg / p.bw) * 1.1), p.tip);
    }
  };

  window.showOrderForm = () => {
    document.getElementById('cOrderBtn').style.display = 'none';
    document.getElementById('cOrderForm').style.display = 'block';
  };

  window.hideOrderForm = () => {
    document.getElementById('cOrderForm').style.display = 'none';
    document.getElementById('cOrderBtn').style.display = 'block';
  };

  document.getElementById('cOrderForm').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('co-name').value;
    const phone = document.getElementById('co-phone').value;
    const bags = document.getElementById('cr-bags').textContent;
    const prod = document.getElementById('cr-pname').textContent;

    console.log('--- ЗАКАЗ ИЗ КАЛЬКУЛЯТОРА ---');
    console.log('Товар:', prod);
    console.log('Количество:', bags, 'мешков');
    console.log('Имя:', name);
    console.log('Телефон:', phone);

    alert('Спасибо, ' + name + '! Ваша заявка на ' + bags + ' мешков ' + prod + ' отправлена.');
    window.resetCalc();
  };

  window.resetCalc = () => {
    document.getElementById('cresult-card').style.display = 'none';
    document.getElementById('cOrderForm').style.display = 'none';
    document.getElementById('cOrderForm').reset();
    selected = { wall: null, tile: null, floor: null, ceiling: null };
    document.querySelectorAll('.pitem').forEach(x => x.classList.remove('sel'));
  };

});
