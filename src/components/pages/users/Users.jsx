import ava from '../../img/avaDefolt.jpg'
import React from 'react';
import './users.css'
import { NavLink } from 'react-router-dom';
import { usersApi } from '../../../api/api';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) { pages.push(i) }

  return (
  <div className="friendsContainer">
    <div className="colorText" >
      {pages.map(p => {
        return <span className={props.currentPage === p && "activ__span"} key={p} onClick={(e) => { props.onPageChange(p) }} >{p}</span>
      }
      )}

    </div>
    {
      props.users.map(u => <div className="friendsContainer__eUser" kay={u.id}>
        <div className="eUser__ava">
          <NavLink to={'/profile/' + u.id}>
          <img src={u.photos.small != null ? u.photos.small : ava} alt={u.id} />
          </NavLink>
          {u.followed
            ? <button disabled={props.followingInProgres.some(id => id === u.id)} onClick={() => { 
              props.toogleFollowingProgres(u.id, true)
              usersApi.unfollow(u.id).then(data => {
                if(data.resultCode === 0) {}
                props.unFollow(u.id)
                props.toogleFollowingProgres(u.id, false)
              })}}>unfollow</button>
            
              : <button disabled={props.followingInProgres.some(id => id === u.id)}  onClick={() => {
                props.toogleFollowingProgres(u.id, true)
                usersApi.follow(u.id).then(data => {
                if(data.resultCode === 0) {}
                props.follow(u.id)
                props.toogleFollowingProgres(u.id, false)
                })}}>follow</button>
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
            <span>{/* u.location.city */}</span>
          </div>
        </div>
      </div>)
    }
  </div>)
}

export default Users


