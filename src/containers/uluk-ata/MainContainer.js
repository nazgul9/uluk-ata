import { NavLink, useParams } from 'react-router-dom'
import MenuListComponent from '../../components/MenuListComponent'

const FOODS = [
  {
    'title': 'Каша манная',
    'description': '(1 порц)',
    'price': '60 сом',
    'image': 'https://lifehacker.ru/wp-content/uploads/2018/04/Kak-svarit-mannuyu-kashu-bez-komochkov_1524085307.jpg',
    'category': 'zavtrak',
  },
  {
    'title': 'Каша рисовая',
    'description': '(1 порц)',
    'price': '60 сом',
    'image': 'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/130822102925/190811173919/p_O.jpg',
    'category': 'zavtrak',
  },
  {
    'title': 'Творог со сметаной',
    'description': '(1 порц)',
    'price': '60 сом',
    // 'image': 'https://dine-menu.web.app/img/blinchik.jpeg',
    'category': 'zavtrak',
  },
  {
    'title': 'Блины со сметаной',
    'description': '(1 шт)',
    'price': '15 сом',
    'image': 'https://www.alizy.club/wp-content/uploads/2018/01/bliny-na-smetane-min.jpg',
    'category': 'zavtrak',
  }, {
    'title': 'Блины со сгущенкой',
    'description': '(1 шт)',
    'price': '15 сом',
    'image': 'https://dine-menu.web.app/img/blinchik.jpeg',
    'category': 'zavtrak',
  }, {
    'title': 'Блины с творогом',
    'description': '(1 шт)',
    'price': '25 сом',
    'image': 'https://dine-menu.web.app/img/blinchik.jpeg',
    'category': 'zavtrak',
  }, {
    'title': 'Блины с мясом',
    'description': '(1 шт)',
    'price': '30 сом',
    'image': 'https://dine-menu.web.app/img/blinchik.jpeg',
    'category': 'zavtrak',
  },
  {
    'title': 'сырники',
    'description': '(2 шт)',
    'price': '60 сом',
    'image': 'https://static.1000.menu/img/content-v2/a7/ec/39379/syrniki-iz-tvoroga-s-mukoi-na-skovorode_1613887382_11_max.jpg',
    'category': 'zavtrak',
  },
  {
    'title': 'яичница',
    'description': '(1 шт)',
    'price': '15 сом',
    'image': 'https://s1.eda.ru/StaticContent/Photos/2/ea/2ea2a5739495455ebe732e8c42cbe453.jpg',
    'category': 'zavtrak',
  },
  {
    'title': "яйцо отварное",
    'description': '(1 шт)',
    'price': '15 сом',
    'image': 'https://fort.crimea.com/catering/uploads/fotos/e25f6f02-5207-11e9-8326-e03f49b53392_1.jpg',
    'category': 'zavtrak',
  },
  {
    'title': "нават",
    'description': '(100 гр)',
    'price': '25 сом',
    'image': 'https://i2.stat01.com/2/3752/137518772/afacdb/navat-kristallicheskij-sahar.jpg?lc=1661775781',
    'category': 'zavtrak',
  },
  {
    'title': "каймак",
    'description': '(50 гр)',
    'price': '30 сом',
    'image': 'https://cheezu.ru/wp-content/uploads/2020/05/cheese-a-la-kaymak.jpg',
    'category': 'zavtrak',
  }, {
    'title': "айран",
    'description': '(180 гр)',
    'price': '20 сом',
    'image': 'https://static.1000.menu/img/content/28294/airan-tureckii_1534240557_1_max.jpg',
    'category': 'zavtrak',
  },


  // Салаты
  {
    'title': "Салат фирменный",
    'description': '(1 порц)',
    'price': '220 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/lvuyjcrfoaf7ql5luvhu`,
    'category': 'salat',
  },
  {
    'title': "Запаченная свекла с брынзой",
    'description': '(1 порц)',
    'price': '150 сом',
    // 'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qikvwbf8k90kj8qy6gmk`,
    'category': 'salat',
  }, {
    'title': "Салат фреш",
    'description': '(1 порц)',
    'price': '180 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/dn8rqmkzivh3lqo1fdi6`,
    'category': 'salat',
  },
  {
    'title': "Салат лаззат",
    'description': '(250 гр)',
    'price': '180 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/dijusn38zaqrkq0xberb`,
    'category': 'salat',
  },
  {
    'title': "Салат ташкент",
    'description': '(220 гр)',
    'price': '170 сом',
    'image': `https://img.iamcook.ru/old/upl/recipes/misc/306122749517fab2f7c18f01b337b1fc.jpg`,
    'category': 'salat',
  }, {
    'title': "Салат греческий",
    'description': '(300 гр)',
    'price': '170 сом',
    'image': `https://chudo-povar.com/images/grecheskij-salat-recept-klassicheskij-1.jpg`,
    'category': 'salat',
  },
  {
    'title': "Салат острый",
    'description': '(250 гр)',
    'price': '180 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/nainlncej7ldhsnpsb0m`,
    'category': 'salat',
  },
  {
    'title': "Салат оливье",
    'description': '(250 гр)',
    'price': '140 сом',
    'image': `https://vkusno-i-prosto.ru/wp-content/uploads/2014/02/12039820_s.jpg`,
    'category': 'salat',
  },
  {
    'title': "Салат холхозный",
    'description': '(300 гр)',
    'price': '150 сом',
    'image': `https://nambafood.kg/dish_image/79075.png`,
    'category': 'salat',
  },
  {
    'title': "Салат язык васаби",
    'description': '(250 гр)',
    'price': '200 сом',
    'image': `https://media-cdn.tripadvisor.com/media/photo-p/1c/0f/6c/9c/caption.jpg`,
    'category': 'salat',
  },
  {
    'title': "Моцарелла капрезе",
    'description': '(250 гр)',
    'price': '210 сом',
    'image': `https://www.maggi.ru/data/images/recept/img640x500/recept_4338_zcog.jpg`,
    'category': 'salat',
  },
  {
    'title': "Цезарь с курцей",
    'description': '(250 гр)',
    'price': '180 сом',
    'image': `https://img.povar.ru/main/b9/47/7a/43/salat_cezar_s_kuricei_s_pomidorami-80248.jpg`,
    'category': 'salat',
  },
  {
    'title': "Цезарь с креветками",
    'description': '(250 гр)',
    'price': '190 сом',
    'image': `https://img-global.cpcdn.com/recipes/93337bab38159ae3b2a73b4bbc5a1ea6f165587e52514df042906433b219b687/1200x630cq70/photo.jpg`,
    'category': 'salat',
  },
  {
    'title': "Дамский каприз",
    'description': '(200 гр)',
    'price': '180 сом',
    'image': `https://img3.zakaz.ua/upload.version_1.0.64df3be8dd7f84490be8a0e7c3a06576.350x350.jpeg`,
    'category': 'salat',
  },
  {
    'title': "Китайский острый",
    'description': '(200 гр)',
    'price': '180 сом',
    'image': `https://img-global.cpcdn.com/recipes/3b75076245e9e7c6/1200x630cq70/photo.jpg`,
    'category': 'salat',
  },
  {
    'title': "Гнездо",
    'description': '(250 гр)',
    'price': '180 сом',
    'image': `https://i.ytimg.com/vi/9XVxYyNSQcM/maxresdefault.jpg`,
    'category': 'salat',
  }, {
    'title': "Сузьма",
    'description': '(150 гр)',
    'price': '80 сом',
    'image': `https://zira.uz/wp-content/uploads/2018/02/suzma-salat-3.jpg`,
    'category': 'salat',
  }, {
    'title': "Шакарап",
    'description': '(150 гр)',
    'price': '100 сом',
    'image': `https://boxmail.biz/constructor/img/186522.jpg`,
    'category': 'salat',
  }, {
    'title': "Мимоза",
    'description': '(200 гр)',
    'price': '150 сом',
    'image': `https://static.1000.menu/img/content-v2/e7/6d/27073/salat-mimoza-s-konservirovannoi-gorbushei-klassicheskii_1613985994_16_max.jpg`,
    'category': 'salat',
  },
  {
    'title': "Мясо ассорти",
    'description': '(300 гр)',
    'price': '480 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wekqoounrtplctbofphk`,
    'category': 'salat',
  }, {
    'title': "Казы чучук",
    'description': '(80 гр)',
    'price': '130 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/c5vafmfezujvnrndvo3n`,
    'category': 'salat',
  }, {
    'title': "Овощная нарезка",
    'description': '(300 гр)',
    'price': '160 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/sk6k53oyw769qqxibf41`,
    'category': 'salat',
  }, {
    'title': "фруктовый нарезка",
    'description': '(300 гр)',
    'price': '480 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zuacynbuonxjtfkdajgf`,
    'category': 'salat',
  },

  // Супы
  {
    'title': "Мяцо по-казахски",
    'description': '(0.7/1 порц)',
    'price': '150/160 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jjezv2bhe4krkng6obuq`,
    'category': 'soups',
  },
  {
    'title': "Мастава",
    'description': '(0.7/1 порц)',
    'price': '130/140 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gu8mjhvcpp0pih6io69n`,
    'category': 'soups',
  },
  {
    'title': "Лагман",
    'description': '(0.7/1 порц)',
    'price': '150/170 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qikvwbf8k90kj8qy6gmk`,
    'category': 'soups',
  },
  {
    'title': "Бодоно шорпо",
    'description': '(1 порц)',
    'price': '240 сом',
    'image': `https://oshfood.kg/dish_image/7874.png`,
    'category': 'soups',
  },
  {
    'title': "Шорпо из говядины",
    'description': '(1 порц)',
    'price': '170 сом',
    'image': `https://i.ytimg.com/vi/t8XkIYtJXJs/maxresdefault.jpg`,
    'category': 'soups',
  }, {
    'title': "Шорпо из баранины",
    'description': '(1 порц)',
    'price': '180 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/pjbx1hgqg2onjb4yjzn5`,
    'category': 'soups',
  },
  {
    'title': "Мампар",
    'description': '(1 порц)',
    'price': '160 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/krp6rlqple5xlt7ouhgr`,
    'category': 'soups',
  }, {
    'title': "Пельмен с бульоном",
    'description': '(0.7/1 порц)',
    'price': '140/150 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zq3qmno1lpwvjduiii0b`,
    'category': 'soups',
  }, {
    'title': "Чучвара",
    'description': '(0.7/1 порц)',
    'price': '140/150 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ehmy1vrvqwsltdmqgrnm`,
    'category': 'soups',
  },
  {
    'title': "Долма",
    'description': '(1 порц)',
    'price': '170 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ny3ccs44dejosor2gtrh`,
    'category': 'soups',
  },
  {
    'title': "Суп кесме",
    'description': '(1 порц)',
    'price': '150 сом',
    'image': `https://img.iamcook.ru/2018/upl/recipes/byusers/misc/1378/62412e580a091a181ebac449fa9545c4-2018.jpg`,
    'category': 'soups',
  }, {
    'title': "Борщ",
    'description': '(0.7/1 порц)',
    'price': '130/140 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/jt8ieutpm2qtidkrj6lg`,
    'category': 'soups',
  },
  // Горячие блюда

  {
    'title': "Фирменное блюдо",
    'description': '(180 гр)',
    'price': '580 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/lqlzlm822mxpnx6tndrn`,
    'category': 'hdishe',
  },
  {
    'title': "чиккен",
    // 'description': '(180 гр),
    'price': '210 сом',
    'image': `https://greenchicken.kg/assets/cache/images/63-800x-e9a.jpeg`,
    'category': 'hdishe',
  }, {

    'title': "крылышки",
    'description': '(300 гр)',
    'price': '200 сом',
    'image': `https://halal-spb.ru/sites/default/files/styles/large/public/krylyshki-kak-v-kfs-recept.jpg?itok=YzgzaRNX`,
    'category': 'hdishe',
  }, {

    'title': "табака",
    'description': '(500 гр)',
    'price': '350 сом',
    'image': `https://s1.eda.ru/StaticContent/Photos/110816122019/120213175025/p_O.jpg`,
    'category': 'hdishe',
  }, {

    'title': "наггетцы",
    'description': '(500 гр)',
    'price': '350 сом',
    'image': `https://www.vsegdavkusno.ru/assets/images/recipes/1799/1.jpg`,
    'category': 'hdishe',
  },
 {

    'title': "лагман уйгурский",
    'description': '(1 порц)',
    'price': '200 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qikvwbf8k90kj8qy6gmk`,
    'category': 'hdishe',
  },
  {
  'title': "босо лагман ",
  'description': '(1 порц)',
  'price': '200 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/hhyquhuwgpypiu0vjf6c`,
  'category': 'hdishe',
},
{
  'title': "айрим сай",
  'description': '(1 порц)',
  'price': '220 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qpbfepi7n35kpbpuktp4`,
  'category': 'hdishe',
},
{
  'title': "ган фан",
  'description': '(1 порц)',
  'price': '210 сом',
  'image': `https://img-global.cpcdn.com/recipes/40c1ba34c68c6f34/680x482cq70/ghan-fan-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg`,
  'category': 'hdishe',
},
{
  'title': "манты",
  'description': '(1 шт)',
  'price': '30 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/gkos6jeq4b6eloaett67`,
  'category': 'hdishe',
},
{
  'title': "гуляш",
  'description': '(1 порц)',
  'price': '30 сом',
  'image': `https://gotovim-doma.ru/images/recipe/9/d1/9d15eba18c792a3c32095b238ccef6b8_l.jpg`,
  'category': 'hdishe',
},
{
  'title': "плов ташкентский",
  'description': '(1 порц)',
  'price': '190 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ae1alyi3zulctuxqinyb`,
  'category': 'hdishe',
},
{
  'title': "ребрышки",
  'description': '(1 порц)',
  'price': '340 сом',
  'image': `https://gotovimop.com/wp-content/uploads/2021/06/rebryshki-v-duhovke.jpg`,
  'category': 'hdishe',
},
{
  'title': "куурдак по-кыргызски",
  'description': '(1 порц)',
  'price': '380 сом',
  'image': `https://sputnik.kg/img/103416/99/1034169924_205:0:934:801_1920x0_80_0_0_a23c20fbdb5281a4abc2c198358ea3a6.jpg`,
  'category': 'hdishe',
},
{
  'title': "куурдак ",
  'description': '(1 порц)',
  'price': '340 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/n3oqwea1gxhckwojvnhx`,
  'category': 'hdishe',
},
{
  'title': "цыпленок карри ",
  'description': '(1 порц)',
  'price': '300 сом',
  'image': `https://www.gastronom.ru/binfiles/images/20160314/b6270762.jpg`,
  'category': 'hdishe',
},
{
  'title': "эт сай",
  'description': '(1 порц)',
  'price': '300 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qmtoihoel6eky40jld3w`,
  'category': 'hdishe',
},
{
  'title': "тоок сай",
  'description': '(1 порц)',
  'price': '230 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/iqwrgqeyac5bx9deakur`,
  'category': 'hdishe',
},
{
  'title': "ачуу эт",
  'description': '(1 порц)',
  'price': '340 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/fpvwc8ad9abiafd61q9e`,
  'category': 'hdishe',
},{
  'title': "бешбармак",
  'description': '(1 порц)',
  'price': '320 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ulaps8vzv0glero4suuh`,
  'category': 'hdishe',
},
{
  'title': "ребра в аджике",
  'description': '(1 порц)',
  'price': '320 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ulaps8vzv0glero4suuh`,
  'category': 'hdishe',
},{
  'title': "жаровня из говядины",
  'description': '(1 порц)',
  'price': '280 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qmfk1ndi6tgh9ocfaivf`,
  'category': 'hdishe',
},
{
  'title': "жаровня из курицы",
  'description': '(1 порц)',
  'price': '230 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/rcw3xpcvu69ftcavbup4`,
  'category': 'hdishe',
},
{
  'title': "пельмени жареные",
  'description': '(1 порц)',
  'price': '200 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wk7dlidabbmevgbe8hw6`,
  'category': 'hdishe',
},
{
  'title': "минор тамчы",
  'description': '(1 шт)',
  'price': '50 сом',
  'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ndimtmgooxaqvjzwlrof`,
  'category': 'hdishe',
},

  // Шаурма
  {

    'title': "говядины",
    'price': '130 сом',
    'image': `https://www.zdorovieinfo.ru/wp-content/uploads/2019/09/shutterstock_1122622892.jpg`,
    'category': 'shawarma',
  },
  {

    'title': "из курицы",
    'price': '120 сом',
    'image': `https://www.zdorovieinfo.ru/wp-content/uploads/2019/09/shutterstock_1122622892.jpg`,
    'category': 'shawarma',
  }, {

    'title': "сырный",
    'price': '150 сом',
    'image': `https://www.zdorovieinfo.ru/wp-content/uploads/2019/09/shutterstock_1122622892.jpg`,
    'category': 'shawarma',
  }, {

    'title': "бургер с котлетой",
    'price': '120 сом',
    'image': `https://img.povar.ru/main/41/cf/fe/14/burger_s_kotletoi_bez_myasa-458713.jpg`,
    'category': 'shawarma',
  },
  {

    'title': "бургер с двойным",
    'price': '180 сом',
    'image': `https://burgerkings.ru/image/cache/catalog/photo/314275168-dvojnoj-chizburger-600x600.jpg`,
    'category': 'shawarma',
  }, {

    'title': "чизбургер",
    'price': '130 сом',
    'image': `https://izyskon.com/wp-content/uploads/2018/04/CHizburger-retsept.jpg`,
    'category': 'shawarma',
  },
  // шашлык

  {

    'title': "баранина",
    'description': '(1 шт)',
    'price': '130 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/go9xilvm5m712b0bespx`,
    'category': 'shashlyk',
  },
  {
    'title': "говядины",
    'description': '(1 шт)',
    'price': '60 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zdhulojupzqplouh1ea5`,
    'category': 'shashlyk',
  },
  {
    'title': "люля кебаб",
    'description': '(1 шт)',
    'price': '130 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/bafpiydcxu6gvtro6rs2`,
    'category': 'shashlyk',
  },
  {
    'title': "гиждуван",
    'description': '(1 шт)',
    'price': '100 сом',
    'image': `https://cdn.gastrotourism.uz/uploads/0V/HLIayDcJbT6F9zUt6WFaDUQTOlyr53_normal.jpg`,
    'category': 'shashlyk',
  },
  {
    'title': "оромо кебаб",
    'description': '(1 шт)',
    'price': '100 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/fspov6imnv8rf6juqao5`,
    'category': 'shashlyk',
  },
  {
    'title': "напалеон кебаб",
    'description': '(1 шт)',
    'price': '140 сом',
    'image': `https://cdn.gastrotourism.uz/uploads/0V/HLIayDcJbT6F9zUt6WFaDUQTOlyr53_normal.jpg`,
    'category': 'shashlyk',
  },
  {
    'title': "обычный кебаб",
    'description': '(1 шт)',
    'price': '120 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ssnmocaiddgwdhvp0sci`,
    'category': 'shashlyk',
  },
  {
    'title': "крылышки",
    'description': '(1 шт)',
    'price': '100 сом',
    'image': `https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/i2oejgmwmpovfdfhppds`,
    'category': 'shashlyk',
  },
  {
    'title': "рулет",
    'description': '(1 шт)',
    'price': '160 сом',
    'image': `https://i.pinimg.com/originals/f5/85/b8/f585b87c61c376730312d7efb9bf6802.jpg`,
    'category': 'shashlyk',
  },
  {
    'title': "уч панжа",
    'description': '(1 шт)',
    'price': '300 сом',
    'image': `https://reciple.kz/images/bluda/shashliki/uch_panzha_kabob.jpg`,
    'category': 'shashlyk',
  },
  // Пицца
  {
    'title': "пиде Улук-Ата",
    'description': '(30 см, 1 порц)',
    'price': '400 сом',
    'image': `https://e2.edimdoma.ru/data/recipes/0005/4434/54434-ed4_wide.jpg?1468450023`,
    'category': 'pizza',
  },

  {
    'title': "пицца ассорти",
    'description': '(30 см, 1 порц)',
    'price': '300 сом',
    'image': `https://www.alizy.club/wp-content/uploads/2018/01/pitstsa-2.jpg`,
    'category': 'pizza',
  },
  {
    'title': "пицца  пепперони",
    'description': '(30 см, 1 порц)',
    'price': '300 сом',
    'image': `https://img.inmyroom.ru/inmyroom/thumb/620x398/jpg:85/uploads/food_recipe/teaser/97/9760/jpg_1000_97605ce3-3739-4b89-8a91-6905d062acfb.png?sign=d6ce417e43c2c342f90b5ab0830d2b499a5bc5c9153bc6cd1c879591140baedd`,
    'category': 'pizza',
  },
  {
    'title': "пицца  мясная ассорти",
    'description': '(30 см, 1 порц)',
    'price': '350 сом',
    'image': `https://accorti.ru/images/stories/virtuemart/product/resized/myasnoe_assorti_338x338.png`,
    'category': 'pizza',
  },
  {
    'title': "пицца  маргарита",
    'description': '(30 см, 1 порц)',
    'price': '280 сом',
    'image': `http://edimvkusno.org/images/materialsimages/image_1.jpg`,
    'category': 'pizza',
  },
  {
    'title': "пицца  цезарь",
    'description': '(30 см, 1 порц)',
    'price': '350 сом',
    'image': `https://rutxt.ru/files/16197/original/fe4c8ebbdf.JPG`,
    'category': 'pizza',
  },
  {
    'title': "пицца 4 сезона",
    'description': '(30 см, 1 порц)',
    'price': '380 сом',
    'image': `https://www.good-cook.ru/articles/2018/04/10-1-picca-chetyre-sezona-kulinarnoe-issledovanie.jpg`,
    'category': 'pizza',
  },
  {
    'title': "пицца от шефа",
    'description': '(30 см, 1 порц)',
    'price': '380 сом',
    'image': `https://static.wixstatic.com/media/e6af78_c9e532e26ec84971b2a6424950f10a36~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_80/file.jpg`,
    'category': 'pizza',
  },
  {
    'title': "пицца фруктовый",
    'description': '(30 см, 1 порц)',
    'price': '380 сом',
    'image': `http://fannykitchen.com/image/1090.jpg`,
    'category': 'pizza',
  },
  // роллы
  {
    'title': "дракон",
    'description': '(8 шт)',
    'price': '380 сом',
    'image': `https://sushi-trend.ru/img/p/3/8/2/382-thickbox_default.jpg`,
    'category': 'roll',
  },
  {
    'title': "аригато",
    'description': '(8 шт)',
    'price': '310 сом',
    'image': `https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/2287226/G3odGQv6Lki8MlY5uDaA.jpg`,
    'category': 'roll',
  },
  {
    'title': "токио",
    'description': '(8 шт)',
    'price': '360 сом',
    'image': `https://sushilux-tr.com/wp-content/uploads/2018/10/%D1%80%D0%BE%D0%BB%D0%BB-%D0%A2%D0%BE%D0%BA%D0%B8%D0%BE.jpg`,
    'category': 'roll',
  },
  {
    'title': "филадельфия",
    'description': '(8 шт)',
    'price': '330 сом',
    'image': `https://arizona.pl.ua/image/catalog/sushi/fila2.jpg`,
    'category': 'roll',
  },
  {
    'title': "огонь",
    'description': '(8 шт)',
    'price': '360 сом',
    'image': `https://img1.tu.market/uploads/tu/55448/f83092c4-9adb-44f8-bb1b-bcd545e2d3a3_midl.jpg`,
    'category': 'roll',
  },
  {
    'title': "нежный лосось",
    'description': '(8 шт)',
    'price': '160 сом',
    'image': `https://master-food.pro/pics/catalog/1592_new_image.jpg`,
    'category': 'roll',
  },
  {
    'title': "сырный",
    'description': '(8 шт)',
    'price': '280 сом',
    'image': `https://sushiwok.kg/img/7d6302e0753c7078d1f94d5f41658281`,
    'category': 'roll',
  }, {
    'title': "каппа маки",
    'description': '(8 шт)',
    'price': '160 сом',
    'image': `https://www.bakenroll.az/ru/image/kappa-maki-br.jpg`,
    'category': 'roll',
  },
  {
    'title': "филадельфия запеченная",
    'description': '(8 шт)',
    'price': '340 сом',
    'image': `https://cafemaman.ru/products_pictures/roll-yaki-ebi-30.jpg`,
    'category': 'roll',
  }, {
    'title': "темпура с лососем",
    'description': '(8 шт)',
    'price': '340 сом',
    'image': `https://accorti.ru/images/stories/virtuemart/product/27.jpg`,
    'category': 'roll',
  }, {
    'title': "сет самурай",
    'description': '(32 шт)',
    'price': '160 сом',
    'image': `https://pizza24-7.ru/upload/iblock/bea/bead0597d9c47ac702c1c2f541a1355b.jpg`,
    'category': 'roll',
  },
  {
    'title': "том ям",
    'description': '(1 порц)',
    'price': '380 сом',
    'image': `https://lifehacker.ru/wp-content/uploads/2020/10/43ab64d2-41d0-425c-b134-2c9d47ba443c_1603108296-e1603721639968-1280x640.jpg`,
    'category': 'roll',
  },
  {
    'title': "фруктовый рай",
    'description': '(6 шт)',
    'price': '200 сом',
    'image': `https://102922.selcdn.ru/nomenclature_images/a0b327e2-b25c-11e5-80d2-d8d38565926f/cb816635-8d55-4ffa-979f-52af1beb59a2.png`,
    'category': 'roll',
  },
  {
    'title': "лососих хот",
    'description': '(8 шт)',
    'price': '160 сом',
    'image': `https://pp.userapi.com/c844417/v844417077/19d8bb/EDl8wbiwPZk.jpg`,
    'category': 'roll',
  },
  // фрукто-ягодные чаи
  {
    'title': "молочный улун",
    'price': '120 сом',
    'category': 'napitki',
  },
  {
    'title': "жасминовый",
    'price': '120 сом',
    'category': 'napitki',
  },
  {
    'title': "марокканский",
    'price': '120 сом',
    'category': 'napitki',
  },
  {
    'title': "фруктовый",
    'price': '120 сом',
    'category': 'napitki',
  },{
    'title': "ягодный",
    'price': '120 сом',
    'category': 'napitki',
  },{
    'title': "боро боро",
    'price': '250 сом',
    'category': 'napitki',
  },
  {
    'title': "имбирный",
    'price': '150 сом',
    'category': 'napitki',
  },
  {
    'title': "шиповник",
    'price': '150 сом',
    'category': 'napitki',
  },{
    'title': "чай с лимоном",
    'price': '70 сом',
    'category': 'napitki',
  },
  {
    'title': "чай турецкий",
    'price': '50 сом',
    'category': 'napitki',
  },
  {
    'title': "Эспрессо",
    'price': '90 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wbjou6xin6kqs5gpky9m',
    'category': 'napitki',
  },
  {
    'title': "Эспрессо двойной",
    'price': '120 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/wbjou6xin6kqs5gpky9m',
    'category': 'napitki',
  },
  {
    'title': "капучино",
    'price': '100 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/w6iqaxotlmhyj1fv9tpx',
    'category': 'napitki',
  },
  {
    'title': "латте",
    'price': '120 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/bxklkgoe4sg2f2kmpdh0',
    'category': 'napitki',
  },
  {
    'title': "капучино xxl",
    'price': '150 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zpgogxirjk1hacrvq7r2',
    'category': 'napitki',
  },
  // Напитки
  
  {
    'title': "coca-cola",
    'description':'(1 л)',
    'price': '90 сом',
    'category': 'napitkis',
  },
  {
    'title': "pepsi",
    'description':'(1 л)',
    'price': '90 сом',
    'category': 'napitkis',
  },{
    'title': "fanta",
    'description':'(1 л)',
    'price': '90 сом',
    'category': 'napitkis',
  },
  {
    'title': "cok j-7",
    'description':'(1 л)',
    'price': '120 сом',
    'category': 'napitkis',
  },
  {
    'title': "cok j-7 граната",
    'description':'(1 л)',
    'price': '120 сом',
    'category': 'napitkis',
  },
  {
    'title': "cok dena",
    'description':'(1 л)',
    'price': '90 сом',
    'category': 'napitkis',
  },
  {
    'title': "fuse tea",
    'description':'(1 л)',
    'price': '80 сом',
    'category': 'napitkis',
  },
  {
    'title': "pico",
    'description':'(1 л)',
    'price': '120 сом',
    'category': 'napitkis',
  },
  {
    'title': "жалал-абад",
    'description':'(1 л)',
    'price': '50 сом',
    'category': 'napitkis',
  },
  {
    'title': "баноква без газ",
    'description':'(1 л)',
    'price': '50 сом',
    'category': 'napitkis',
  },
  {
    'title': "Asu вода",
    'description':'(1 л)',
    'price': '50 сом',
    'category': 'napitkis',
  },
  {
    'title': "адыгене",
    'description':'(1 л)',
    'price': '50 сом',
    'category': 'napitkis',
  },
  {
    'title': "flash",
    'description':'(0,45 л)',
    'price': '80 сом',
    'category': 'napitkis',
  },
  {
    'title': "nitro",
    'description':'(0,45 л)',
    'price': '80 сом',
    'category': 'napitkis',
  },
  {
    'title': "adrenalin",
    'description':'(0,45 л)',
    'price': '120 сом',
    'category': 'napitkis',
  },
  {
    'title': "свежие фреш гранат",
    'description':'(1 л)',
    'price': '700 сом',
    'category': 'napitkis',
  }, {
    'title': "свежие фреш апельсин",
    'description':'(1 л)',
    'price': '700 сом',
    'category': 'napitkis',
  },
  // Лиманат
  {
    'title': "манго+маракуйя",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://lavashura.ru/upload/iblock/9c0/9c0c3f3260decb3924f760f749ac322c.jpg',
    'category': 'Linonats',
  },
  {
    'title': "арбуз+банан",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://адм-покровка.рф/wp-content/uploads/original-14.jpg',
    'category': 'Linonats',
  },
  {
    'title': "дыня-апельсин",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://foodandmood.com.ua/i/70/94/43/709443/b2d5e35913e64a2dddad42c01959654a-resize_crop_1Xquality_100Xallow_enlarge_0Xw_1200Xh_630.jpg',
    'category': 'Linonats',
  },
  {
    'title': "груша-маракуйя",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://www.complexbar.ru/upload/resize_cache/iblock/df5/450_550_1/df5bb557ccc3ee82eb75b2b717a1d6cf.jpg',
    'category': 'Linonats',
  },
  {
    'title': "банан-ананас",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vcd7r0vlljbzoknoqqzm',
    'category': 'Linonats',
  },
  {
    'title': "яблоко-киви",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/j6uo3x1lql2rtead5hrv',
    'category': 'Linonats',
  },
  {
    'title': "цитрус",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/l3wx3rcrav5yo70x0wda',
    'category': 'Linonats',
  },
  {
    'title': "мохито",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ggo5vz5gj0ynjracu8lq',
    'category': 'Linonats',
  },
  {
    'title': "груша",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/qxvzshlg27f1y7vs1oej',
    'category': 'Linonats',
  },
  {
    'title': "океан",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/z0awypcmrdmzvtwgelvf',
    'category': 'Linonats',
  },
  {
    'title': "клубника",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/kztlf1wqzoxt1uvmmjhn',
    'category': 'Linonats',
  },
  {
    'title': "клубничный махито",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/icvanqhkpidusiqpr8p8',
    'category': 'Linonats',
  },
  {
    'title': "тархун",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://agropererobka.com.ua/content/recipes/show/limonad_tarhun__1485027489.jpg',
    'category': 'Linonats',
  },
  {
    'title': "айс ти",
    'description':'(1 л)',
    'price': '200 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/ahwggclfk1ytw6cdj4d4',
    'category': 'Linonats',
  },
  // Десерты
  {
    'title': "Чизкейк",
    'description':'(1 щт)',
    'price': '150 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/fnz2mabptbzxzzxf8ye3',
    'category': 'desserts',
  },
  {
    'title': "Сникерс",
    'description':'(1 шт)',
    'price': '150 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/vtplrrwfhgy0qohviiyy',
    'category': 'desserts',
  },{
    'title': "Медовик",
    'description':'(1 шт)',
    'price': '110 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/hmdeocfvjgbe4exavbvr',
    'category': 'desserts',
  },{
    'title': "Прага",
    'description':'(1 шт)',
    'price': '90 сом',
    'image':'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/bivdpag5jhprxq5mhmhg',
    'category': 'desserts',
  },
  // блюда для компании
  {
    'title': "плов  ташкентский",
    'description':'(1 кг)',
    'price': '1600 сом',
    'category': 'hdishes',
  },
  {
    'title': "плов  узгенский",
    'description':'(1 кг)',
    'price': '1500 сом',
    'category': 'hdishes',
  },
  {
    'title': "ачуу эт",
    'description':'(1 кг)',
    'price': '1200 сом',
    'category': 'hdishes',
  }, {
    'title': "куурдак",
    'description':'(1 кг)',
    'price': '1200 сом',
    'category': 'hdishes',
  }, {
    'title': "пирожок",
    'description':'(1 кг)',
    'price': '1200 сом',
    'category': 'hdishes',
  },
]

