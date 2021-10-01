
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { addPost, getStatusThunk, updateStatusThunk, savePhotoThunk } from '../../../../redux/profileReducer';
import ProfileUser from './ProfileUser';


class ProfileUserContainer extends PureComponent {

    refreshProfile() {
        let userId = this.props.match.params.userId; 
        if (!userId) {
            userId = this.props.authUserId
            if (userId){
                debugger
                this.props.history.push("/Login")
            } 
        }
        this.props.getStatusThunk(userId)
        this.props.updateStatusThunk(userId)
    }
    
/*     shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state
    } */
    
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfile()
        
    }
    
    render() {
        return <ProfileUser 
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        authUserId={this.props.authUserId}
        isAuth={this.props.isAuth}
        isOwner={!this.props.match.params.userId}
        
        />
    }
}

let stateDataProfileUser = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}


export default compose (connect(stateDataProfileUser, {addPost, updateStatusThunk, getStatusThunk, savePhotoThunk}), withRouter) (ProfileUserContainer)
