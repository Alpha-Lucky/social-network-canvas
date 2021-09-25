
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { addPost, getStatusThunk, updateStatusThunk } from '../../../../redux/profileReducer';
import ProfileUser from './ProfileUser';


class ProfileUserContainer extends React.Component {
    /* 19705 */
    componentDidMount() {
        let userId = this.props.match.params.userId; 
        if (!userId) {userId = this.props.authUserId}
        this.props.getStatusThunk(userId)
        this.props.updateStatusThunk(userId)
    }
    
    render() {
        return <ProfileUser {...this.props} />
    }
}

let stateDataProfileUser = (state) => {
    return {
        updateText: state.profilePage.updateTextPost,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}


export default compose (connect(stateDataProfileUser, {addPost, updateStatusThunk, getStatusThunk}), withRouter) (ProfileUserContainer)
