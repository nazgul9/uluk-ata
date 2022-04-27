import './App.scss';
import {Route, Routes, useLocation} from 'react-router-dom'
import MainContainer from './containers/dine/MainContainer'
import CategoryContainer from './containers/dine/CategoryContainer'
import {useEffect} from 'react'
import {Container} from 'react-bootstrap'

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <Container>
      <Routes>

        <Route path="/dine" element={<MainContainer/>}/>
        <Route path="/dine/:category" element={<CategoryContainer/>}/>

      </Routes>

    </Container>
  );
}

export default App;
