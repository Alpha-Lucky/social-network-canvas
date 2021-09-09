import React from 'react';
import StoreContext from '../../../storeContext';
import Profile from './Profile';



const ProfileContainer = (props) => {
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

}
export default ProfileContainer