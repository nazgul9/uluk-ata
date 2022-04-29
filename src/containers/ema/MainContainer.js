import './styles.scss'
import { NavLink, useParams } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'

const FOODS = [

  {
    'title': 'Шаурма ',
    'price': 150,
    'category': 'shaurma',
    // 'description': 'Some quick example',
    'image': 'https://kyrgyzobshepit.kg/images/2021/Articles/Shaurma/2.jpg',
  },
  {
    'title': 'ШАУРМА КУРИНАЯ',
    'price': 150,
    'category': 'shaurma',
    // 'description': 'Some quick example',
    'image': 'https://static.1000.menu/img/content-v2/05/d8/21554/klassicheskaya-shaurma_1589963797_11_max.jpg',
  },
  {
    'title': "ШАУРМА АССОРТИ",
    'price': '170',
    'image': 'https://unopizza.com.ua/image/cache/catalog/pizza/shaurma-asorti-500x500.jpg',
    'category': 'shaurma',
  },
  {

    'title': "ШАУРМА С СЫРОМ"
    , 'price': '170'
    , 'image': 'https://static.1000.menu/img/content/29240/shaurma-s-syrom_1540395523_1_max.jpg',
    'category': 'shaurma',
  }, {

    'title': "ШАУРМА БОЛЬШАЯ",
    'price': '210',
    'image': 'https://fastly.4sqi.net/img/general/600x600/41948107_gNoV6O8gwq0Avq9NqVxxFCoeq9ZMvE9RClBvWmzwGpk.jpg',
    'category': 'shaurma',
  },

  {

    'title': "КАША МАННАЯ",
    'price': '70'
    , 'description': "1 порц"
    , 'image': 'https://s1.eda.ru/StaticContent/Photos/130805160644/130813135643/p_O.jpg',
    'category': 'zavtrak',
  }, {

    'title': "КАША ОВСЯНАЯ"
    , 'price': '70'
    , 'description': "1 порц"
    , 'image': 'https://img.povar.ru/main/84/c3/c3/d6/postnaya_ovsyanaya_kasha-417702.jpg',
    'category': 'zavtrak',
  }, {
    'title': "КАША РИСОВАЯ"
    , 'price': '70'
    , 'description': "1 порц"
    , 'image': 'https://img.delo-vcusa.ru/2019/03/Risovaya-molochnaya-kasha.jpg',
    'category': 'zavtrak',
  }, {

    'title': "БЛИНЫ СО СМЕТАНОЙ БЛИНЫ С ТВОРОГОМ"
    , 'price': '70,80'
    , 'image': 'https://www.konditer-club.ru/i/gallery/encyclopediaitems/image284b.jpg',
    'category': 'zavtrak',
  }, {

    'title': "ЯИЧНИЦА ИЗ ТРЕХ ЯИЦ"
    , 'price': '70'
    , 'description': "1 порц"
    , 'image': 'https://ss.sport-express.ru/userfiles/materials/175/1752932/volga.jpg',
    'category': 'zavtrak',
  }, {

    'title': "СЫРНИКИ С ВАРЕНЬЕМ СЫРНИКИ СО СМЕТАНОЙ"
    , 'price': '90'
    , 'image': 'https://prostokvashino.ru/upload/iblock/d28/d28e1b22ab38bfcce66f54a1a80e7526.jpg',
    'category': 'zavtrak',
  }, {

    'title': "АНГЛИЙСКИЙ ЗАВТРАК"
    , 'price': '120'
    , 'image': 'https://www.gastronom.ru/binfiles/images/20150722/b27b3f78.jpg',
    'category': 'zavtrak',
  }, {

    'title': "ОМЛЕТ "
    , 'price': '80'
    , 'image': 'https://static.1000.menu/img/content-v2/90/36/45938/omlet-iz-yaic-i-moloka-prostoi-na-skovorode_1622035051_0_max.jpg',
    'category': 'zavtrak',
  }, {

    'title': "КАПУЧИНО С КРУАССАНОМ"
    , 'price': '140'
    , 'image': 'https://img.freepik.com/free-photo/cappuccino-with-croissant_87414-3069.jpg',
    'category': 'zavtrak',
  },


  {

    'title': "ЧИКЕН БУРГЕР",
    'price': '100'
    , 'image': 'https://mcdonalds.kz/storage/2501/1aea60db5a4ae151271e260a4c0c11b083c95cf8.png',
    'category': 'burgery'
  }, {

    'title': "ЕМА КОМБО"
    , 'price': '250'
    , 'image': 'https://nambafood.kg/image/468x318/39366.png',
    'category': 'burgery'
  }, {

    'title': "ХОТ-ДОГ"
    , 'price': '65'
    , 'image': 'https://e2.edimdoma.ru/data/posts/0001/6493/16493-ed4_wide.jpg?1631186249',
    'category': 'burgery'
  }, {

    'title': "ХОТ-ДОГ ДВОЙНОЙ"
    , 'price': '80'
    , 'image': 'https://thumbs.dreamstime.com/z/%D0%B4%D0%B2%D0%BE%D0%B9%D0%BD%D0%BE%D0%B9-%D1%85%D0%BE%D1%82-%D0%BE%D0%B3-72952223.jpg',
    'category': 'burgery'
  }, {

    'title': "ЧИЗБУРГЕР"
    , 'price': '120'
    , 'image': 'https://mcdonalds.kz/storage/2500/84a1faa6bd4b2721096a9d777b0f575cd490505b.png',
    'category': 'burgery'
  }, {

    'title': "ЧИЗБУРГЕР ДВОЙНОЙ"
    , 'price': '160'
    , 'image': 'https://mcdonalds.ru/resize/-x1020/upload/iblock/de2/0000_DoubleCheesburger_BB_1500x1500-_3_-_1_.png',
    'category': 'burgery'
  }, {

    'title': "ЕМА БУРГЕР"
    , 'price': '100'
    , 'image': 'https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/Stores/nllpxfyypi8ouqxypx4j',
    'category': 'burgery'
  }, {

    'title': "ЕМА БУРГЕР АССОРТИ"
    , 'price': '120'
    , 'image': 'https://biznesprost.com/wp-content/uploads/2018/06/biznes-plan-burgernoj.jpg',
    'category': 'burgery'
  }, {

    'title': "ЕМА БУРГЕР ДВОЙНОЙ"
    , 'price': '140'
    , 'image': 'https://oshfood.kg/dish_image/7455.png',
    'category': 'burgery'
  },


  {

    'title': "ПИЦЦА ОХОТНИЧЬЯ",
    'price': '220,320'
    , 'description': "26см,32см"
    , 'image': 'https://img-global.cpcdn.com/recipes/b6b447779e3677c7/680x482cq70/pitstsa-domashniaia-okhotnichia-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg',
    'category': 'picca'
  }, {

    'title': "ПИЦЦА МЕКСИКАНО"
    , 'price': '220,320'
    , 'description': "26см,32см"
    , 'image': 'https://static.1000.menu/img/content-v2/24/88/49769/meksikanskaya-picca-ostraya_1616760935_13_max.jpg',
    'category': 'picca'
  }, {

    'title': "ВЕГЕТАРИНСКАЯ"
    , 'price': '180,280'
    , 'description': "26см,32см"
    , 'image': 'https://academy.oetker.ru/upload/iblock/1ba/1bac340c99632765ce557aec8a1d39b3.jpg',
    'category': 'picca'
  }, {

    'title': "ПИЦЦА 4 СЫРА"
    , 'price': '220,320'
    , 'description': "26см,32см"
    , 'image': 'https://vilkin.pro/wp-content/uploads/2019/11/picca-chetire-sira-770x513.jpg',
    'category': 'picca'
  }, {

    'title': "ПИЦЦА МЯСНАЯ"
    , 'price': '280,420'
    , 'description': "26см,32см"
    , 'image': 'https://vilkin.pro/wp-content/uploads/2019/07/picca-myasnaya-770x513.jpg',
    'category': 'picca'
  }, {

    'title': "ПИЦЦА ДЕТСКАЯ"
    , 'price': '180,280'
    , 'description': "26см,32см"
    , 'image': 'https://i.pinimg.com/originals/e6/9c/db/e69cdbb2afc1c5e09919283b91b83fdb.jpg',
    'category': 'picca'
  }, {

    'title': "ПЕППЕРОНИ"
    , 'price': '180,280'
    , 'description': "26см,32см"
    , 'image': 'https://www.gastronom.ru/binfiles/images/20180123/b030b209.jpg',
    'category': 'picca'
  }, {

    'title': "ПИЦЦА АССОРТИ"
    , 'price': '220,320'
    , 'description': "26см,32см"
    , 'image': 'https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://cookery.site/wp-content/uploads/2019/09/photo_92647025-1-678x381.jpg',
    'category': 'picca'
  }, {

    'title': "ПИЦЦА С КУРИЦЕЙ"
    , 'price': '180,280'
    , 'description': "26см,32см"
    , 'image': 'https://s1.eda.ru/StaticContent/Photos/130410124428/130422111624/p_O.jpg',
    'category': 'picca'
  }, {

    'title': "МАРГАРИТА"
    , 'price': '150,220'
    , 'description': "26см,32см"
    , 'image': 'https://km-doma.ru/assets/gallery_thumbnails/31/319484a4bb725e4eacab62c7f0c7f1ed.jpg',
    'category': 'picca'
  },



  {

    'title': "СОБА С ГОВЯДИНОЙ СОБА С КУРИЦЕЙ",
    'price': '180'
    , 'description': "1 порц"
    , 'image': 'https://static.1000.menu/img/content-v2/5f/58/17541/grechnevaya-lapsha-soba-s-ovoshchami-i-kuricei_1584951258_13_max.jpg',
    'category': 'bluda'
  }, {

    'title': "ВОК С ГОВЯДИНОЙ ВОК С КУРИЦЕЙ"
    , 'price': '220'
    , 'description': "1 порц"
    , 'image': 'https://static.1000.menu/img/content/22979/lapsha-vok-s-govyadinoi_1508056687_1_max.jpg',
    'category': 'bluda'
  }, {

    'title': "РИС С ГОВЯДИНОЙ РИС С КУРИЦЕЙ"
    , 'price': '150'
    , 'description': "1 порц",
    'image': 'https://vilkin.pro/wp-content/uploads/2019/02/ris-s-kuricei-v-duhovke-10.jpg',
    'category': 'bluda'
  }, {

    'title': "РИС С ОВОЩАМИ"
    , 'price': '100'
    , 'description': "1 порц",
    'image': 'https://zira.uz/wp-content/uploads/2018/06/ris-s-ovoschami-1.jpg',
    'category': 'bluda'
  }, {

    'title': "КАЗАН КЕБАБ"
    , 'price': '320'
    , 'description': "1 порц",
    'image': 'https://blog-food.ru/images/site/recipes/main-dishes/0196-azu/14.jpg',
    'category': 'bluda'
  }, {

    'title': "ФАХИТОС С КУРИЦЕЙ"
    , 'price': '290'
    , 'description': "1 порц",
    'image': 'https://e2.edimdoma.ru/data/photos/0021/9542/219542-ed4_wide.jpg?1628820905',
    'category': 'bluda'
  }, {

    'title': "ТЕЛЯТИНА С ГРИБАМИ"
    , 'price': '290'
    , 'description': "1 порц",
    'image': 'https://www.maggi.ru/data/images/recept/img640x500/recept_4500_uzik.jpg',
    'category': 'bluda'
  }, {

    'title': "КОТЛЕТЫ С ПЮРЕ"
    , 'price': '130'
    , 'description': "1 порц",
    'image': 'https://ont.by/static/article/middle/index/B3plvPxWI4jTrAyP.jpg',
    'category': 'bluda'
  }, {

    'title': "ГОВЯДИНА С ОВОЩАМИ"
    , 'price': '280'
    , 'description': "1 порц",
    'image': 'https://img.iamcook.ru/old/upl/recipes/middle/u1378-59daaaa574b17cfcffcfcf98f61fcc31.jpg',
    'category': 'bluda'
  }, {

    'title': " КУРИЦА С ОВОЩАМИ"
    , 'price': '180'
    , 'description': "1 порц",
    'image': 'https://static.1000.menu/img/content/19028/-vok-skovoroda-kurica-s-ovoshchami-v-vok-skovorode_1486694773_1_max.jpg',
    'category': 'bluda'
  }, {

    'title': "КУРИНЫЕ НАГГЕТСЫ"
    , 'price': '140'
    , 'description': "1 порц",
    'image': 'https://receptisalatov.com/content/recipes/514/main_b_kurinyie-naggetsyi-doma.jpg',
    'category': 'bluda'
  }, {

    'title': "КУРИНЫЕ ШАРИКИ С КИСЛО-СЛАДКОМ СОУСЕ"
    , 'price': '190'
    , 'description': "1 порц",
    'image': 'https://img.povar.ru/main/32/0f/43/47/kurinie_bolli_v_kislo-sladkom_souse-687587.JPG',
    'category': 'bluda'
  }, {

    'title': "МАНТЫ С МЯСОМ"
    , 'price': '165'
    , 'description': "1 порц",
    'image': 'https://img.iamcook.ru/old/upl/recipes/middle/u-9220f3f2fc6c3ad9f2c4e3be48389be2.JPG',
    'category': 'bluda'
  }, {

    'title': "СОСИСКИ С ПЮРЕ"
    , 'price': '120'
    , 'description': "1 порц",
    'image': 'https://img-global.cpcdn.com/recipes/611354d4e34d8bcc/400x400cq70/photo.jpg',
    'category': 'bluda'
  }, {

    'title': "ФРИКАСЕ С КУРИЦЕЙ"
    , 'price': '220'
    , 'description': "1 порц",
    'image': 'https://kulinarnia.ru/wp-content/uploads/2015/12/frikase-iz-kuritsy-klassicheskiy-recept.jpg',
    'category': 'bluda'
  }, {

    'title': "БИФШТЕКС"
    , 'price': '180'
    , 'description': "1 порц",
    'image': 'https://www.povarenok.ru/data/cache/2019feb/08/09/2484557_30904-710x550x.jpg',
    'category': 'bluda'
  }, {

    'title': "ВАРЕНИКИ С ВИШНЕЙ"
    , 'price': '90'
    , 'description': "1 порц",
    'image': 'https://smak.ua/i/55/00/9/55009/image_main/1270dc00c0ac05d8463b608d6b4ea555-quality_100Xresize_crop_1Xallow_enlarge_0Xw_680Xh_510.jpg',
    'category': 'bluda'
  }, {

    'title': "ВАРЕНИКИ С КАРТОШКОЙ"
    , 'price': '90'
    , 'description': "1 порц",
    'image': 'https://i.pinimg.com/originals/22/ca/f7/22caf718e9dca3dc079898bbdb0e70fe.png',
    'category': 'bluda'
  }, {

    'title': "ВАРЕНИКИ С ТВОРОГОМ"
    , 'price': '90'
    , 'description': "1 порц",
    'image': 'https://img.povar.ru/main/e1/06/52/16/vareniki_s_tvorogom_solenie-284207.jpg',
    'category': 'bluda'
  }, {
    'title': "МЯСО ПО-КАЗАХСКИ"
    , 'price': '160'
    , 'description': "1 порц",
    'image': 'https://kuhnyasad.ru/wp-content/uploads/2018/12/%D0%91%D0%B5%D1%88%D0%B1%D0%B0%D1%80%D0%BC%D0%B0%D0%BA-600x600.jpg',
    'category': 'bluda'
  }, {

    'title': "ПЕЛЬМЕНИ С КУРИЦЕЙ"
    , 'price': '140'
    , 'description': "1 порц",
    'image': 'https://www.gastronom.ru/binfiles/images/20160630/b74bf7d0.jpg',
    'category': 'bluda'
  }, {

    'title': "ПЕЛЬМЕНИ С ГОВЯДИНОЙ"
    , 'price': '150'
    , 'description': "1 порц",
    'image': 'https://static.1000.menu/img/content-v2/d5/78/55654/pelmeni-iz-govyadiny_1623872092_21_max.jpg',
    'category': 'bluda'
  }, {

    'title': "СУП КУРИНЫЙ"
    , 'price': '140'
    , 'description': "1 порц",
    'image': 'https://img-global.cpcdn.com/recipes/1772e2668be4a1a9/1200x630cq70/photo.jpg',
    'category': 'bluda'
  }, {

    'title': "ШОРПО ИЗ ГОВЯДИНЫ"
    , 'price': '160'
    , 'description': "1 порц",
    'image': 'https://s1.eda.ru/StaticContent/Photos/160525131253/160608122109/p_O.jpg',
    'category': 'bluda'
  }, {

    'title': "БОРЩ"
    , 'price': '160'
    , 'description': "1 порц",
    'image': 'https://lifehacker.ru/wp-content/uploads/2014/12/ob-05_1568611223.jpg',
    'category': 'bluda'
  }, {

    'title': "ЧЕЧЕВИЧНЫЙ"
    , 'price': '120 '
    , 'description': "1 порц",
    'image': 'https://www.vsegdavkusno.ru/assets/images/recipes/1565/1.jpg',
    'category': 'bluda'
  },


  {

    'title': "МЕДОВИК",
    'price': '100 '
    , 'image': 'https://i.ytimg.com/vi/K787tYxGPck/maxresdefault.jpg',
    'category': 'desert'
  }, {

    'title': "ШОКОЛАДНО ОРЕХОВЫЙ ТОРТ"
    , 'price': '140 '
    , 'image': 'https://img.povar.ru/main/79/fc/83/42/shokoladno-orehovii_tort_obaldennii-428199.jpg',
    'category': 'desert'
  }, {

    'title': "МОРКОВНЫЙ ТОРТ"
    , 'price': '100 '
    , 'image': 'https://www.vkusnyblog.ru/wp-content/uploads/2013/01/morkovny-tort-new.jpg',
    'category': 'desert'
  }, {

    'title': "КРАСНЫЙ БАРХАТ"
    , 'price': '120 '
    , 'image': 'https://vserecepti.info/wp-content/uploads/2020/01/359745_original-1.jpg',
    'category': 'desert'
  }, {

    'title': "МОРОЖЕНОЕ В АССОРТИМЕНТЕ"
    , 'price': '100 '
    , 'image': 'https://kafe-racha.ru//userfls/shop/shop_id_img/269_morozhenoe-v-assortimente.jpg',
    'category': 'desert'
  }, {

    'title': "КРУАССАНЫ"
    , 'price': '100 '
    , 'image': 'https://img.iamcook.ru/2020/upl/recipes/middle/u-4a4de86666f4112e166e8a430a690ab8.jpg',
    'category': 'desert'
  }, {

    'title': "ЧИЗКЕЙК"
    , 'price': '130 '
    , 'image': 'https://art-lunch.ru/content/uploads/2014/08/cheesecake-new-york-001x2-1.jpg',
    'category': 'desert'
  }, {

    'title': "ШОКОЛАДНЫЙ БРАУНИ"
    , 'price': '120 '
    , 'image': 'https://e1.edimdoma.ru/data/recipes/0010/5351/105351-ed4_wide.jpg?1628783636',
    'category': 'desert'
  }, {

    'title': "ТРЮФЕЛЬНЫЙ ТОРТ"
    , 'price': '160 '
    , 'image': 'https://vserecepti.info/wp-content/uploads/2018/01/trufelniy-tort-e1517111529734.jpg',
    'category': 'desert'
  }, {

    'title': "ЭКЛЕР ШОКОЛАДНЫЙ"
    , 'price': '60 '
    , 'image': 'https://e2.edimdoma.ru/data/recipes/0006/9573/69573-ed4_wide.jpg?1628808552',
    'category': 'desert'
  }, {

    'title': "ЭКЛЕР ВАНИЛЬНЫЙ"
    , 'price': '60 '
    , 'image': 'https://coffeemania.ru/uploads/p704/64812b5fecd72d8.jpg',
    'category': 'desert'
  },
  {

    'title': "ХЛЕБ ЧИАБАТТА,ХЛЕБ АССОРТИ",
    'price': '25/30 '
    , 'image': 'https://img.povar.ru/main/cc/e2/4d/f4/italyanskii_hleb_chiabatta-334889.jpg',
    'category': 'bread'
  },
  {

    'title': "ФОКАЧЧА"
    , 'price': '120 '
    , 'image': 'https://www.patee.ru/r/x6/12/24/79/960m.jpg',
    'category': 'bread'
  },


  {

    'title': "ЭСПРЕССО",
    'price': '80 '
    , 'image': 'https://www.nestleprofessional.ru/data/uploads/article_block/image/1008//thumb-5f71edff1ae15.webp',
    'category': "coffee"
  }, {

    'title': "АМЕРИКАНО"
    , 'price': '80 '
    , 'image': 'https://i.obozrevatel.com/food/recipemain/2019/3/16/coffee-americano.jpg?size=636x424',
    'category': "coffee"
  }, {

    'title': "КАПУЧИНО"
    , 'price': '120 '
    , 'image': 'https://www.nestleprofessional.ru/data/uploads/article_block/image/999/5f71edfe53cb4.jpg',
    'category': "coffee"
  }, {

    'title': "ЛАТТЕ"
    , 'price': '120 '
    , 'image': 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg',
    'category': "coffee"
  }, {

    'title': "АЙС АМЕРИКАНО"
    , 'price': '100 '
    , 'image': 'https://www.coffeeproject.ru/blog/wp-content/uploads/2020/07/60726726_2052506975044653_5311431185726673926_n-819x1024.jpg',
    'category': "coffee"
  }, {

    'title': "ФРАППУЧИНО"
    , 'price': '140 '
    , 'image': 'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120213180404/120214131950/p_O.jpg',
    'category': "coffee"
  }, {

    'title': "АЙС ЛАТТЕ"
    , 'price': '120 '
    , 'image': 'https://sun9-23.userapi.com/impg/zdEV6gqy-14GuTRkgdoFaEGDpYATaBBj3MgIHg/DVwBg2buINE.jpg?size=540x540&quality=96&sign=4c851b378eb96de03a7bd138ba49dca4&type=album',
    'category': "coffee"
  },


  {
    'title': "КЛУБНИЧНЫЙ",
    'price': '140 '
    , 'image': 'https://www.photorecept.ru/wp-content/uploads/2019/12/klubnichnyj-koktejl-s-kokosovym-molokom-1300x731.jpg',
    'category': 'cocktail'
  }, {
    'title': "ШОКОЛАДНЫЙ"
    , 'price': '140 '
    , 'image': 'https://img.povar.ru/main/76/2e/57/56/molochnii_kokteil_s_shokoladom-316128.jpg',
    'category': 'cocktail'
  }, {
    'title': "БАНАНОВЫЙ"
    , 'price': '120 '
    , 'image': 'https://pojrem.ru/img3/m-159-00.jpg',
    'category': 'cocktail'
  }, {
    'title': "КЛАССИЧЕСКИЙ"
    , 'price': '140 '
    , 'image': 'https://images11.esquire.ru/upload/article/f26/f268ea2f7266f9faf497309959c14b2e.JPG',
    'category': 'cocktail'
  }, {
    'title': "БАНАНО-КОКОСОВОЕ"
    , 'price': '140 '
    , 'image': 'https://dom-eda.com/uploads/topics/preview/00/00/55/23/9b3fd74663_1000.jpg',
    'category': 'cocktail'
  }, {
    'title': "ПЕЛИКАН"
    , 'price': '120 '
    , 'image': 'https://ru.inshaker.com/uploads/cocktail/hires/707/1537731432-Pelican__highres.jpg',
    'category': 'cocktail'
  },

  {
    'title': "МАЛИНОВЫЙ",
    'price': '150 '
    , 'description': "1л"
    , 'image': 'https://retsept-prigotovleniya.ru/wp-content/uploads/2020/06/1-30.jpg',
    'category': 'Lemonade'
  }, {
    'title': "ЧЕРНИЧНЫЙ"
    , 'price': '140 '
    , 'description': "1л"
    , 'image': 'https://img.povar.ru/main/bb/35/22/0a/chernichnii_limonad-595531.JPG',
    'category': 'Lemonade'
  }, {

    'title': "КЛУБНИЧНЫЙ"
    , 'price': '140 '
    , 'description': "1л"
    , 'image': 'https://img.povar.ru/main/8e/ce/28/da/klubnichnii_limonad-172531.jpg',
    'category': 'Lemonade'
  }, {

    'title': "МОХИТО"
    , 'price': '150 '
    , 'description': "1л"
    , 'image': 'https://i.ytimg.com/vi/s_LGzGzuQPE/maxresdefault.jpg',
    'category': 'Lemonade'
  }, {

    'title': "МАРАКУЙЯ"
    , 'price': '140 '
    , 'description': "1л"
    , 'image': 'https://foodman.club/wp-content/uploads/2019/02/Bez-nazvanija-4-22.jpg',
    'category': 'Lemonade'
  }, {

    'title': "ТАРХУН"
    , 'price': '140 '
    , 'description': "1л"
    , 'image': 'https://gotovim-doma.ru/images/recipe/7/c3/7c37e5c2f021d48b99a9b97d74beb5b7.jpg',
    'category': 'Lemonade'
  }, {

    'title': "АЙС ТИ"
    , 'price': '140 '
    , 'description': "1л"
    , 'image': 'https://cdn.fishandbread.com/products/3_1604725780.jpg',
    'category': 'Lemonade'
  },


  {

    'title': "КОКА-КОЛА",
    'price': '90 '
    , 'description': "1л"
    , 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/15-09-26-RalfR-WLC-0098.jpg/225px-15-09-26-RalfR-WLC-0098.jpg',
    'category': "drinks"
  }, {

    'title': "ФАНТА"
    , 'price': '90 '
    , 'description': "1л"
    , 'image': 'https://www.coca-cola.ru/content/dam/one/ru/ru/products/fanta-orange-500ml.png',
    'category': "drinks"
  }, {

    'title': "СПРАЙТ"
    , 'price': '90 '
    , 'description': "1л"
    , 'image': 'https://neman.kg/images/detailed/34/%D0%BB%D0%BE%D0%BB.JPG',
    'category': "drinks"
  }, {

    'title': "БОНАКВА С ГАЗОМ"
    , 'price': '50 '
    , 'description': "1л"
    , 'image': 'https://vodovoz.ru/upload/iblock/a1e/a1ed357f3a8a56cdd4fe1bfe02388f70.jpeg',
    'category': "drinks"
  }, {

    'title': "БОНАКВА БЕЗ ГАЗА"
    , 'price': '50 '
    , 'description': "1л"
    , 'image': 'https://vodovoz.ru/upload/iblock/812/812f9737bed2b8e156c4e10602dfba77.jpeg',
    'category': "drinks"
  }, {

    'title': "КОМПОТ"
    , 'price': '50 '
    , 'description': "1л"
    , 'image': 'https://vodovoz.ru/upload/iblock/858/858d39d06bd255060ea5e1b0c306c70e.jpg',
    'category': "drinks"
  }, {
    'title': "СОКИ В АССОРТИМЕНЕТ"
    , 'price': '150 '
    , 'description': "1л"
    , 'image': 'https://www.pizzasushishop.ru/wp-content/uploads/2018/04/%D1%81%D0%BE%D0%BA.jpg',
    'category': "drinks"
  },



  {
    'title': "СЕТ С УГРЕМ",
    'price': '600 '
    , 'image': 'https://takai-sushi.ru/nuber/images/shop/product/4ffd95d7-0548-4b23-8f64-2a760dcb3c10/53d96d3b-4a8d-47ac-b437-aa0dd7b22b6b.jpg',
    'category': "Rolls"
  }, {

    'title': "СЕТ С СЕМГОЙ"
    , 'price': '550 '
    , 'image': 'https://divine-pizza.com.ua/sites/default/files/sushi-set-ugor-zakaz-dostavka-irpen-bucha.png',
    'category': "Rolls"
  }, {

    'title': "ГОРЯЧИЙ РОЛЛ ЦЕЗАРЬ"
    , 'price': '220 '
    , 'image': 'https://i.ytimg.com/vi/ZTj7kl8deSs/hqdefault.jpg',
    'category': "Rolls"
  }, {

    'title': "ФИРМЕННЫЙ ТЕПЛЫЙ РОЛЛ"
    , 'price': '280 '
    , 'image': 'https://arigato.kg/wp-content/webpc-passthru.php?src=https://arigato.kg/wp-content/uploads/2021/11/cet-lyubimyj.jpg&nocache=1',
    'category': "Rolls"
  }, {

    'title': "ДРАКОН ЛАЙТ"
    , 'price': '250 '
    , 'image': 'https://sushiishim.com/backend/web/storage/0908/123/Roll%20big/2400%20%D0%BD%D0%B0%201600/25.jpg',
    'category': "Rolls"
  }, {

    'title': "ФИЛАДЕЛЬФИЯ"
    , 'price': '280 '
    , 'image': 'https://vilkin.pro/wp-content/uploads/2019/02/rolli-filadelfiya-770x513.jpg',
    'category': "Rolls"
  }, {

    'title': "КАЛИФОРНИЯ "
    , 'price': '280 '
    , 'image': 'https://e3.edimdoma.ru/data/recipes/0005/0070/50070-ed4_wide.jpg?1628833090',
    'category': "Rolls"
  },


  {

    'title': "РИС",
    'price': '60 '
    , 'image': 'https://zira.uz/wp-content/uploads/2019/08/ris-2.jpg',
    'category': "Rice"
  }, {

    'title': "КАРТОФЕЛЬ ФРИ"
    , 'price': '70 '
    , 'image': 'https://www.chefmarket.ru/blog/wp-content/uploads/2021/01/fast-food--2000x1200.jpg',
    'category': "Rice"
  }, {

    'title': "КАРТОФЕЛЬНОЕ ПЮРЕ"
    , 'price': '60 '
    , 'image': 'https://static.1000.menu/img/content/23212/kartofelnoe-pure-s-yaicom-i-molokom_1508924263_1_max.jpg',
    'category': "Rice"
  }, {

    'title': "КАРТОФЕЛЬ ПО-ДЕРЕВЕНСКИ"
    , 'price': '80 '
    , 'image': 'https://alimero.ru/uploads/images/00/63/28/2015/05/17/27652f_wmark.jpg',
    'category': "Rice"
  },


  {

    'title': "БУРРАТА С ПОМИДОРАМИ",
    'price': '200 '
    , 'image': 'https://img-global.cpcdn.com/recipes/154eabcf3a976660/400x400cq70/photo.jpg',
    'category': "Salad"
  }, {

    'title': "ГРЕЧЕСКИЙ САЛАТ"
    , 'price': '180 '
    , 'image': 'https://www.kulina.ru/images/art/14009.jpg',
    'category': "Salad"
  }, {

    'title': "САЛАТ ОСТРЫЙ ЛАЗЗАТ"
    , 'price': '220 '
    , 'image': 'https://e3.edimdoma.ru/data/recipes/0014/5073/145073-ed4_wide.jpg?1628759237',
    'category': "Salad"
  }, {

    'title': "САЛАТ ОЛИВЫЕ"
    , 'price': '120 '
    , 'image': 'https://img.povar.ru/main/71/a7/1b/ab/salat_quotolivequot_klassicheskii_s_kolbasoi-286788.JPG',
    'category': "Salad"
  }, {

    'title': "ФУНЧОЗА С МЯСОМ"
    , 'price': '180 '
    , 'image': 'https://wellnessy.ru/wp-content/uploads/2019/10/funchoza-with-beef3.jpg',
    'category': "Salad"
  }, {

    'title': "САЛАТ ЦЕЗАРЬ С КУРИЦЕЙ"
    , 'price': '180 '
    , 'image': 'https://img-global.cpcdn.com/recipes/80a1fa7004462969a69147a96593065b7895b88ba2409f7b202f95c33892e3cd/1200x630cq70/photo.jpg',
    'category': "Salad"
  }, {

    'title': "ЖАРЕНЫЙ СЫР ХАЛУМИ С ПОМИДОРАМИ ,ЖАРЕНЫЙ СЫР ХАЛУМИ С МЕДОМ "
    , 'price': '160 '
    , 'image': 'https://пицца-бест.рф/800/600/https/static1-repo.aif.ru/1/6e/679038/ae57464cb863994480ed3d8e8f77baa2.jpg',
    'category': "Salad"
  }

]

