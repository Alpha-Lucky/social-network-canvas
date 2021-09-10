import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';


let stateDataProfile = (state) => {
    return {
        state: state.profilePage
    }
}


let ProfileContainer = connect(stateDataProfile)(Profile)

/* const ProfileContainerdsadsa = (props) => {
    return (
        <StoreContext.Consumer>
        {
            (store) => {
            let state = store.getState().profilePage
            return <Profile state={state} dispatch={store.dispatch} />
        }
        }
        </StoreContext.Consumer>
    )

} */
export default ProfileContainer