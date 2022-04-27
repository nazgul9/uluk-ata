import './styles.scss';
import {Route, Routes, useLocation} from 'react-router-dom'
import MainContainer from './containers/dine/MainContainer'
import {useEffect} from 'react'
import {Container} from 'react-bootstrap'

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <Container>
      <Routes>

        <Route path="/dine" exact element={<MainContainer/>}/>
        <Route path="/dine/:category" exact element={<MainContainer/>}/>

      </Routes>

    </Container>
  );
}

export default App;
