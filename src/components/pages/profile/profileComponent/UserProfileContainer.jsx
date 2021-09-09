import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../../redux/profileReducer';
import ProfileUser from './UserProfile';

const ProfileUserContainer = (props) => {
   
    let clickSubmitProfileContainer = () => {
    props.dispatch(addPostActionCreator())
    }

    let updateTextContainer = (text) => {
        let action = updatePostActionCreator(text)
        props.dispatch(action)
    }


    return (
        <ProfileUser updateTextContainer={updateTextContainer} clickSubmitProfileContainer={clickSubmitProfileContainer} updateText={props.updateText}  />
    )
}

export default ProfileUserContainer