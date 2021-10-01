import React from 'react';
import Preloader from '../../../../common/Preloader/Preloader';
import ava from '../../../../img/avaDefolt.jpg'
import ProfileStatusHooks from './ProfileStatusHooks';
import styles from './profileInfo.module.css'

const ProfileInfo = (props) => {

    if (!props.profile) { return <Preloader /> }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhotoThunk(e.target.files[0])
        }
    }

    return (
        <div className={styles.box__profile_info} >
            <div className={styles.box__profile_ava}>
                <img alt="" src={props.profile.photos.large || ava} />
                {props.isOwner && <input className={styles.box__profile_dow_img} type="file" onChange={mainPhotoSelected} />}
            </div>
            <div className={styles.box__profile_aboutMe}>
            
            <div className={styles.box__profile_aboutMe__status}>

            <div><h1>{props.profile.aboutMe}</h1></div>
            <ProfileStatusHooks status={props.status} updateStatusThunk={props.updateStatusThunk} />
            </div>
            </div>
        </div>
    )
}

export default ProfileInfo