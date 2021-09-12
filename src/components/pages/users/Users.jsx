import * as axios from 'axios';
import ava from '../../img/avaDefolt.jpg'
import React from 'react';
import './users.css'

class Users extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return <div className="friendsContainer">
      {
        this.props.users.map(u => <div className="friendsContainer__eUser" kay={u.id}>
          <div className="eUser__ava">
            <img src={u.photos.small != null ? u.photos.small : ava} alt={u.id} />
            {u.followed
              ? <button onClick={() => { this.props.unFollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { this.props.follow(u.id) }}>follow</button>
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
    </div>
  }
}

export default Users
