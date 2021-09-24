import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';


let Header = (props) => {
    
    return(
        <header>
                { props.isAuth 
                ? <div><button className="submit" onClick={props.loginOutThunk}>logout</button><NavLink className="header__login" to={'/login'}>{props.login}</NavLink></div>  

                :  <NavLink className="header__login" to={'/login'}>Login</NavLink> }
        </header>
    )
}

export default Header