const MENU = [

  { label: 'Все', link: '' },
  { label: 'Завтрак', link: 'zavtrak' },
  { label: 'Салаты', link: 'salat' },
  { label: 'Супы', link: 'soups' },
  { label: 'Горячие блюда', link: 'hdishe' },
  { label: 'Шаурма', link: 'shawarma' },
  { label: 'Шашлык', link: 'shashlyk' },
  { label: 'Пицца', link: 'pizza' },
  { label: 'Роллы', link: 'roll' },
  { label: 'Фрукто-ягодные чаи', link: 'napitki' },
  { label: 'Напитки', link: 'napitkis' },
  { label: 'Лиманат', link: 'Linonats' },
  { label: 'Десерты', link: 'desserts' },
  { label: 'блюда для компании', link: 'hdishes' },
 

]

function MainContainer() {
  const { category } = useParams()

  const getLink = (l) => `/uluk/${l}`

  const FILTERED_FOODS = FOODS.filter(g => !category || g.category === category)

  return (
    <div className={'uluk-ata'}>

      <div className={'d-flex justify-content-center mt-3 mb-3 '}>
        <img alt={'Uluk Ata'} style={{ width: '50vw',borderRadius:"50%" }} src={require('../../assets/uluk-ata/logo.png')} />
      </div>

      <h6 className={'menu-categories'}>

        {MENU.map(g => (
          <NavLink to={getLink(g.link)} className={(category || '') === g.link ? 'active' : ''}>
            {g.label}
          </NavLink>
        ))}

      </h6>

      <MenuListComponent category={category} list={FILTERED_FOODS} />

    </div>
  )
}

export default MainContainer
