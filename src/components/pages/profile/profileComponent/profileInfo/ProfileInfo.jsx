import React from 'react';
import Preloader from '../../../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => { 
    
    if(!props.profile) {return <Preloader />}
    return (
        <div>
        <img alt="" src={props.profile.photos.large} />
        <h1> {props.profile.aboutMe} </h1><br/>
        <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk} />
        </div>
    )
}

export default ProfileInfo