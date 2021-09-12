import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setCurrentActionCreator, setUsersActionCreator, unFollowActionCreator } from '../../../redux/usersReducer';
import Users from './Users';


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
    } 
}
}


let UsersContainer = connect(stateDataFriends, dispatchDataFriends)(Users)


export default UsersContainer
