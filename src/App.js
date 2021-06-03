import React from 'react';
import Award from './Award';
import logo from './images/logo.png';
import items from './images/3.png';
import './App.css';
import Products from './Products';
import Footer from './Footer';


function App() {
    return (
       <React.Fragment>
           <div className="logo">
              <img className="logo-img center" src={logo} alt="hello"/>
           </div>
           <Award/>
        
        <p className="install">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <div className="items-parent">
           <img className="items center" src={items} alt="items"/>
        </div>
        <p className="item-name">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        <div className="line-big"></div>
        <h4 className="system">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
       <Products/>
       <Footer/>
    
    </React.Fragment>
    )
}

export default App
