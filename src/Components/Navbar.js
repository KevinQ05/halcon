import { useState } from 'react';
import { Link } from 'react-router-dom';
export function Navbar(props) {

  // function getKeyByValue(object, value) { //To find the key given a value in a dict, for links
  //   return Object.keys(object).find(key => object[key] === value);
  // };
  
  // let dropdown_items = Object.values(props.items).map(
  //   (item) => props.submenu ? <li><Link to={getKeyByValue(props.items,item)}>{item}</Link></li> : <li>hello</li>
  // );
  // Currently deprecated in favor of doing it by hand ^ too little items and need for more customization

  const [dark,setDark] = useState(true);

  return (
      <div class="navbar bg-base-100 mb-40 shadow-xl rounded-box rounded-t-none fixed">
        <div class="navbar-start">
          <div class="dropdown">
            <label class="btn btn-ghost btn-circle" tabindex="0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72">
            
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/Basics-TI">Un buen uso de la TI</Link></li>
              <div tabindex="0" class="collapse collapse-arrow">
                <input type="checkbox" class="peer"/> 
                <div class="collapse-title">
                  Series y Sucesiones
                </div>
                <div class="collapse-content"> 
                  <li ><Link to="/series/introduccion" className='hover:bg-info hover:text-white hover:font-bold'>Introducción</Link></li>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <a class="btn btn-ghost normal-case text-xl" href='/'>Proyecto<span className=' pl-2 text-secondary font-semibold'>Halcón</span></a>
        </div>
        <div class="navbar-end">
        {/* Acá van los botones con íconos: TODO */}
        <label class="swap swap-rotate">
  
        <input type="checkbox" className='mx-6 md:mx-10'
          onChange={
            () => {
              setDark(!dark);
              document.getElementById("html").setAttribute("data-theme",!dark?"forest":"emerald");
            }
          }
        />
        
          <svg class="swap-on fill-current w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          
          <svg class="swap-off fill-current w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
          
        </label>
        </div>
      </div>
  );
}
  