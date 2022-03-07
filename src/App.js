import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import { BasicsTi } from './BasicsTi';
import { Footer } from './Components/Footer';
import { SeriesIntro } from './SeriesIntro';
import { Archivos } from './Archivos';

function App() {

  const navbar_items = {
    "/": "Inicio",
    "Basics-TI": "Un buen uso de la TI",
    "Series-y-sucesiones": "Series y Sucesiones: Introducción",
  }

  return (
    <Router>
      <div className="App">
        <div className=' h-16'>
          <Navbar items = {navbar_items} 
            submenu = {true}

          />
        </div>
          <Routes>
            <Route exact path='/' element ={<Home/>}/>
            <Route exact path='/Basics-TI' element={<BasicsTi/>}/>
            <Route exact path='/series/introduccion' element={<SeriesIntro/>}/>
            <Route exact path='/files' element={<Archivos/>}/>
          </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
