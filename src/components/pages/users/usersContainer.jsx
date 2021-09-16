import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setCurrentActionCreator, setTotalUsersActionCreator, setUsersActionCreator, toogleIsFethingActionCreator, unFollowActionCreator } from '../../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';



class UsersComponent extends React.Component {

  componentDidMount() {
    this.props.toogleIsFething(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.toogleIsFething(false)
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChange = (pageNumber) => {
    this.props.toogleIsFething(true)
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.toogleIsFething(false)
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return <>
    {this.props.isFethining ? <Preloader /> : null} 
    <Users 
    totalUsersCount={this.props.totalUsersCount} 
    pageSize={this.props.pageSize} 
    currentPage={this.props.currentPage}
    onPageChange={this.onPageChange}
    users={this.props.users}
    unFollow={this.props.unFollow}
    follow={this.props.follow}

     />
     </>
  }
}

let stateDataFriends = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFethining: state.usersPage.isFethining
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
    },
    toogleIsFething: (isFethining) => {
      dispatch(toogleIsFethingActionCreator(isFethining))
    }
}
}


let UsersContainer = connect(stateDataFriends, dispatchDataFriends)(UsersComponent)


export default UsersContainer
