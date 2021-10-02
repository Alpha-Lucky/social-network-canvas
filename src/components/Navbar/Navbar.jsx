import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>
                    <AiIcons.AiFillHome />
                    <span>Profile</span>
                    </NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>
                    <FaIcons.FaEnvelopeOpenText />
                    <span>Messages</span>
                    </NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.activeLink}>
                    <IoIcons.IoMdPeople />
                    <span>Users</span>
                    </NavLink>
            </div>

            <div className={s.item}>
            <NavLink to="/News" activeClassName={s.activeLink}>
                <IoIcons.IoIosPaper />
                <span>News</span>
                </NavLink>
            </div>
            <div className={s.item}>
            <NavLink to="/Settings" activeClassName={s.activeLink}>
                <IoIcons.IoMdHelpCircle />
                <span>Settings</span>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;