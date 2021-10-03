import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} <button className="submit" onClick={props.logout}>out</button> </div>
                : <NavLink to={'/login'}>in</NavLink> }
        </div>
    </header>
}

export default Header;