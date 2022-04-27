import './styles.scss';
import {Route, Routes, useLocation} from 'react-router-dom'
import DineMainContainer from './containers/dine/MainContainer'
import {useEffect} from 'react'
import {Container} from 'react-bootstrap'
import EmaMainContainer from './containers/ema/MainContainer'

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <Container>
      <Routes>

        <Route path="/dine" exact element={<DineMainContainer/>}/>
        <Route path="/dine/:category" exact element={<DineMainContainer/>}/>

        <Route path="/ema" exact element={<EmaMainContainer/>}/>
        <Route path="/ema/:category" exact element={<EmaMainContainer/>}/>

      </Routes>

    </Container>
  );
}

export default App;
