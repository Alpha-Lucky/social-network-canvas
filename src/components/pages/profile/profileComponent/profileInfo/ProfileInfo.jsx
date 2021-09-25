import React from 'react';
import Preloader from '../../../../common/Preloader/Preloader';
import ava from '../../../../img/avaDefolt.jpg'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => { 

    if(!props.profile) {return <Preloader />}
    return (
        <div>
        <img alt="" src={props.profile.photos.large != null ? props.profile.photos.large : ava} />
        <h1> {props.profile.aboutMe} </h1><br/>
        <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk} />
        </div>
    )
}

export default ProfileInfo