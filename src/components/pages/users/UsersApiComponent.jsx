// import * as axios from 'axios';
// import React from 'react';
// import './users.css'
// import Users from './Users';

// class UsersApiComponent extends React.Component {

//   componentDidMount() {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//     .then(response => {
//       this.props.setUsers(response.data.items)
//       this.props.setTotalUsersCount(response.data.totalCount)
//     })
//   }

//   onPageChange = (pageNumber) => {
//     this.props.setCurrentPage(pageNumber)
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//     .then(response => {
//       this.props.setUsers(response.data.items)
//     })
//   }

//   render() {
//     return <Users 
//     totalUsersCount={this.props.totalUsersCount} 
//     pageSize={this.props.pageSize} 
//     currentPage={this.props.currentPage}
//     onPageChange={this.onPageChange}
//     users={this.props.users}
//     unFollow={this.props.unFollow}
//     follow={this.props.follow}
//      />
//   }
// }

// export default UsersApiComponent
