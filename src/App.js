import {Route, Routes, useLocation} from 'react-router-dom'
import DineMainContainer from './containers/dine/MainContainer'
import {useEffect} from 'react'
import {Container} from 'react-bootstrap'
import EmaMainContainer from './containers/ema/MainContainer'
import ShawarmaMainContainer from './containers/shawarma/MainContainer'
import UlukMainContainer from './containers/uluk-ata/MainContainer'
import './App.scss'

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

        <Route path="/shawarma" exact element={<ShawarmaMainContainer/>}/>
        <Route path="/shawarma/:category" exact element={<ShawarmaMainContainer/>}/>

        <Route path="/uluk" exact element={<UlukMainContainer/>}/>
        <Route path="/uluk/:category" exact element={<UlukMainContainer/>}/>



        {/* <Route path="/" exact element={<ShawarmaMainContainer/>}/> */}


      </Routes>
    </Container>
  );
}

export default App;
