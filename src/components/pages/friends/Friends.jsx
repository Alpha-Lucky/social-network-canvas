import React from 'react';
import './friends.css'

let Friends = (props) => {
    return(
        <div className="friendsContainer">
        {props.state.friends.map((item, index) => {
              return (
                <div key={index} className={item.classesFriends}>
                  <img alt={item.id} src={item.urlImg} />
                  <span>{item.name}</span>
                </div>
              );
            })}
        </div>
    )
}
export default Friends