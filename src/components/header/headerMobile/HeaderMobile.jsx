import React from 'react';
import { Link } from 'react-router-dom'
import './headerMobile.css'

let HeaderMobile = () => {
    return(
     <div className="HeaderMobileComponent">
        <Link className="linkHeader" to="/">Profile</Link>
        <Link className="linkHeader" to="/about">Messages</Link>
        <Link className="linkHeader" to="/users">News</Link>
        <Link className="linkHeader" to="/users">Music</Link>
        <Link className="linkHeader" to="/users">Setting</Link>
        <Link className="linkHeader title" to="/users">Frends</Link>
        
        <div className="frendsHeader">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </div>
     </div>
    )
}
export default HeaderMobile