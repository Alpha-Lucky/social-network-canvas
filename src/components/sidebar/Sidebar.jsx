import { Link } from 'react-router-dom'
import React from 'react';
import './sidebar.css'
import avaDefolt from '../img/avaDefolt.jpg'

let Sidebar = (props) => {
  return(
     <div className="sidebarComponent">
            {props.state.SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cNameSide} >
                  <Link to={item.path} className={item.cNameSideLinks} >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
        
        <Link to='/Friends' >
          <div className="frends">
        {props.state.users.map((item) => {
              return (
                <div key={item.id} className="itemSide">
                  <img alt={item.id} src={item.photos.small != null ? item.photos.small :  avaDefolt } />
                </div>
              );
            })}
            </div>
        </Link>
     </div>
    )
}
export default Sidebar