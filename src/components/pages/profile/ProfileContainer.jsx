import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { profileThunk } from '../../../redux/profileReducer';
import Profile from './Profile';



class ProfileContainer extends React.Component {



  componentDidMount() {
    this.props.profileThunk(this.props.match.params.userId)
  }

  render() {
    return (
      <Profile {...this.props} state={this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return state.profilePage
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { /* setUserProfile */ profileThunk })(WithUrlDataContainerComponent)
