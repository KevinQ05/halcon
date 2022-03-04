import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import { BasicsTi } from './BasicsTi';

function App() {

  const navbar_items = {
    "/": "Inicio",
    "Basics-TI": "Un buen uso de la TI",
    "Series-y-sucesiones": "Series y Sucesiones: Introducción",
  }

  return (
    <Router>
      <div className="App">
        <div className='h-20'>
          <Navbar items = {navbar_items}/>
        </div>

        <div className="container mt-8 mb-12 p-4 pb-6 bg-base-200 w-11/12 m-auto rounded-lg">
          <Routes>
            <Route exact path='/' element ={<Home/>}/>
            <Route exact path='/Basics-TI' element={<BasicsTi/>}/>
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
