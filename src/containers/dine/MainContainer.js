import {NavLink, useParams} from 'react-router-dom'
import MenuListComponent from '../../components/MenuListComponent'

const FOODS = [{
  'title': 'Блинчик со сметаной',
  'description': '(1шт)',
  'image': 'http://localhost:3001/img/blinchik.jpeg',
  'price': '20',
  'category': 'zavtrak',
}, {
  'title': 'Блинчик шоколадный',
  'description': '(1шт)',
  'image': 'https://kamelenta.ru/files/0/151/14243599546718.jpg',
  'price': '25',
  'category': 'zavtrak',
}, {
  'title': 'Блинчик с джемом',
  'description': '(1шт)',
  'image': 'http://localhost:3001/img/blinchiksdjemom.jpeg',
  'price': '25',
  'category': 'zavtrak',
}, {
  'title': 'Блинчик с творогом',
  'description': '(1шт)',
  'image': 'https://img.iamcook.ru/2019/upl/recipes/middle/u-c5b57a54b22c9bd29e33f011697afa81.JPG',
  'price': '25',
  'category': 'zavtrak',
}, {
  'title': 'Рисовая каша',
  'description': '(1 порц)',
  'image': 'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/130822102925/190811173919/p_O.jpg',
  'price': '80',
  'category': 'zavtrak',
}, {
  'title': 'Гамбургер с говяжьей котлетой',
  'description': '(мясо гов,соус, салатые)',
  'image': 'http://localhost:3001/img/chonburger.jpeg',
  'price': '150',
  'category': 'burgery',
}, {
  'title': 'Гамбургер двойной с говяжьей котлетой',
  'description': '(мясо, гов)',
  'image': 'http://localhost:3001/img/burger2.jpeg',
  'price': '250',
  'category': 'burgery',
}, {
  'title': 'Чизбургер с говяжьей котлетой',
  'description': '(мясо,гов,сыр,айсберг)',
  'image': 'https://cdn.gastery.com//dishes/b06633107c2373c29e4ab6d32035fe2b.png',
  'price': '160',
  'category': 'burgery',
}, {
  'title': 'Чизбургер двойной с говяжьей котлетой',
  'description': '(мясо,гов)',
  'image': 'https://grandkulinar.ru/uploads/posts/2019-07/1563630684_chizburger-s-dvojnoj-kotletoj.jpg',
  'price': '270',
  'category': 'burgery',
}, {
  'title': '(куриная грудка,огурцы,помидор,салат,айсберг )',
  'description': 'Цезарь бургер',
  'image': 'https://img.povar.ru/uploads/97/c1/ba/f7/burger_quotcezarquot-635278.jpg',
  'price': '130',
  'category': 'burgery',
}, {
  'title': 'Dine бургер',
  'description': '(говяжий котлет,сыр ,помидор,соленые огурцы,лук крас)',
  'image': '.././img/dineburger.jpeg',
  'price': '170',
  'category': 'burgery',
}, {
  'title': 'Шаурма ассорти',
  'description': 'мясо гов , сосиски, помидор ,огурцы, капуста, фри',
  'image': 'http://localhost:3001/img/shaurma.jpeg',
  'price': '180',
  'category': 'shaurma',
}, {
  'title': 'Шаурма из говядины',
  'description': 'мясо гов, помидор, огурцы, капуста, фри',
  'image': 'http://localhost:3001/img/shaurma.jpeg',
  'price': '160',
  'category': 'shaurma',
}, {
  'title': 'Шаурма из курицы',
  'description': 'мясо кур, салаты, огурцы, капуста,фри',
  'image': 'http://localhost:3001/img/shaurma.jpeg',
  'price': '160',
  'category': 'shaurma',
}, {
  'title': 'Шаурма большой',
  'description': 'мясо кур 2х, помидор, салаты, огурцы, капуста,фри',
  'image': 'http://localhost:3001/img/shaurma.jpeg',
  'price': '230',
  'category': 'shaurma',
}, {
  'title': 'Шаурма микс',
  'description': 'мясо гов/кур, помидор,  огурцы, капуста,фри',
  'image': 'http://localhost:3001/img/shaurma.jpeg',
  'price': '200',
  'category': 'shaurma',
}, {
  'title': 'Шаурма с сыром',
  'description': 'мясо гов, сыр, помидор,  огурцы, капуста',
  'image': 'http://localhost:3001/img/shaurma.jpeg',
  'price': '180',
  'category': 'shaurma',
}, {
  'title': 'Шаурма вегетарианский',
  'description': 'салатыб помидор,  огурцы, соус',
  'image': 'http://localhost:3001/img/shaurma.jpeg',
  'price': '80',
  'category': 'shaurma',
}, {
  'title': 'Гамбургер из говядины',
  'description': 'мясо гов , салат, помидор ,огурцы',
  'image': 'https://вкуснофф.рф/img/recepty/1758/big.jpg',
  'price': '100',
  'category': 'shaurma',
}, {
  'title': 'Гамбургер из курицы',
  'description': 'мясо кур , салат, помидор ,огурцы',
  'image': 'https://www.maggi.ru/data/images/recept/img640x500/recept_2720_58kc.jpg',
  'price': '100',
  'category': 'shaurma',
}, {
  'title': 'Гамбургер из курицы двойной',
  'description': 'мясо кур , салат, помидор ,огурцы',
  'image': 'https://gippo.kz/wp-content/uploads/2020/10/IMG_3725-%D1%87%D0%B8%D0%B7%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-%D0%B4%D0%B2%D0%BE%D0%B9%D0%BD%D0%BE%D0%B9-%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B0.jpg',
  'price': '140',
  'category': 'shaurma',
}, {
  'title': 'Гамбургер Ассорти',
  'description': 'мясо гов, сосиски, помидор ,огурцы',
  'image': 'https://img.povar.ru/uploads/79/e3/d5/08/domashnii_gamburger_s_kolbasoi-614629.jpg',
  'price': '120',
  'category': 'shaurma',
}, {
  'title': 'Гамбургер двойной',
  'description': 'мясо гов 2х, салат, помидор, огурцы',
  'image': '.././img/burger2.jpeg',
  'price': '140',
  'category': 'shaurma',
}, {
  'title': 'Гамбургер вегетарианский',
  'description': 'салат, соус, майоез, кетчуп',
  'image': 'https://img.povar.ru/main/c9/41/7b/34/vegetarianskii_burger_master-klass-510146.JPG',
  'price': '70',
  'category': 'shaurma',
}, {
  'title': 'Гамбургер мини',
  'description': 'мясо гов, салат, помидор, огурцы',
  'image': 'https://www.vkusnyblog.ru/wp-content/uploads/2011/11/mini-hamburgers.jpg',
  'price': '70',
  'category': 'shaurma',
}, {
  'title': 'Чизбургер',
  'description': 'мясо гов, салат, сыр, помидор, огурцы',
  'image': 'https://www.maggi.ru/data/images/recept/img640x500/recept_3682_avoa.jpg',
  'price': '120',
  'category': 'shaurma',
}, {
  'title': 'Чизбургер большой',
  'description': 'мясо гов 2х, салат, сыр, помидор, огурцы',
  'image': 'https://oshfood.kg/dish_image/1974.png',
  'price': '130 сом',
  'category': 'shaurma',
}, {
  'title': 'Хот-Дог',
  'description': 'сосиски, салат, помидор, огурцы',
  'image': 'https://foodman.club/wp-content/uploads/2017/10/11-7.jpg',
  'price': '70 сом',
  'category': 'shaurma',
}, {
  'title': 'Хот-Дог двойной',
  'description': 'сосиски 2х, салат, помидор, огурцы',
  'image': 'https://foodman.club/wp-content/uploads/2017/10/11-7.jpg',
  'price': '90',
  'category': 'shaurma',
}, {
  'title': 'Хот-Дог Микс',
  'description': 'мясо гов, сосиски, салат, помидор, огурцы',
  'image': 'https://oshfood.kg/dish_image/1994.png',
  'price': '110',
  'category': 'shaurma',
}, {
  'title': 'Сосиски',
  'description': '',
  'image': 'https://img-global.cpcdn.com/recipes/2432722e20f1b5a0/1200x630cq70/photo.jpg',
  'price': '20 сом',
  'category': 'shaurma',
}, {
  'title': 'Картофель фри',
  'description': '',
  'image': 'http://localhost:3001/img/fri.jpeg',
  'price': '80 сом',
  'category': 'shaurma',
}, {
  'title': 'Картофель по-деревенной',
  'description': '',
  'image': 'http://localhost:3001/img/fri2.jpeg',
  'price': '100',
  'category': 'shaurma',
}, {
  'title': 'Крокеты',
  'description': '',
  'image': 'https://alimero.ru/uploads/images/00/04/19/2013/03/24/385d80.jpg',
  'price': '100 сом',
  'category': 'shaurma',
}, {
  'title': 'Dine',
  'description': '(сыр,соус,сливочный,мусулман колбаса,кур.филе,лук)',
  'image': 'http://localhost:3001/img/pizzadaine.jpeg',
  'price': '350/450',
  'category': 'picca',
}, {
  'title': 'Маргарита',
  'description': '(соус,сыр моцарелла,томат свежее)',
  'image': 'https://gotovim-doma.ru/images/recipe/5/e9/5e959e5cda3cb3d25a7fb9a469a65f3d_l.jpg',
  'price': '280/350 сом',
  'category': 'picca',
}, {
  'title': 'Пепперони',
  'description': '(соус фирменный,колбаса,сыр,соус BBQ)',
  'image': 'https://static.1000.menu/img/content-v2/85/ff/6190/pitstsa-pepperoni-_1612599986_22_max.jpg',
  'price': '350/420',
  'category': 'picca',
}, {
  'title': 'BBQ',
  'description': '(соус BBQ,соус фирменный,кур.грудка,сыр,болг.пер)',
  'image': 'https://s1.eda.ru/StaticContent/Photos/160822164559/160901180227/p_O.jpg',
  'price': '350/420 сом',
  'category': 'picca',
}, {
  'title': 'Цезарь',
  'description': '(кур.филе , айсберг,сыр пармезан,соус)',
  'image': 'https://www.kulina.ru/images/art/84632.jpg',
  'price': '300/380',
  'category': 'picca',
}, {
  'title': 'Ассорти',
  'description': '(колбаса сервелат ,колб вар.,огурцы,карнишон)',
  'image': 'https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://cookery.site/wp-content/uploads/2019/09/photo_92647025-1-678x381.jpg',
  'price': '350/420',
  'category': 'picca',
}, {
  'title': 'Мусулманская',
  'description': '(фир.соус,колбаса,говкур.филе,сыр)',
  'image': 'https://m.islam-today.ru/files/news/part_8/85966/preview-440x301.jpg',
  'price': '350/420 сом',
  'category': 'picca',
}, {
  'title': 'Восточная',
  'description': '(фир.соус,говяж.фарш,кур.филе,сл.перец)',
  'image': 'https://citypizza41.ru/mdata/topimg/size3/553.jpg',
  'price': '350/420 сом',
  'category': 'picca',
}, {
  'title': 'Крылышки острые',
  'description': '(3шт)',
  'image': 'http://localhost:3001/img/pizzadaine.jpeg',
  'price': '100 cом',
  'category': 'krylishki',
}, {
  'title': 'Крылышки острые',
  'description': '(12шт)',
  'image': 'http://localhost:3001/img/pizzadaine.jpeg',
  'price': '390',
  'category': 'krylishki',
}, {
  'title': 'Крылышки острые',
  'description': '(18шт)',
  'image': 'http://localhost:3001/img/pizzadaine.jpeg',
  'price': '550 cом',
  'category': 'krylishki',
}, {
  'title': 'Крылышки острые',
  'description': '(24шт)',
  'image': 'http://localhost:3001/img/pizzadaine.jpeg',
  'price': '700 cом',
  'category': 'krylishki',
}, {
  'title': 'Зпеченный ролл с крабом',
  'description': '(краб,сырный соус, сыр,унаги)',
  'image': 'https://static.insales-cdn.com/images/products/1/1169/197346449/255%D1%80%D0%BE%D0%BB%D0%BB_%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86_%D0%9A%D1%80%D0%B0%D0%B1.jpg',
  'price': '230 сом',
  'category': 'groll',
}, {
  'title': 'Заpеченный ролл ч лососем',
  'description': '(лосось,сыр слив,соус сыр,унаги)',
  'image': 'http://localhost:3001/img/zarechnyiroll.jpeg',
  'price': '230 сом',
  'category': 'groll',
}, {
  'title': 'Заpеченный ролл с сыром',
  'description': '(курица,сыр слив,соус сыр,айсберг)',
  'image': 'https://static.1000.menu/img/content/22516/goryachie-rolly-s-lososem-i-syrom_1505993073_1_max.jpg',
  'price': '230 сом',
  'category': 'groll',
}, {
  'title': 'Темпура маки с угрем',
  'description': '(угорь,сыр сливоч,авокадо,соус спайси)',
  'image': 'https://yaposhka64.ru/assets/images/products/94/big/tempura-maki.jpg',
  'price': '260 сом',
  'category': 'groll',
}, {
  'title': 'Темпура маки с лососем',
  'description': '(лосось,сыр сливоч,авокадо,соус спайси)',
  'image': 'https://makarolls.ru/upload/iblock/fee/fee44ef27a0f42772b0390e3be6e96ec.jpg',
  'price': '250 сом',
  'category': 'groll',
}, {
  'title': 'Темпура микс',
  'description': '(лосось,угорь,авокадо,соус спайси)',
  'image': 'https://yaposhka64.ru/assets/images/products/94/big/tempura-maki.jpg',
  'price': '270 сом',
  'category': 'groll',
}, {
  'title': 'Хаманиши',
  'description': '(лосось,сыр сливочный,терияки,свежие огурцы)',
  'image': 'https://static.insales-cdn.com/images/products/1/6917/117062405/aafed4aafa3f5369eb3399ca80302b4c.jpg',
  'price': '250 сом',
  'category': 'groll',
}, {
  'title': 'Филадельфия',
  'description': '(лосось,сыр сливочный,свежие огурцы)',
  'image': 'http://localhost:3001/img/filadrool.jpeg',
  'price': '240 сом',
  'category': 'hroll',
}, {
  'title': 'Канадский',
  'description': '(лосос ,свеживые огурцы,сыр сливочный)',
  'image': 'http://fannykitchen.com/image/1896.jpg',
  'price': '220 сом',
  'category': 'hroll',
}, {
  'title': 'Калифорния c лососем',
  'description': '(лосось,икра,свежие огуцы,сыр сливоч)',
  'image': 'https://imperator24.ru/assets/images/products/106/375-1300.jpg',
  'price': '230 сом',
  'category': 'hroll',
}, {
  'title': 'Калифорния с крабом',
  'description': '(краб нежный,икра,свежие огурцы,сыр слив)',
  'image': 'https://берисуши.рф/uploads/store/product/325374e39903550b6f1dc3e955b88978.jpg',
  'price': '220 сом',
  'category': 'hroll',
}, {
  'title': 'Шев-Токусен',
  'description': '(угоры,сыр сливочный,авокадо,cоус терияки,кунжут)',
  'image': 'http://express-pizza.vn.ua/upload/resize_cache/iblock/abf/480_372_2/abfd4425e5ab7eed4ba3da293a77e9c5.jpg?154391533952302',
  'price': '260',
  'category': 'hroll',
}, {
  'title': 'Чай с малиной',
  'description': '(чайник)',
  'price': '90 cом',
  'category': 'gnapitki',
}, {
  'title': 'Чай с лимоном',
  'description': '(чайник)',
  'price': '90 cом',
  'category': 'gnapitki',
}, {
  'title': 'Чай с имбиром',
  'description': '(чайник)',
  'price': '90 cом',
  'category': 'gnapitki',
}, {
  'title': 'Кофе со сливками',
  'description': '(чашка)',
  'price': '25 cом',
  'category': 'gnapitki',
}, {
  'title': 'Кофе черный',
  'description': '(чашка)',
  'price': '20 cом',
  'category': 'gnapitki',
}, {
  'title': 'Чай черныйзеленый',
  'description': '(чайник)',
  'price': '20 cом',
  'category': 'gnapitki',
}, {'title': 'Чай Мix', 'description': '(чайник)', 'price': '30 cом', 'category': 'gnapitki'}, {
  'title': 'Coca-Cola',
  'description': '(0.5/1л)',
  'price': '50/80 cом',
  'category': 'napitki',
}, {'title': 'Fanta', 'description': '(0.5/ 1л)', 'price': '50/80 cом', 'category': 'napitki'}, {
  'title': 'Sprite',
  'description': '(0.5/1л)',
  'price': '50/80 cом',
  'category': 'napitki',
}, {'title': 'Pepsi', 'description': '(0.5/1л)', 'price': '50/80 cом', 'category': 'napitki'}, {
  'title': 'Piko',
  'description': '(0.5/1л)',
  'price': '60/120 cом',
  'category': 'napitki',
}, {'title': 'Fuse Tea', 'description': '(0.5/1л)', 'price': '50/80 cом', 'category': 'napitki'}, {
  'title': 'Адыгене',
  'description': '(0.5/1л)',
  'price': '30/40 cом',
  'category': 'napitki',
}, {'title': 'j-7', 'description': '1л', 'price': '120 cом', 'category': 'sok'}, {
  'title': 'Piko',
  'description': '1л',
  'price': '100 cом',
  'category': 'sok',
}, {'title': 'Любимый', 'description': '1л', 'price': '100 cом', 'category': 'sok'}, {
  'title': 'Шорпо из говядины',
  'description': '(1порц)',
  'image': 'http://localhost:3001/img/shorpo.jpeg',
  'price': '150 сом',
  'category': 'bluda',
}, {
  'title': 'Мастава',
  'description': '(1порц)',
  'image': 'https://e2.edimdoma.ru/data/recipes/0011/7037/117037-ed4_wide.jpg?1628777183',
  'price': '130 сом',
  'category': 'bluda',
}, {
  'title': 'Мясо по Казахски',
  'description': '(1порц)',
  'image': 'https://img.povar.ru/main/24/c7/7c/da/myaso_po-kazahski-55714.jpg',
  'price': '150 сом',
  'category': 'bluda',
}, {
  'title': 'Чучбара',
  'description': '(1порц)',
  'image': 'https://www.gastronom.ru/binfiles/images/00000241/00081264.jpg',
  'price': '140',
  'category': 'bluda',
}, {
  'title': 'Лагман национальный',
  'description': '(1порц)',
  'image': 'http://localhost:3001/img/lagman.jpeg',
  'price': '150 сом',
  'category': 'bluda',
}, {
  'title': 'Борщ',
  'description': '(1порц)',
  'image': 'https://img.povar.ru/main/ab/23/b4/9c/samii_vkusnii_borsh-404089.jpg',
  'price': '140 сом',
  'category': 'bluda',
}, {
  'title': 'Куурдак из говядины',
  'description': '(300гр)',
  'image': 'https://s1.eda.ru/StaticContent/Photos/160915225201/160926225652/p_O.jpg',
  'price': '300 сом',
  'category': 'bluda',
}, {
  'title': 'Мясо по-Арабски',
  'description': '(300гр)',
  'image': 'https://img.povar.ru/main/fe/35/85/21/myaso_po-arabski-55681.jpg',
  'price': '300 сом',
  'category': 'bluda',
}, {
  'title': 'Бифштекс',
  'description': '(1порц)',
  'image': 'http://localhost:3001/img/bt.jpeg',
  'price': '160 сом',
  'category': 'bluda',
}, {
  'title': 'Гуляш',
  'description': '(1порц)',
  'image': 'https://home-restaurant.ru/wp-content/uploads/2014/07/gulyash-iz-govyadinyi-s-podlivkoy-retsept-s-foto_13.jpg',
  'price': '160 сом',
  'category': 'bluda',
}, {
  'title': 'Манты',
  'description': '(1шт,1порц)',
  'image': 'http://localhost:3001/img/manty.jpeg',
  'price': '30,150 сом',
  'category': 'bluda',
}, {
  'title': 'Манты жареный',
  'description': '(1шт,1порц)',
  'image': 'http://localhost:3001/img/manty.jpeg',
  'price': '35,175 сом',
  'category': 'bluda',
}, {
  'title': 'Плов',
  'description': '(1порц)',
  'image': 'http://localhost:3001/img/ash.jpeg',
  'price': '150 сом',
  'category': 'bluda',
}, {
  'title': 'Курица хрустящий',
  'description': '(200гр)',
  'image': 'https://alimero.ru/uploads/images/18/76/55/2018/11/05/147c9a.jpg',
  'price': '160 сом',
  'category': 'bluda',
}, {
  'title': 'Яйца с горохом',
  'description': '(150гр)',
  'image': 'http://localhost:3001/img/goroxtukum.jpeg',
  'price': '130 сом',
  'category': 'bluda',
}, {
  'title': 'Гарнир',
  'description': '(1порц)',
  'image': 'https://receptveka.ru/images/r/ovkuse.com/img/Zr4yw5gt.jpg',
  'price': '80 сом',
  'category': 'bluda',
}, {
  'title': 'Котлета',
  'description': '(1шт)',
  'image': 'https://static.1000.menu/img/content-v2/53/4f/8829/myasnye-kotlety-iz-farsha-na-skovorode_1624773673_3_max.jpg',
  'price': '80 сом',
  'category': 'bluda',
}, {
  'title': 'Колхозный',
  'description': '(200гр)',
  'image': 'https://static.ruvita.ru/store/product/365x365_bb2adc197c7bc41aeddfce9f9d299800.jpg',
  'price': '130 сом',
  'category': 'salat',
}, {
  'title': 'Оливье',
  'description': '(200гр)',
  'image': 'http://localhost:3001/img/o.jpeg',
  'price': '120 сом',
  'category': 'salat',
}, {
  'title': 'Острый',
  'description': '(200гр)',
  'image': 'http://localhost:3001/img/o.jpeg',
  'price': '180 сом',
  'category': 'salat',
}, {
  'title': 'Цезарь с курицей',
  'description': '(200гр)',
  'image': 'http://localhost:3001/img/sezarsalat.jpeg',
  'price': '180 сом',
  'category': 'salat',
}, {'title': 'Сырный', 'description': '', 'price': '20 cом', 'category': 'sous'}, {
  'title': 'Чесночный',
  'description': '',
  'price': '20',
  'category': 'sous',
}, {'title': 'Тар-Тар', 'description': '', 'price': '20 cом', 'category': 'sous'}, {
  'title': 'Барбекью',
  'description': '',
  'price': '20',
  'category': 'sous',
}, {'title': 'Териянка', 'description': '', 'price': '20 cом', 'category': 'sous'}, {
  'title': 'Цезарь',
  'description': '',
  'price': '20',
  'category': 'sous',
}, {'title': 'Сладкий чили', 'description': '', 'price': '20 cом', 'category': 'sous'}, {
  'title': 'Шрирача острый',
  'description': '',
  'price': '20',
  'category': 'sous',
}, {
  'title': 'Вок с курицей с овощами',
  'description': '',
  'price': '150',
  'category': 'wok',
}, {
  'title': 'Вок с говядиной с овощами с соусом терияки',
  'description': '',
  'price': '160',
  'category': 'wok',
}, {'title': 'Вок Микс', 'description': '', 'price': '200', 'category': 'wok'}]

