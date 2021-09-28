import ava from '../../img/avaDefolt.jpg'
import React from 'react';
import './users.css'
import { NavLink } from 'react-router-dom';




let UserOne = (props) => {

  return (
    <div className="friendsContainer__eUser">

      <div className="eUser__ava">
        <NavLink to={'/profile/' + props.u.id}>
          <img src={props.u.photos.small != null ? props.u.photos.small : ava} alt={props.u.id} />
        </NavLink>
        {props.u.followed
          ? <button disabled={props.followingInProgres.some(id => id === props.u.id)}
            onClick={() => { props.unfollow(props.u.id) }}>unfollow</button>

          : <button disabled={props.followingInProgres.some(id => id === props.u.id)}
            onClick={() => { props.follow(props.u.id) }}>follow</button>
        }
      </div>
      <div className="eUser__description">
        <div className="description__name">
          <span className="description__name">{props.u.name}</span>
        </div>

        <div className="description__status">
          <span className="status__title">{props.u.status}</span>
        </div>

        <div className="description__location">
          <span>{/* props.u.location.city */}</span>
        </div>
      </div>
    </div>
  )
}

export default UserOne


