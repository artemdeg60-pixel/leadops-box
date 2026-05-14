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
  title: "AI-система, которая не даёт бизнесу терять заявки",
  subtitle:
    "LeadOps Box принимает входящие заявки, квалифицирует их через AI, отправляет карточку лида в Telegram, сохраняет данные в таблицу и напоминает, если клиент не обработан вовремя.",
  primaryCta: "Получить демо",
  secondaryCta: "Обсудить условия",
  signals: ["Telegram-карточка", "Google Sheets", "AI-summary", "Reminder"],
};

export const audienceCards = [
  {
    id: "real-estate",
    title: "Агентства недвижимости",
    problem:
      "Дорогие заявки на покупку, аренду или подбор объекта теряются, если менеджер отвечает поздно.",
    solution:
      "LeadOps Box отправляет карточку лида в Telegram и фиксирует заявку в таблице.",
    icon: "Building2",
  },
  {
    id: "repair",
    title: "Ремонт / отделка",
    problem:
      "Одна заявка на ремонт может стоить сотни тысяч рублей, но её легко потерять в мессенджерах.",
    solution:
      "Система собирает бюджет, площадь, срок старта и описание задачи, а затем отправляет понятную карточку лида.",
    icon: "Hammer",
  },
  {
    id: "other-businesses",
    title: "Другие сервисные бизнесы",
    problem:
      "Любой бизнес с дорогой заявкой теряет деньги, если заявки не фиксируются и не контролируются.",
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
    title: "Приходит reminder",
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
      "Сценарий показывает, как заявка с параметрами объекта превращается в Telegram-карточку, строку в таблице и reminder, если менеджер не успел ответить.",
    screenshots: [
      {
        label: "Форма заявки",
        path: assetPath("/assets/screens/real-estate/re-form.png"),
      },
      {
        label: "Telegram-карточка",
        path: assetPath("/assets/screens/real-estate/re-telegram-intake.png"),
      },
      {
        label: "Таблица лидов",
        path: assetPath("/assets/screens/real-estate/re-sheet.png"),
      },
      {
        label: "Reminder",
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
        label: "Форма заявки",
        path: assetPath("/assets/screens/repair/rp-form.png"),
      },
      {
        label: "Telegram-карточка",
        path: assetPath("/assets/screens/repair/rp-telegram-intake.png"),
      },
      {
        label: "Таблица лидов",
        path: assetPath("/assets/screens/repair/rp-sheet.png"),
      },
      {
        label: "Reminder",
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
  { title: "Reminder по необработанным лидам", icon: "BellRing" },
  { title: "Отдельный клиентский контур", icon: "Network" },
];

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
      "reminder",
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
      "Пилотную версию можно подготовить за несколько дней после получения вводных.",
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