const MENU = [

  {label: 'Все', link: ''},
  {label: 'Завтрак', link: 'zavtrak'},
  {label: 'Бургеры', link: 'burgery'},
  {label: 'Шаурма', link: 'shaurma'},
  {label: 'Пицца', link: 'picca'},
  {label: 'Крылышки', link: 'krylishki'},
  {label: 'Горячий роллы', link: 'groll'},
  {label: 'Холодные роллы', link: 'hroll'},
  {label: 'Горячии напитки', link: 'gnapitki'},
  {label: 'Напитки', link: 'napitki'},
  {label: 'Сок', link: 'sok'},
  {label: 'Блюда', link: 'bluda'},
  {label: 'Салат', link: 'salat'},
  {label: 'Соус', link: 'sous'},
  {label: 'Вок', link: 'wok'},

]

function MainContainer() {
  const {category} = useParams()

  const getLink = (l) => `/dine/${l}`

  const FILTERED_FOODS = FOODS.filter(g => !category || g.category === category)

  return (
    <div className={'dine-menu'}>

      <div className={'d-flex justify-content-center'}>
        <img alt={'Menu Dine'} style={{width: '50vw'}} src={require('../../assets/dine/2000.png')}/>
      </div>

      <div className={'menu-categories'}>
        {MENU.map(g => (
          <NavLink to={getLink(g.link)} className={(category || '') === g.link ? 'active' : ''}>
            {g.label}
          </NavLink>
        ))}
      </div>

      <MenuListComponent category={category} list={FILTERED_FOODS}/>

    </div>
  )
}

export default MainContainer
