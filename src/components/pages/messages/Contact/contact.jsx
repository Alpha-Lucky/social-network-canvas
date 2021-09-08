import React from 'react';
import { NavLink } from 'react-router-dom';



const UserNickName = (props) => {
    return (
        <div className="propsName">
            <span><NavLink to={'/message/' + props.id}>{props.name}</NavLink></span>
        </div>
    )
}

export default UserNickName