import React from 'react';
import tropy from './images/1.png';
import awardRes from './images/2.png';

export default function Award() {
    return (
         <section>
               <div className="first">
                    <img className="award-img center" src={tropy} alt="tropy"/>
               </div>
               <div className="second">
                    <h4> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                    <ul className="list">
                       <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                       <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ul>
                    <img className="awardRes-img center" src={awardRes} alt="award receving"/>
                    <p className="para">Government of India has awarded the<b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
         </section>
    )
}
