import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';

const ProfileInfo = (props) => { 

    if(!props.profile) {return <Preloader />}
    return (
        <div>
        <img alt="" src="https://thumb-p2.xhcdn.com/a/b8uwfRlvc9csVIslhweiSQ/000/142/317/692_1000.jpg" />
        <img alt="" src={props.profile.photos.large} />
        <h1> {props.profile.aboutMe} </h1><br/>
        </div>
    )
}

export default ProfileInfo