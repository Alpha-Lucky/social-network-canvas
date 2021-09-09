import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../../redux/profileReducer';
import StoreContext from '../../../../storeContext';
import ProfileUser from './UserProfile';

const ProfileUserContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage.updateTextPost
                    let clickSubmitProfileContainer = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let updateTextContainer = (text) => {
                        let action = updatePostActionCreator(text)
                        store.dispatch(action)
                    }
                    return (
                        <ProfileUser 
                        updateTextContainer={updateTextContainer} 
                        clickSubmitProfileContainer={clickSubmitProfileContainer} 
                        updateText={state} 
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default ProfileUserContainer