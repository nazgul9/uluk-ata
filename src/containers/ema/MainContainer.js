import {NavLink, useLocation, useParams} from 'react-router-dom'

const MENU = [

  {label: 'Все', link: '/'},
  {label: 'Завтрак', link: '/zavtrak'},
  {label: 'Бургеры', link: '/burgery'},
  {label: 'Шаурма', link: '/shaurma'},
  {label: 'Пицца', link: '/picca'},
  {label: 'Крылышки', link: '/krylishki'},

];

function MainContainer() {
  const {category} = useParams();
  const location = useLocation();

  return (
    <div className={'dine-menu'}>

      <div className={'d-flex justify-content-center'}>
        <img style={{width: '50vw'}} src={require('../../assets/dine/2000.png')}/>
      </div>

      <div className={'menu-categories'}>
        {MENU.map(g => (
          <NavLink to={`/dine${g.link}`} className={location.pathname.endsWith(g.link) ? 'active' : ''}>
            {g.label}
          </NavLink>
        ))}
      </div>

      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>
      <h1>Tut menu {category}</h1>

    </div>
  );
}

export default MainContainer;
