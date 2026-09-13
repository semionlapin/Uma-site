import type { LandingContent } from './types';

export const ruContent: LandingContent = {
  header: {
    navItems: [
      { label: 'Игротека', href: '#games' },
      { label: 'Шаблоны', href: '#templates' },
      { label: 'Тарифные планы', href: '#pricing' },
      { label: 'Помощь', href: '#help' },
    ],
    ctaLabel: 'Войти',
    currentLang: 'RU',
  },
  hero: {
    badge: 'AI-генерация квестов — доступна',
    title: 'Преврати урок в ',
    titleHighlight: 'игру!',
    description:
      'Интерактивные игры для твоего класса. Идеально для планшетов, досок и инклюзивного обучения.',
    primaryCta: 'Создать игру',
    secondaryCta: 'Готовые игры',
    secondaryCtaCaption: 'Более 12 000 игр по всем предметам',
  },
  keyFeatures: {
    title: 'Ключевые возможности',
    tabs: [
      {
        id: 0,
        label: 'Каталог игр',
        iconKey: 'gamepad',
        steps: [
          {
            step: '01',
            title: 'Найдите нужный предмет',
            description:
              'Выбирайте игры из каталога по школьным предметам, классам и темам.',
            url: 'www.umaigra.com/catalog',
            graphicKey: 'FindGame01',
          },
          {
            step: '02',
            title: 'Выбери игру',
            description:
              'Сотни качественных игр от учителей-профессионалов со всего мира — выбирай и пробуй прямо сейчас.',
            url: 'www.umaigra.com/preview',
            graphicKey: 'FindGame02',
          },
          {
            step: '03',
            title: 'Поделись игрой',
            description:
              'Отправь ссылку ученикам в мессенджере или встрой игру прямо в урок.',
            url: 'www.umaigra.com/play',
            graphicKey: 'FindGame03',
          },
        ],
      },
      {
        id: 1,
        label: 'Редактор игр',
        iconKey: 'pencil',
        steps: [
          {
            step: '01',
            title: 'Выберите шаблон',
            description:
              'Найди нужную игровую механику в библиотеке под свою учебную задачу: викторины, карточки, поиск пар или турниры.',
            url: 'www.umaigra.com/templates',
            graphicKey: 'CreateGame01',
          },
          {
            step: '02',
            title: 'Наполните контентом',
            description:
              'Добавьте свои вопросы, варианты ответов, иллюстрации и подсказки за пару кликов или выберите готовый набор из базы.',
            url: 'www.umaigra.com/editor',
            graphicKey: 'CreateGame02',
          },
          {
            step: '03',
            title: 'Игра готова к публикации',
            description:
              'Опубликуй игру в Игротеке, чтобы открыть доступ ученикам или другим учителям.',
            url: 'www.umaigra.com/play/live',
            graphicKey: 'CreateGame03',
          },
        ],
      },
      {
        id: 2,
        label: 'Контент с ИИ',
        iconKey: 'sparkles',
        steps: [
          {
            step: '01',
            title: 'Задайте тему урока',
            description:
              'Введите тему, предмет или загрузите учебный текст для мгновенной генерации.',
            url: 'www.umaigra.com/ai/prompt',
            graphicKey: 'GenerateGame01',
          },
          {
            step: '02',
            title: 'ИИ создаёт вопросы и квесты',
            description:
              'Нейросеть генерирует сбалансированные вопросы, варианты ответов и подсказки за секунды.',
            url: 'www.umaigra.com/ai/generate',
            graphicKey: 'GenerateGame02',
          },
          {
            step: '03',
            title: 'Редактируйте и публикуйте',
            description:
              'Скорректируйте детали и запустите готовый квест для своих учеников.',
            url: 'www.umaigra.com/ai/publish',
            graphicKey: 'GenerateGame03',
          },
        ],
      },
      {
        id: 3,
        label: 'Монетизация',
        iconKey: 'sprout',
        steps: [
          {
            step: '01',
            title: 'Создайте авторский курс или игру',
            description:
              'Оформляйте свои лучшие методические материалы и игры в платные сборники.',
            url: 'www.umaigra.com/creator/new',
            graphicKey: 'SellGame01',
          },
          {
            step: '02',
            title: 'Делись с миром',
            description:
              'Публикуй игру в Игротеке или встраивай на внешние платформы в пару кликов.',
            url: 'www.umaigra.com/creator/pricing',
            graphicKey: 'SellGame02',
          },
          {
            step: '03',
            title: 'Монетизируй творчество',
            description:
              'Монетизируй авторские материалы и делись опытом с коллегами со всего мира.',
            url: 'www.umaigra.com/creator/payout',
            graphicKey: 'SellGame03',
          },
        ],
      },
    ],
    moreTitle: 'А ещё...',
    uspCards: [
      {
        title: 'Живые турниры и аналитика',
        description: 'Проводите захватывающие состязания прямо на уроке или онлайн!',
        iconKey: 'activity',
      },
      {
        title: 'Инструменты для электронной доски',
        description: 'Превратите интерактивную доску в центр притяжения класса.',
        iconKey: 'presentation',
      },
      {
        title: 'Инклюзивность и доступность (ООП)',
        description: 'Umaigra создана так, чтобы каждый ребенок чувствовал себя успешно.',
        iconKey: 'smile',
      },
    ],
  },
  audience: {
    titlePrefix: 'Umaigra',
    titleSuffix: 'это для всех',
    teachers: {
      title: 'Для учителей',
      description:
        'Меньше рутины больше творчества: экономь до 5 часов в неделю, делись наработками и зарабатывай на своих материалах.',
      imageSrc: '/images/sections/ForTeachers.webp',
      imageAlt: 'Преподаватель проводит урок',
      pills: [
        {
          title: 'Экономьте время',
          description: 'До 5 часов в неделю на подготовке к урокам',
          iconKey: 'hourglass',
        },
        {
          title: 'Делитесь опытом',
          description: 'Обменивайтесь материалами с коллегами',
          iconKey: 'book',
        },
        {
          title: 'Доход от своих игр',
          description: 'Простая монетизация авторского контента',
          iconKey: 'sprout',
        },
      ],
    },
    students: {
      title: 'Для учеников',
      description:
        'Учёба с азартом и без стресса: личные победы, классные турниры и бережная поддержка каждого ребёнка.',
      imageSrc: '/images/sections/ForStudents.webp',
      imageAlt: 'Дети обучаются за интерактивной панелью',
      pills: [
        {
          title: 'Живые турниры',
          description: 'Захватывающие состязания и игры у доски',
          iconKey: 'gamepad',
        },
        {
          title: 'Наглядный прогресс',
          description: 'Понятная мотивация и награды за каждый шаг',
          iconKey: 'star',
        },
        {
          title: 'Учёба без давления',
          description: 'Без стресса, спешки и страха сделать ошибку',
          iconKey: 'wand',
        },
      ],
    },
  },
  faq: {
    title: 'Популярные вопросы',
    items: [
      {
        question: 'Что доступно после регистрации?',
        answer:
          'Сразу после регистрации ты получаешь полный доступ к Редактору и Менеджеру, чтобы легко создавать свои интерактивные уроки, настраивать профили учеников и следить за их прогрессом. В Игротеке можно свободно открывать работы сообщества и оценивать лучшие идеи коллег. А если подключишь Премиум, то сможешь копировать любые понравившиеся игры к себе, менять их под свой класс и запускать яркие турниры.',
      },
      {
        question: 'Как искать игры в Игротеке?',
        answer:
          'Чтобы быстрее найти нужное, используй  фильтры: выбирай предмет, шаблон, язык, возраст и рейтинг со звёздочками, а также переключайся между играми от учителей или других игроков. Все выбранные параметры сохранятся автоматически, так что при следующем визите ты сразу вернёшься к привычной подборке.',
      },
      {
        question: 'Как поделиться ссылкой на игру?',
        answer:
          'Зайди в Игротеку, выбери нужную игру и нажми кнопку «Ссылка» в правом верхнем углу. Дальше просто скопируй прямой адрес, чтобы отправить его друзьям в мессенджере или по почте, либо возьми HTML-код, если хочешь встроить игру на свой сайт или блог.',
      },
    ],
    cta: {
      primaryCta: 'Зарегистрироваться',
      primaryCtaCaption: 'Это займёт меньше минуты.',
      secondaryCta: 'Игротека',
    },
  },
  footer: {
    links: [
      { label: 'Конфиденциальность', href: '#privacy' },
      { label: 'Условия использования', href: '#terms' },
      { label: 'Тарифные планы', href: '#pricing' },
      { label: 'Помощь', href: '#help' },
    ],
  },
};
