import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unFollowActionCreator } from '../../../redux/usersReducer';
import Users from './Users';


let stateDataFriends = (state) => {
  return {
    users: state.usersPage.users
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
    }
}
}


let UsersContainer = connect(stateDataFriends, dispatchDataFriends)(Users)


export default UsersContainer
