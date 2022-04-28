import {NavLink, useParams} from 'react-router-dom'
import {Card, Col, Row} from 'react-bootstrap'

const FOODS = [{
  'title': 'Гамбургер из говядины',
  'description': '(Мясо, лист, помидор, огурцы, салаты, соус чесночный, томатный соус)',
  'price': '90 сом',
  'image': 'https://www.gastronom.ru/binfiles/images/20150213/b41be923.jpg',
  'category': 'burgery',
}, {
  'title': 'Гамбургер ассорти',
  'description': '(Мясо, лист, помидор, огурцы, салаты, соус чесночный, томатный соус)',
  'price': '120 сом',
  'image': 'https://img.freepik.com/free-photo/assortment-with-tasty-hamburger-and-copy-space_23-2148614078.jpg?size=626&ext=jpg',
  'category': 'burgery',
}, {
  'title': 'Гамбургер двойной ',
  'description': '(Мясо, лист, помидор, огурцы, салаты, соус чесночный, томатный соус)',
  'price': '130 сом',
  'image': 'https://thumbs.dreamstime.com/z/%D0%B4%D0%B2%D0%BE%D0%B9%D0%BD%D0%BE%D0%B9-%D0%B3%D0%B0%D0%BC%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-%D0%BD%D0%B0-%D0%B1%D0%B0%D0%BC%D0%B1%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B9-%D0%BA%D0%BE%D0%B2%D1%80%D0%B8%D0%BA%D0%B5-%D1%81-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE%D0%BC-%D0%B4%D0%BB%D1%8F-181511235.jpg',
  'category': 'burgery',
}, {
  'title': 'Гамбургер вегетарианский',
  'description': '(Лист, помидор, огурцы, салаты, соус чесночный, томатный соус)',
  'price': '60 сом',
  'image': 'https://img.povar.ru/main/c9/41/7b/34/vegetarianskii_burger_master-klass-510146.JPG',
  'category': 'burgery',
}, {
  'title': 'Гамбургер из курицы',
  'description': '(Мясо, лист, помидор, огурцы, салаты, соус чесночный, томатный соус)',
  'price': '80 сом',
  'image': 'https://www.maggi.ru/data/images/recept/img640x500/recept_2720_58kc.jpg',
  'category': 'burgery',
}, {
  'title': 'Гамбургер из курицы ассорти',
  'description': '(Мясо, лист, помидор, огурцы, салаты, соус чесночный,   томатный соус)',
  'price': '110 сом',
  'image': 'https://img.freepik.com/free-photo/fresh-tasty-chicken-burger-with-french-fries-on-dark-background_222237-360.jpg',
  'category': 'burgery',
}, {
  'title': 'Гамбургер из курицы двойной',
  'description': '(Мясо, лист, помидор, огурцы, салаты, соус чесночный, томатный соус)',
  'price': '120 сом',
  'image': 'https://img.freepik.com/free-photo/double-chicken-burger-closeup_281839-6.jpg',
  'category': 'burgery',
}, {
  'title': 'Сэндвич бургериз говядина ',
  'description': '(Мясо, лист, помидор, огурцы, салаты, соус чесночный, томатный соус)',
  'price': '110 сом',
  'image': 'https://www.gastronom.ru/binfiles/images/20160323/b26f2ed4.jpg',
  'category': 'burgery',
}, {
  'title': 'Сэндвич бургер из курицы',
  'description': '(Мясо, лист, помидор, огурцы, салаты, соус чесночный, томатный соус)',
  'price': '100 сом',
  'image': 'https://media.istockphoto.com/photos/sandwich-juicy-spicy-chicken-burgers-with-tomato-and-eggplant-picture-id859554758',
  'category': 'burgery',
}, {
  'title': 'Шеф бургер мяса на выбор',
  'description': '(Мясо, лист, помидор, огурцы, салаты, соус 4 вида,  сырный,чесночный,барбекю,кетчуп)',
  'price': '110 сом',
  'image': 'https://img-global.cpcdn.com/recipes/9f03dba9cecb4d85/680x482cq70/shief-burghier-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B0.jpg',
  'category': 'burgery',
}, {
  'title': 'Блэкбургер мяса на выбор',
  'description': '(Мясо, лист, помидор, огурцы, салаты, соус 4 вида,  сырный,чесночный,барбекю,кетчуп)',
  'price': '110 сом',
  'image': 'https://st2.depositphotos.com/2036925/10035/i/600/depositphotos_100350086-stock-photo-black-burger-with-stews.jpg',
  'category': 'burgery',
}, {
  'title': 'Нанбургер мяса на выбор ',
  'description': '( Булочка, тандирная Мясо,  помидор, огурцы, салаты, соус чесночный, томатный соус)',
  'price': '120 сом',
  'image': 'https://roscontrol.com/wp-content/uploads/2021/09/3dd5ef894147375fcecf.jpg',
  'category': 'burgery',
}, {
  'title': 'Хот-дог',
  'description': '(Сосиска, лист, помидор, огурцы, солёный, салаты, соус чесночный, кетчуп)        ',
  'price': '70 сом',
  'image': 'https://e2.edimdoma.ru/data/posts/0001/6493/16493-ed4_wide.jpg?1631186249',
  'category': 'burgery',
}, {
  'title': 'Хот-дог двойной',
  'description': '(Сосиска 2 шт, лист, помидор, огурцы, солёный, салаты, соус чесночный,  кетчуп)',
  'price': '90 сом',
  'image': 'https://sun9-39.userapi.com/impg/rH0AWwGdKUk8zAUqB0lCK4is2DL9nisyuRzCXQ/clFEBneF3io.jpg?size=512x0&quality=95&sign=79392f498ca7438097fd43a7748d69bf',
  'category': 'burgery',
}
  ,
  {
    'title': 'Шаурма классическая говядина ',
    'description': '(Мясо огурцы помидор картошка пай салаты  чесночный соус+ фирменный томатный соус) ',
    'price': '150 сом',
    'image': 'https://shurma-e-menu.web.app/img/%D0%A8%D0%B0%D1%83%D1%80%D0%BC%D0%B0-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F.jpeg',
    'category': 'shaurma',
  }, {
    'title': 'Шаурма с сыром ',
    'description': '(Мясо огурцы помидор картошка пай салаты  чесночный соус+сырный соус фирменный томатный соус)',
    'price': '170 сом',
    'image': 'https://shurma-e-menu.web.app/img/shs.jpeg',
    'category': 'shaurma',
  }, {
    'title': 'Шаурма ассорти ',
    'description': '(Мясо+сосиска огурцы помидор картошка пай салаты чесночный соус+ фирменный томатный соус)',
    'price': '170 сом',
    'image': 'https://hroomroom.com.ua/wp-content/uploads/img-721-1510676991-e1617717628667.png',
    'category': 'shaurma',
  }, {
    'title': 'Шаурма микс',
    'description': '(Говяжий+куриный мясо огурцы помидор картошка пай салаты чесночный соус+ фирменный томатный соус)',
    'price': ' 200 сом',
    'image': 'https://cafesahara.ru/upload/resize_cache/iblock/4e8/1200_1200_1/4e8e11873208259919e6e09c86b9482d.jpg',
    'category': 'shaurma',
  }, {
    'title': 'Шаурма двойной ',
    'description': '(Мясо огурцы помидор картошка пай салаты  чесночный соус+фирменны томатный соус)',
    'price': '220 сом',
    'image': 'https://unopizza.com.ua/image/cache/catalog/pizza/shaurma-dvoinaya-500x500.jpg',
    'category': 'shaurma',
  }, {
    'title': 'Шаурма вегетарианский ',
    'description': '(Огурцы помидор картошка пай салаты  чесночный соус+ фирменный томатный соус)',
    'price': '80 сом',
    'image': 'https://tishka.org/master%20class/vegetarian%20shaurma/vegetarianskaya-shaurma.jpg',
    'category': 'shaurma',
  }, {
    'title': 'Шаурма из курицы',
    'description': '(Мясо куриный огурцы помидор картошка пай салаты чесночный соус+фирменны томатный соус)',
    'price': '140 сом',
    'image':
      'https://shurma-e-menu.web.app/img/%D0%A8%D0%B0%D1%83%D1%80%D0%BC%D0%B0%20%D0%B8%D0%B7%20%D0%BA%D1%83%D1%80%D0%B8%D1%86%D1%8B.jpeg',
    'category': 'shaurma',
  }, {
    'title': 'Шаурма из курицы ассорти ',
    'description': '(Мясо+сосиска огурцы помидор картошка пай салаты чесночный соус+фирменны томатный соус)',
    'price': '160 сом',
    'image': 'https://www.povarenok.ru/data/cache/2019may/07/26/2536097_61566-710x550x.jpg',
    'category': 'shaurma',
  }, {
    'title': 'Шаурма из курицы сырный',
    'description': '(Мясо огурцы помидор картошка пай салаты чесночный сырный соус+фирменны томатный соус)',
    'price': '150 сом',
    'image': 'https://shurma-e-menu.web.app/img/%D0%A8%D0%B0%D1%83%D1%80%D0%BC%D0%B0-%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B5%D0%B9-%D1%81%D1%8B%D1%80%D0%BE%D0%BC.jpeg',
    'category': 'shaurma',
  }, {
    'title': 'Шаурма из курицы двойной',
    'description': '(Мясо огурцы помидор картошка пай салаты чесночный соус+фирменны томатный соус)',
    'price': '200 сом',
    'image': 'https://www.gastronom.ru/binfiles/images/20200427/b9b8118f.jpg',
    'category': 'shaurma',
  }
  ,
  {
    'title': 'Красный бархат',
    'price': ' 95 сом',
    'image': 'https://shurma-e-menu.web.app/img/ff.jpeg',
    'category': 'desert',
  }, {
    'title': 'Итальянский',
    'price': ' 95 сом',
    'image': 'https://shurma-e-menu.web.app/img/%D0%98%D1%82%D0%B0%D0%BB%D1%8C%D1%8F%D0%BD%D1%81%D0%BA%D0%B8%D0%B9.jpeg',
    'category': 'desert',
  }, {
    'title': 'Чизкейк',
    'price': ' 85 сом',
    'image': require('../../assets/img/чизкейк.jpeg'),
    'category': 'desert',
  }, {
    'title': 'Сникерс',
    'price': '85 сом',
    'image': 'https://shurma-e-menu.web.app/img/%D1%81%D0%BD%D0%BA.jpeg',
    'category': 'desert',
  }, {
    'title': 'Медовый шок',
    'price': '85 сом',
    'image': 'https://shurma-e-menu.web.app/img/%D0%9C%D0%B5%D0%B4%D0%BE%D0%B2%D1%8B%D0%B9-%D1%88%D0%BE%D0%BA.jpeg',
    'category': 'desert',
  }, {
    'title': 'Медовый ',
    'price': '75 сом',
    'image': 'https://shurma-e-menu.web.app/img/%D0%9C%D0%B5%D0%B4%D0%BE%D0%B2%D1%8B%D0%B9.jpeg',
    'category': 'desert',
  }
  ,
  {
    'title': 'Крылышки',
    'description': '6 шт+соус фирменный',
    'price': ' 200 сом ',
    'image': 'https://shurma-e-menu.web.app/img/%D0%BA%D1%80.jpeg',
    'category': 'krylishki',
  }, {
    'title': 'Крылышки',
    'description': '12 шт+соус фирменный ',
    'price': '380 сом',
    'image': 'https://shurma-e-menu.web.app/img/%D0%BA%D1%80.jpeg',
    'category': 'krylishki',
  }, {
    'title': 'Крылышки',
    'description': '18 шт+соус фирменный ',
    'price': '510 сом',
    'image': 'https://shurma-e-menu.web.app/img/%D0%BA%D1%80.jpeg',
    'category': 'krylishki',
  }, {
    'title': ' Крылышки',
    'description': '24 шт+соус фирменный',
    'price': '700 сом',
    'image': 'https://shurma-e-menu.web.app/img/%D0%BA%D1%80.jpeg',
    'category': 'krylishki',
  }, {
    'title': 'Картофель фри',
    'description': '(200 гр)',
    'price': '100 сом ',
    'image': 'https://grandkulinar.ru/uploads/posts/2019-04/1554138718_kartofel-fri-iz-batata.jpg',
    'category': 'krylishki',
  }, {
    'title': 'Картофель по деревенский ',
    'description': '(200 гр)',
    'price': '100 сом ',
    'image': 'https://alimero.ru/uploads/images/00/63/28/2015/05/17/27652f_wmark.jpg',
    'category': 'krylishki',
  }
  ,
  {'title': 'Кофе 3/1 ', 'price': '25 сом', 'category': 'gnapitki'}, {
    'title': 'Кофе чёрный ',
    'price': '25 сом ',
    'category': 'gnapitki',
  }, {'title': 'Чай стакан ', 'price': '10 сом', 'category': 'gnapitki'}, {
    'title': 'Чай с лимоном ',
    'price': '20 сом',
    'category': 'gnapitki',
  }, {'title': 'Чай в чайнике', 'price': '20 сом', 'category': 'gnapitki'}, {
    'title': 'Чай в чайнике с лимоном ',
    'price': '40 сом',
    'category': 'gnapitki',
  }, {'title': 'Чай турецки ', 'price': '10 сом', 'category': 'gnapitki'}
  ,
  {'title': 'Кола ', 'description': '0/5', 'price': '50 сом', 'category': 'hnapitki'}, {
    'title': 'Фанта  ',
    'description': '0/5',
    'price': '50 сом ',
    'category': 'hnapitki',
  }, {'title': 'Спрайт ', 'description': '0/5', 'price': '50 сом', 'category': 'hnapitki'}, {
    'title': 'Чай fusetea ',
    'description': '0/5',
    'price': '50 сом',
    'category': 'hnapitki',
  }, {'title': 'Кола', 'description': '1л', 'price': '80 сом', 'category': 'hnapitki'}, {
    'title': 'Фанта  ',
    'description': '1л',
    'price': '80 сом',
    'category': 'hnapitki',
  }, {'title': 'Спрайт ', 'description': '1л', 'price': '80 сом', 'category': 'hnapitki'}, {
    'title': 'Чай fusetea  ',
    'description': '1л',
    'price': '80 сом',
    'category': 'hnapitki',
  }, {'title': 'Кола ', 'description': '1/5л', 'price': '100 сом', 'category': 'hnapitki'}
  ,
  {'title': 'Самса с мясом ', 'price': '70 сом', 'category': 'samsa'}, {
    'title': 'Самса с курицей ',
    'price': '60 сом',
    'category': 'samsa',
  }, {'title': 'Самса с сыром  ', 'price': '60 сом', 'category': 'samsa'}, {
    'title': 'Самса с тыквой',
    'price': '40 сом',
    'category': 'samsa',
  }, {'title': 'Самса с картошкой ', 'price': '40 сом', 'category': 'samsa'}
  ,
  {'title': 'Сырный', 'price': '20 сом', 'category': 'sous'}, {
    'title': 'Кетчуп',
    'price': '20 сом',
    'category': 'sous',
  }, {'title': 'Барбекю', 'price': '20 сом', 'category': 'sous'}, {
    'title': 'Чесночный',
    'price': '20 сом',
    'category': 'sous',
  }, {'title': 'Кисло сладкий', 'price': '20 сом', 'category': 'sous'},
]


