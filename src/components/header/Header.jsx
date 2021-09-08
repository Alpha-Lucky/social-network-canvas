import React from 'react';
import './header.css'
import logoHeader from '../img/1.png'


let Header = () => {
    return(
        <header>
            <img src={logoHeader} alt="Logo" />
            <div className="headerMobileComponent">
            </div>
        </header>
    )
}

export default Header