import './styles.scss'
import {NavLink, useParams} from 'react-router-dom'
import {Card, Col, Row} from 'react-bootstrap'

const FOODS = [
  
];

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
  {label: 'Hапитки', link: 'napitki'},
  {label: 'Сок', link: 'sok'},
  {label: 'Блюда', link: 'bluda'},
  {label: 'Салат', link: 'salat'},
  {label: 'Соус', link: 'sous'},
  {label: 'Вок', link: 'wok'},

];

function MainContainer() {
  const {category} = useParams();

  const getLink = (l) => `/dine/${l}`;

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

      <Row>
        {FOODS.filter(g => !category || g.category === category).map(g => (
          <Col lg={3} md={4} xs={6}>
            <Card className={'food'}>
              <Card.Img variant="top" src={g.image} />
              <Card.Body className={'d-flex flex-column'}>
                <div className={'flex-grow-1'}>
                  <h5 className={'m-0'}>{g.title}</h5>
                  <p className={'m-0 text-muted'}>{g.description}</p>
                </div>
                <div className={'price'}>{g.price} KGS</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
}

export default MainContainer;
