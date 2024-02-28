import {Category} from "./categories";

export interface Product {
  image:string[];
  name: string;
  rating: number;
  description: string;
  reference:string;
  i:number;
  category: Category;
  likes:number;
}

export const products:Product[] = [
  {
    image:['../assets/images/download.jpeg', "../assets/images/iphone13-2.jpeg", '../assets/images/iphone13-3.jpeg'],
    name:'Apple Iphone 13',
    rating:4.9,
    description:"Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.",
    reference:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    i:0,
    category: {name: "Телефоны"},
    likes:1200
  },
  {
    image:['../assets/images/iphone15-1.jpg', '../assets/images/iphone15-2.webp', '../assets/images/iphone15-3.png'],
    name:'Apple Iphone 15',
    rating: 4.6,
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    i:0,
    category: {name: "Телефоны"},
    likes:1200
  },
  {
    image: ['../assets/images/iphone15pro-1.webp', '../assets/images/iphone15pro-2.jpg', '../assets/images/iphone15pro-3.webp'],
    name:'Apple Iphone 15pro',
    rating: 4.7,
    description: 'Apple iPhone 15 Pro - сверхпрочный смартфон, изготовленный из титана. Устройство работает на мощном процессоре Apple A17 Pro и обладает передовой оптикой профессионального уровня.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-chernyi-113138109/?c=750000000',
    i:0,
    category: {name: "Телефоны"},
    likes:1200
  },
  {
    image: ['../assets/images/iphone15pro-1.webp', '../assets/images/iphone15pro-2.jpg', '../assets/images/iphone15pro-3.webp'],
    name:'Apple Iphone 15pro max',
    rating: 4.9,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    i:0,
    category: {name: "Телефоны"},
    likes:1200
  },
  {
    image: ['../assets/images/iphone12-1.jpg', '../assets/images/iphone12-2.jpg', '../assets/images/iphone12-3.jpeg'],
    name:'Apple Iphone 12',
    rating: 4.2,
    description: 'Невероятно прочная передняя панель Ceramic Shield. Великолепный яркий дисплей OLED. Мощный чип. И система двух камер. Всё это есть в Apple iPhone 12.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-12-128gb-chernyi-100656960/?c=750000000',
    i:0,
    category: {name: "Телефоны"},
    likes:1200
  },
  {
    image: ['../assets/images/macbookm1-1.jpeg', '../assets/images/macbookm1-1.jpeg', '../assets/images/macbookm1-1.jpeg'],
    name:'Apple Macbook Air 13',
    rating: 4.9,
    description: 'По скорости вычислений чип M1 превосходит все другие процессоры Apple. Такая производительность позволяет выполнять на MacBook Air самые ресурсоёмкие задачи, например редактировать фото и видео на профессиональном уровне или играть в игры со сложной графикой.',
    reference: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
    i:0,
    category: {name: "Ноутбуки"},
    likes:4800
  },
  {
    image:['../assets/images/macbook15-1.jpeg', '../assets/images/macbook15-2.jpeg'],
    name: 'Apple Macbook Air 15',
    rating:4.9,
    description:'15-дюймовый MacBook Air - отличный выбор для ценителей тонких и легких ноутбуков. Он предлагает большой и качественный экран, идеально подходящий для тех, кто ценит просторное отображение и комфорт при работе.',
    reference:'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkx3-sinii-111059343/?c=750000000',
    i:0,
    category:{name:"Ноутбуки"},
    likes:3435
  },
  {
    image:['../assets/images/tuf-1.jpeg', '../assets/images/tuf-2.jpeg', '../assets/images/tuf-3.jpeg'],
    name: 'ASUS TUF Gaming A15',
    rating:4.9,
    description:'Этот игровой ноутбук создан для тех, кто хочет получить надежное и производительное компьютерное устройство с наиболее востребованным функционалом. ',
    reference:'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa507xi-lp018w-90nr0ff5-m00310-seryi-110275637/?c=750000000',
    i:0,
    category:{name:"Ноутбуки"},
    likes:2353
  },
  {
    image:['../assets/images/rog-1.jpeg', '../assets/images/rog-2.jpeg'],
    name: 'ASUS ROG STRIX G18',
    rating:4.9,
    description:'Получите больше кадров в секунду и добейтесь больше побед в играх – с ноутбуком ROG Strix G18.',
    reference:'https://kaspi.kz/shop/p/asus-rog-strix-g18-g814jir-n6021-90nr0id6-m000w0-chernyi-115966545/?c=750000000',
    i:0,
    category:{name:"Ноутбуки"},
    likes:953
  },
  {
    image:['../assets/images/mtbook-1.jpeg', '../assets/images/mtbook-2.jpeg', '../assets/images/mtbook-3.jpeg'],
    name: 'Huawei Matebook D16',
    rating:4.9,
    description:'Компактный корпус, широкие возможности',
    reference:'https://kaspi.kz/shop/p/huawei-matebook-d16-mitchellg-w9611-seryi-116480692/?c=750000000',
    i:0,
    category:{name:"Ноутбуки"},
    likes:35903
  },
  {
    image:['../assets/images/aw-1.jpeg', '../assets/images/aw-2.jpeg'],
    name: 'Apple Watch Series 8 45 мм Aluminum starlight',
    rating:4.9,
    description:'Смарт-часы Apple по-прежнему ценятся за комфорт и стиль, особенно подчёркивается удобство использования уведомлений и функции подсчёта пройденной дистанции во время плавания в бассейне.',
    reference:'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-starlight-bezhevyi-106585021/?c=750000000',
    i:0,
    category:{name:"Смарт-часы"},
    likes:39
  },
  {
    image:['../assets/images/gt3pro-1.jpeg', '../assets/images/gt3pro-2.jpeg', '../assets/images/gt3pro-3.jpeg'],
    name: 'Huawei Watch GT3 Pro 46 мм',
    rating:4.9,
    description:'Huawei Watch GT3 Pro в титановом корпусе оснащен чрезвычайно прочным сапфирового стеклом, твердость которого составляет 9 баллов по шкале Мооса.',
    reference:'https://kaspi.kz/shop/p/huawei-watch-gt3-pro-46-mm-serebristyi-chernyi-105121356/?c=750000000',
    i:0,
    category:{name:"Смарт-часы"},
    likes:35235
  },
  {
    image:['../assets/images/w6-1.jpeg', '../assets/images/w6-2.jpeg', '../assets/images/w6-3.jpeg'],
    name: 'Samsung Galaxy Watch6 40 мм',
    rating:4.9,
    description:'Начните свой день полными сил с функцией тренировки сна, которая теперь доступна на Galaxy Watch6.',
    reference:'https://kaspi.kz/shop/p/samsung-galaxy-watch6-40-mm-zolotistyi-belyi-112368241/?c=750000000',
    i:0,
    category:{name:"Смарт-часы"},
    likes:3892
  },
  {
    image:['../assets/images/gt4-1.jpeg', "../assets/images/gt4-2.jpeg", "../assets/images/gt4-3.jpeg"],
    name: 'Huawei Watch GT 4 46 мм',
    rating:4.9,
    description:'Сбалансированные пропорции в сочетании с ровным гранями — воплощение незаурядной классики часового искусства.',
    reference:'https://kaspi.kz/shop/p/huawei-watch-gt-4-46-mm-serebristyi-113401380/?c=750000000',
    i:0,
    category:{name:"Смарт-часы"},
    likes:1503
  },
  {
    image:['../assets/images/s1-1.jpeg', '../assets/images/s1-2.jpeg', '../assets/images/s1-3.jpeg'],
    name: 'Xiaomi Watch S1 Pro',
    rating:4.9,
    description:'Xiaomi Watch S1 Pro Black – изящные наручные часы, выполненные в классическом круглом дизайне. Модель отличается минимально узкой рамкой и увеличенной площадью дисплея.',
    reference:'https://kaspi.kz/shop/p/xiaomi-watch-s1-pro-serebristyi-korichnevyi-109286974/?c=750000000',
    i:0,
    category:{name:"Смарт-часы"},
    likes:1204
  },
  {
    image:['../assets/images/maxler-1.jpeg'],
    name: 'Maxler 100% Golden Whey 900 г Шоколад Rich Chocolate 2 lb',
    rating:4.9,
    description:'Maxler Golden Whey – это чистый сывороточный белок премиум класса, который идеально подходит для интенсивных тренировок!',
    reference:'https://kaspi.kz/shop/p/maxler-100-golden-whey-900-g-shokolad-rich-chocolate-2-lb-100537973/?c=750000000',
    i:0,
    category:{name:"Протеин"},
    likes:500
  },
  {
    image:['../assets/images/yam-1.jpeg', '../assets/images/yam-2.jpeg', '../assets/images/yam-3.jpeg'],
    name: 'YummyLab 100% gourmet WHEY PROTEIN шоколад 950 г',
    rating:4.9,
    description:'Cпециализированный пищевой продукт для питания спортсменов: Ямми Лэб “100% Гоурмит ВЭЙ” (вкус: молочный шоколад)/Yummy lab “100% gourmet whey” (milk chocolate), порошок.',
    reference:'https://kaspi.kz/shop/p/yummylab-100-gourmet-whey-protein-shokolad-950-g-114709662/?c=750000000',
    i:0,
    category:{name:"Протеин"},
    likes:300
  },
  {
    image:['../assets/images/wh-1.jpeg', '../assets/images/wh-2.jpeg'],
    name: 'Optimum Nutrition 100% Whey Gold Standard 2 lbs Двойной Шоколад 909 г',
    rating:4.9,
    description:'Компания Optimum Nutrition® уже более 30 лет и более чем в 90 странах мира обеспечивает высочайшее качество восстановления после тренировки.',
    reference:'https://kaspi.kz/shop/p/optimum-nutrition-100-whey-gold-standard-2-lbs-dvoinoi-shokolad-909-g-29502269/?c=750000000',
    i:0,
    category:{name:"Протеин"},
    likes:3422
  },
  {
    image:['../assets/images/q-1.jpeg', '../assets/images/q-2.jpeg', '../assets/images/q-3.jpeg'],
    name: 'Протеин Qazprotein 100% Instant Whey Лесная ягода 900 г',
    rating:4.9,
    description:'Специализированный пищевой продукт для питания спортсменов “100% Instant WHEY” от Qazprotein – сывороточный протеин, разработанный для спортсменов.',
    reference:'https://kaspi.kz/shop/p/qazprotein-100-instant-whey-lesnaja-jagoda-900-g-102419738/?c=750000000',
    i:0,
    category:{name:"Протеин"},
    likes:343
  },
  {
    image:['../assets/images/p-1.jpeg', "../assets/images/p-2.jpeg"],
    name: 'Протеин Optimum Nutrition 100% Whey Gold Standard Двойной шоколад 2270 г',
    rating:4.9,
    description:'Протеин - это смесь из аминокислот, из которых собственно и состоят ваши мышцы.',
    reference:'https://kaspi.kz/shop/p/optimum-nutrition-100-whey-gold-standard-dvoinoi-shokolad-2270-g-104666743/?c=750000000',
    i:0,
    category:{name:"Протеин"},
    likes:25
  }
];


