
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { addPost, getStatusThunk, updatePost, updateStatusThunk } from '../../../../redux/profileReducer';
import ProfileUser from './ProfileUser';


class ProfileUserContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId; 
        if (!userId) {userId = 19705}
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
        status: state.profilePage.status
    }
}


export default compose (connect(stateDataProfileUser, {addPost, updatePost, updateStatusThunk, getStatusThunk}), withRouter) (ProfileUserContainer)
