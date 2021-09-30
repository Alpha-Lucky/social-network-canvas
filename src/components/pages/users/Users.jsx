import React from 'react';
import './users.css'
import UserOne from './UserOne';



let Users = (props) => {

  return (
    <div className="friendsContainer">
      {
        props.users.map(u => <UserOne
          followingInProgres={props.followingInProgres}
          u={u} key={u.id}
          unfollow={props.unfollow}
          follow={props.follow}
        />)
      }
    </div>

  )
}

export default Users