const MENU = [

  {label: 'Все', link: ''},
  {label: 'Бургеры', link: 'burgery'},
  {label: 'Шаурма', link: 'shaurma'},
  {label: 'Десерт', link: 'desert'},
  {label: 'Крылышки', link: 'krylishki'},
  {label: 'Горячие напитки', link: 'gnapitki'},
  {label: 'Холодные напитки', link: 'hnapitki'},
  {label: 'Самса', link: 'samsa'},
  {label: 'Соус', link: 'sous'},
]

function MainContainer() {
  const {category} = useParams()

  const getLink = (l) => `/shawarma/${l}`

  return (
    <div className={'shawarma-menu'}>

      <div className={'d-flex justify-content-center'}>
        <img alt={'Menu Shawarma'} style={{width: '50vw'}} src={require('../../assets/Shawarma/Shawarma.jpeg')}/>
      </div>

      <div className={'menu-categories'}>
        {MENU.map(g => (
          <NavLink to={getLink(g.link)} className={(category || '') === g.link ? 'active' : ''}>
            {g.label}
          </NavLink>
        ))}
      </div>

      <Row>
        {FOODS.filter(g => !category || g.category === category).map(g => (
          <Col lg={3} md={4} xs={6} className="mb-4">
            <Card className={'food'}>
              <Card.Img variant="top" src={g.image}/>
              <Card.Body className={'d-flex flex-column'}>
                <div className={'flex-grow-1'}>
                  <h5 className={'m-0'}>{g.title}</h5>
                  <p className={'m-0 text-muted'}>{g.description}</p>
                </div>
                <div className={'price'}>{g.price}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  )
}

export default MainContainer
