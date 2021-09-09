import { Link } from 'react-router-dom'
import React from 'react';
import './sidebar.css'


let Sidebar = (props) => {
    return(
     <div className="sidebarComponent">
            {props.SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cNameSide} >
                  <Link to={item.path} className={item.cNameSideLinks} >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
        
        <Link to='/Friends' className="frends" >
        {props.state.friends.map((item, index) => {
              return (
                <div key={index} className={item.classes}>
                  <img alt={item.id} src={item.urlImg} />
                </div>
              );
            })}
        </Link>
     </div>
    )
}
export default Sidebar