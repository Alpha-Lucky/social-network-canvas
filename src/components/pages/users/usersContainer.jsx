import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsersThunk, setCurrentPage, toogleFollowingProgres, unfollow } from '../../../redux/usersReducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { compose } from 'redux';



class UsersComponent extends React.Component {

  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (pageNumber) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize)
  }

  render() {
    return <>
      {this.props.isFethining ? <Preloader /> : 
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        followingInProgres={this.props.followingInProgres}
      /> }
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


export default compose(
  connect(stateDataFriends, { follow, unfollow, setCurrentPage, toogleFollowingProgres, getUsersThunk })) (UsersComponent)
