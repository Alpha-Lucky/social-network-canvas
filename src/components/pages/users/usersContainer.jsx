import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toogleFollowingProgres, toogleIsFething, unFollow } from '../../../redux/usersReducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { usersApi } from '../../../api/api';


class UsersComponent extends React.Component {

  componentDidMount() {
    this.props.toogleIsFething(true)
    usersApi.getUsers(this.props.currentPage ,this.props.pageSize).then(data => {
      this.props.toogleIsFething(false)
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
    })
  }

  onPageChange = (pageNumber) => {
    this.props.toogleIsFething(true)
    this.props.setCurrentPage(pageNumber)
    usersApi.updateUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toogleIsFething(false)
      this.props.setUsers(data.items)
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
    followingInProgres={this.props.followingInProgres}
    toogleFollowingProgres={this.props.toogleFollowingProgres}

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
    isFethining: state.usersPage.isFethining,
    followingInProgres: state.usersPage.followingInProgres
  }
}



let UsersContainer = connect(stateDataFriends, 
  {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFething, toogleFollowingProgres})
(UsersComponent)


export default UsersContainer
