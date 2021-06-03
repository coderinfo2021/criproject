import React from 'react';
import call from './images/call.png';
import facebook from './images/facebook.png';
import internet from  './images/internet.png';

function Footer() {
    return (
        <footer>
            <div>
                <img className="icon-img" src={call} alt="call"/>
                <p>Toll free 1800 200 1234</p>
            </div>

            <div>
                <img className="icon-img" src={facebook} alt="facebook"/>
                <p>www.facebook.com/cripumps</p>
            </div>

            <div>
                <img className="icon-img" src={internet} alt="internet"/>
                <p>www.crigroups.com</p>
            </div>
        </footer>
    )
}

export default Footer
