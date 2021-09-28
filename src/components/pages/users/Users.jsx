import React from 'react';
import './users.css'
import Paginition from '../../common/Paginition/Paginition';
import UserOne from './UserOne';



let Users = (props) => {

  return (
    <div className="friendsContainer">
      <Paginition
        currentPage={props.currentPage}
        onPageChange={props.onPageChange}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        {...props} />

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


