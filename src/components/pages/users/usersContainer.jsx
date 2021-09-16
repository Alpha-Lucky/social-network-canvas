import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setCurrentActionCreator, setTotalUsersActionCreator, setUsersActionCreator, unFollowActionCreator } from '../../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';

class UsersComponent extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return <Users 
    totalUsersCount={this.props.totalUsersCount} 
    pageSize={this.props.pageSize} 
    currentPage={this.props.currentPage}
    onPageChange={this.onPageChange}
    users={this.props.users}
    unFollow={this.props.unFollow}
    follow={this.props.follow}
     />
  }
}

let stateDataFriends = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let dispatchDataFriends = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId))
    },
      unFollow: (userId) => {
    dispatch(unFollowActionCreator(userId))
  },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentActionCreator(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersActionCreator(totalCount))
    } 
}
}


let UsersContainer = connect(stateDataFriends, dispatchDataFriends)(UsersComponent)


export default UsersContainer
