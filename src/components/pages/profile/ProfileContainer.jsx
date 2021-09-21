import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { profileThunk } from '../../../redux/profileReducer';
import Profile from './Profile';



class ProfileContainer extends React.Component {



  componentDidMount() {
    this.props.profileThunk(this.props.match.params.userId)
  }

  render() {

    return (
      <Profile postMessage={this.props.profilePage.postMessage} {...this.props} />
    )
  }
}




let mapStateToProps = (state) => ({
  profilePage: state.profilePage
})



export default compose(
  connect(mapStateToProps, {profileThunk }),
  withRouter,
  withAuthRedirect) 
  (ProfileContainer)
