import React from 'react';
import './users.css'

let Users = (props) => {


  return <div className="friendsContainer">
    {
      props.users.map(u => <div className="friendsContainer__eUser" kay={u.id}>
        <div className="eUser__ava">
          <img src={u.urlImg} alt={u.name} />
          {u.followed 
           ? <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
           : <button onClick={() => { props.follow(u.id) }}>follow</button>
           }
        </div>
        <div className="eUser__description">
          <div className="description__name">
            <span className="description__name">{u.name}</span>
          </div>

          <div className="description__status">
            <span className="status__title">{u.status}</span>
          </div>

          <div className="description__location">
            <span>{u.location.city}</span>
          </div>
        </div>
      </div>)
    }
  </div>

}
export default Users


{/*         {props.users.map((item, index) => {
              return (
                <div key={index} className={item.classesFriends}>
                  <img alt={item.id} src={item.urlImg} />
                  <span>{item.name}</span>
                </div>
              );
            })} */}