const MENU = [

  { label: 'Все', link: '' },
  { label: 'Завтрак', link: 'zavtrak' },
  { label: 'Бургеры', link: 'burgery' },
  { label: 'Шаурма', link: 'shaurma' },
  { label: 'Пицца', link: 'picca' },
  { label: 'Блюда', link: 'bluda' },
  { label: 'Десерт', link: 'desert' },
  { label: 'Хлеб', link: 'bread' },
  { label: 'Кофе', link: 'coffee' },
  { label: 'Коктейль', link: 'cocktail' },
  { label: 'Лимонад', link: 'Lemonade' },
  { label: 'Напитки', link: 'drinks' },
  { label: 'Роллы', link: 'Rolls' },
  { label: 'Рис', link: 'Rice' },
  { label: 'Салат', link: 'Salad' },



]

function MainContainer() {
  const { category } = useParams()

  const getLink = (l) => `/ema/${l}`

  return (
    <>
 
    <div className={'ema-menu p-2 '}>
     
      <div className={'d-flex justify-content-center p-2'}>
        <img alt={'Menu Ema'} style={{ width: '40vw', borderRadius: '100px' }} src={require('../../assets/ema/ema3.png')} />
      </div>

      <h6 className={'menu-categories'}>
        {MENU.map(g => (
          <NavLink to={getLink(g.link)} className={(category || '') === g.link ? 'active' : ''}>
            {g.label}
          </NavLink>
        ))}
      </h6>

      <Row>
        {FOODS.filter(g => !category || g.category === category).map(g => (
          <Col lg={3} md={4} xs={6} className="mb-4">
            <Card className={'food'}>
              <Card.Img style={{ width: "100%", height: "180px" }} variant="top" src={g.image} />
              <Card.Body className={'d-flex flex-column'}>
                <div className={'flex-grow-1'}>
                  <h5 className={'m-0'}>{g.title}</h5>
                  <p className={'m-0 text-muted'}>{g.description}</p>
                </div>
                <h4 className={'price'}>{g.price} KGS</h4>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
    </>
  )
}

export default MainContainer
