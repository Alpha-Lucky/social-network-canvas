import * as axios from 'axios';
import ava from '../../img/avaDefolt.jpg'
import React from 'react';
import './users.css'

class Users extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize")
    .then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get("https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize")
    .then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i=1; i <=  pagesCount; i++) {pages.push(i)} 

    return <div className="friendsContainer">
      <div className="colorText" >
        {pages.map( p => {
        return  <span className={this.props.currentPage === p && "activ__span"}  key={p}  onClick={(e) => { this.onPageChange(p)} } >{p}</span>
        }
        )}
        
      </div>
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
