const assetPath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const contacts = {
  name: "Артём",
  telegram: "@Naqiho",
  telegramUrl: "https://t.me/Naqiho",
  email: "absoncala05@gmail.com",
  emailUrl: "mailto:absoncala05@gmail.com",
  emailComposeUrl:
    "https://mail.google.com/mail/?view=cm&fs=1&to=absoncala05%40gmail.com",
};

export const navItems = [
  { label: "Главная", href: "#home" },
  { label: "Недвижимость", href: "#real-estate" },
  { label: "Ремонт", href: "#repair" },
  { label: "Другие бизнесы", href: "#other-businesses" },
  { label: "Демо", href: "#demo" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

export const heroData = {
  eyebrow: "LeadOps Box / AI lead operations",
  title: "AI-система, которая не даёт сервисному бизнесу терять заявки",
  subtitle:
    "LeadOps Box принимает заявку, делает AI-краткое резюме, отправляет карточку лида в Telegram, сохраняет данные в таблицу и напоминает, если менеджер не обработал обращение.",
  primaryCta: "Получить демо",
  secondaryCta: "Обсудить условия",
  signals: ["Telegram-карточка", "Google Sheets", "AI-summary", "Напоминание"],
  badges: [
    "Пилот за 3–7 дней",
    "Отдельный контур под клиента",
    "Без тяжёлого внедрения CRM",
  ],
};

export const audienceCards = [
  {
    id: "real-estate",
    title: "Агентства недвижимости",
    problem:
      "Дорогие заявки на покупку, аренду или подбор объекта теряются, если менеджер отвечает поздно.",
    solution:
      "LeadOps Box отправляет карточку лида в Telegram, фиксирует заявку в таблице и напоминает, если обращение не обработано.",
    icon: "Building2",
  },
  {
    id: "repair",
    title: "Ремонт / отделка",
    problem:
      "Одна заявка на ремонт под ключ может быть очень ценной, но её легко потерять в мессенджерах или обработать слишком поздно.",
    solution:
      "Система собирает бюджет, площадь, срок старта и описание задачи, а затем отправляет понятную карточку лида.",
    icon: "Hammer",
  },
  {
    id: "other-businesses",
    title: "Другие сервисные бизнесы",
    problem:
      "Любой бизнес с дорогой заявкой теряет деньги, если обращения не фиксируются и не контролируются.",
    solution:
      "LeadOps Box можно адаптировать под стоматологии, beauty, авто, мебель, юридические услуги, курсы и другие направления.",
    icon: "BriefcaseBusiness",
  },
];

export const howItWorks = [
  {
    title: "Клиент оставляет заявку",
    text: "Форма собирает нужные поля под конкретную нишу и сценарий.",
    icon: "PanelTop",
  },
  {
    title: "AI анализирует запрос",
    text: "Система выделяет смысл, потребность, срочность и важные детали.",
    icon: "Sparkles",
  },
  {
    title: "Telegram получает карточку лида",
    text: "Ответственный видит заявку в понятном формате сразу после отправки.",
    icon: "Send",
  },
  {
    title: "Лид записывается в таблицу",
    text: "История заявок остаётся в Google Sheets для контроля и анализа.",
    icon: "Table2",
  },
  {
    title: "Приходит напоминание",
    text: "Если лид не обработан, система напоминает о нём в Telegram.",
    icon: "AlarmClockCheck",
  },
];

export const architectureItems = [
  "Отдельная форма",
  "Отдельная таблица",
  "Отдельный Telegram-чат",
  "Отдельная логика напоминаний",
];

export const demoCases = [
  {
    id: "demo-real-estate",
    label: "Демо для недвижимости",
    title: "Заявка на подбор объекта без потерь между формой и менеджером",
    description:
      "Сценарий показывает, как заявка с параметрами объекта превращается в Telegram-карточку, строку в таблице и напоминание, если менеджер не успел ответить.",
    screenshots: [
      {
        label: "Форма заявки с ключевыми полями",
        caption:
          "Клиент оставляет контакты, параметры объекта и удобный способ связи.",
        path: assetPath("/assets/screens/real-estate/re-form.png"),
      },
      {
        label: "Telegram-карточка для ответственного",
        caption:
          "Менеджер сразу видит бюджет, город, запрос, ссылку и AI-комментарий.",
        path: assetPath("/assets/screens/real-estate/re-telegram-intake.png"),
      },
      {
        label: "Таблица лидов для контроля",
        caption:
          "Заявка сохраняется в отдельной таблице, чтобы её можно было проверить позже.",
        path: assetPath("/assets/screens/real-estate/re-sheet.png"),
      },
      {
        label: "Напоминание по необработанному лиду",
        caption:
          "Если обращение зависло, Telegram напоминает о нём ответственному.",
        path: assetPath("/assets/screens/real-estate/re-telegram-reminder.png"),
      },
    ],
  },
  {
    id: "demo-repair",
    label: "Демо для ремонта",
    title: "Заявка на ремонт с бюджетом, площадью и сроком старта",
    description:
      "Сценарий собирает вводные по ремонту, упаковывает их в AI-summary, отправляет в Telegram и помогает не забыть о дорогом лиде.",
    screenshots: [
      {
        label: "Форма заявки под ремонт",
        caption:
          "Собираются контакты, площадь, бюджет, срок старта и описание задачи.",
        path: assetPath("/assets/screens/repair/rp-form.png"),
      },
      {
        label: "Telegram-карточка с AI-summary",
        caption:
          "Ответственный получает краткую карточку с параметрами ремонта и оценкой запроса.",
        path: assetPath("/assets/screens/repair/rp-telegram-intake.png"),
      },
      {
        label: "Таблица заявок по ремонту",
        caption:
          "Все поля заявки фиксируются в таблице для контроля обработки.",
        path: assetPath("/assets/screens/repair/rp-sheet.png"),
      },
      {
        label: "Напоминание по ремонту",
        caption:
          "Система помогает не забыть о лиде, если он не был обработан вовремя.",
        path: assetPath("/assets/screens/repair/rp-telegram-reminder.png"),
      },
    ],
  },
];

export const benefits = [
  { title: "Форма заявки под нишу", icon: "PanelTop" },
  { title: "Telegram-уведомления", icon: "Send" },
  { title: "Таблица лидов", icon: "Table2" },
  { title: "AI-summary", icon: "Sparkles" },
  { title: "Напоминание по необработанным лидам", icon: "BellRing" },
  { title: "Отдельный клиентский контур", icon: "Network" },
];

export const readyForDemoItems = [
  {
    title: "Demo-контур для недвижимости",
    text: "Форма, Telegram-карточка, таблица лидов и напоминание по необработанному обращению.",
    icon: "Building2",
  },
  {
    title: "Demo-контур для ремонта",
    text: "Сбор бюджета, площади, срока старта, AI-summary и контроль заявки через Telegram.",
    icon: "Hammer",
  },
  {
    title: "Telegram-уведомления",
    text: "Карточка лида приходит ответственному сразу после отправки формы.",
    icon: "Send",
  },
  {
    title: "Таблицы лидов",
    text: "Все заявки фиксируются в отдельной таблице клиента.",
    icon: "Table2",
  },
  {
    title: "AI-summary",
    text: "AI помогает быстро понять суть запроса, бюджет, срочность и качество лида.",
    icon: "Sparkles",
  },
  {
    title: "Напоминания",
    text: "Если заявка не обработана, система отправляет напоминание в Telegram.",
    icon: "BellRing",
  },
];

export const readyForDemoSection = {
  eyebrow: "Готово для показа",
  title: "Что уже готово для показа",
  subtitle:
    "Сайт не продаёт абстрактную идею: уже собраны рабочие demo-контуры, которые можно показать на примере недвижимости и ремонта.",
};

export const pilotRequirements = [
  {
    title: "Поля заявки",
    text: "Какие данные нужно собирать: имя, телефон, услуга, бюджет, срок, описание задачи.",
    icon: "PanelTop",
  },
  {
    title: "Telegram-ответственный",
    text: "Кто получает карточки лидов и напоминания в отдельном Telegram-чате.",
    icon: "Send",
  },
  {
    title: "Таблица лидов",
    text: "Какие данные должны сохраняться для контроля и последующей обработки.",
    icon: "Table2",
  },
  {
    title: "Время напоминания",
    text: "Через сколько часов система должна напоминать, если лид не обработан.",
    icon: "AlarmClockCheck",
  },
  {
    title: "Логика обработки",
    text: "Какие статусы считать обработкой: связались, передали менеджеру, закрыли, отказ.",
    icon: "Network",
  },
];

export const pilotRequirementsSection = {
  eyebrow: "Запуск пилота",
  title: "Что нужно для запуска пилота",
  subtitle:
    "На старте достаточно быстро собрать вводные, чтобы адаптировать контур под нишу и реальный процесс обработки заявок.",
};

export const inlineCtas = {
  audience: {
    text: "Хотите проверить такой сценарий на своём бизнесе?",
    button: "Написать в Telegram",
  },
  demo: {
    title: "Хотите такой сценарий под ваш бизнес?",
    text: "Можно начать с пилота: адаптировать форму, Telegram-карточку, таблицу и напоминания под вашу нишу.",
    button: "Обсудить мой сценарий",
  },
  pricing: {
    text: "Хотите проверить такой сценарий на своём бизнесе?",
    button: "Написать в Telegram",
  },
};

export const pricingNote =
  "Для первых клиентов доступны пилотные условия. Финальная стоимость зависит от ниши, количества форм, сценариев и интеграций.";

export const pricingPlans = [
  {
    title: "Пилот",
    ruPrice: "от 14 900 ₽",
    internationalPrice: "from $199",
    featured: false,
    items: [
      "1 форма",
      "1 Telegram-чат",
      "1 таблица",
      "AI-summary",
      "напоминание",
      "базовая настройка",
    ],
  },
  {
    title: "Внедрение",
    ruPrice: "от 25 900 ₽",
    internationalPrice: "from $349",
    featured: true,
    items: [
      "всё из пилота",
      "адаптация под бизнес",
      "отдельный клиентский контур",
      "настройка логики",
      "тестирование",
      "краткая инструкция",
    ],
  },
  {
    title: "Сопровождение",
    ruPrice: "от 9 900 ₽/мес",
    internationalPrice: "from $99/month",
    featured: false,
    items: [
      "мониторинг сценариев",
      "мелкие правки",
      "поддержка",
      "корректировка текстов",
      "помощь с новыми полями",
    ],
  },
];

export const faqItems = [
  {
    question: "Это CRM?",
    answer:
      "Нет. LeadOps Box не заменяет полноценную CRM. Это лёгкий контур для приёма, квалификации и контроля заявок. Его можно использовать до CRM или рядом с ней.",
  },
  {
    question: "Можно ли адаптировать под мой бизнес?",
    answer:
      "Да. Форма, Telegram-сообщение, таблица и логика напоминаний адаптируются под нишу клиента.",
  },
  {
    question: "Данные разных клиентов смешиваются?",
    answer:
      "Нет. Для каждого клиента создаётся отдельный контур: отдельная форма, таблица, Telegram-чат и сценарии.",
  },
  {
    question: "Сколько занимает запуск?",
    answer:
      "Пилотную версию можно подготовить за 3–7 дней после получения вводных.",
  },
  {
    question: "Что нужно от клиента для запуска?",
    answer:
      "Нужно понять нишу, поля заявки, ответственного за лиды, Telegram-чат и базовую логику обработки.",
  },
  {
    question: "Можно ли потом подключить CRM?",
    answer:
      "Да. LeadOps Box можно развивать дальше и подключать CRM, дополнительные уведомления, аналитику и новые сценарии.",
  },
];
