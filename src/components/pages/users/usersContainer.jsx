import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsersThunk, setCurrentPage, toogleFollowingProgres, unfollow } from '../../../redux/usersReducer';
import Users from './Users';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgres, getIsFethining, getPagePageSize, getTotalUsersCount, getUsers } from '../../../redux/usersSelecrtors';
import Preloader from '../../common/Preloader/Preloader';
import Paginition from '../../common/Paginition/Paginition';



class UsersComponent extends React.Component {

  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (pageNumber) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize)
  }

  render() {
    return <>
    <Paginition
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
                       {...this.props} />
            {this.props.isFethining ? <Preloader/> : 
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
    users: getUsers(state),
    pageSize: getPagePageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFethining: getIsFethining(state),
    followingInProgres: getFollowingInProgres(state)
  }
}


export default compose(
  connect(stateDataFriends, { follow, unfollow, setCurrentPage, toogleFollowingProgres, getUsersThunk })) (UsersComponent)
