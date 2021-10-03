import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.container__profile__thisuser}>
            <div className={s.profile__ava_and_name_and_status}>
                <div className={s.mainPhoto}>
                    {isOwner 
                    ? <label className={s.label__down} for="test">
                            <div className={s.input__down}>
                                <img src={profile.photos.large} />
                            </div>
                                <input type={"file"} id="test" onChange={onMainPhotoSelected} />
                        </label> 
                    : <img src={profile.photos.large || userPhoto} alt="" /> }
                </div>

                <div className={s.name__status}>
                    <span>{profile.fullName} </span>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>

            </div>

            <div className={s.descriptionBlock}>
                <ProfileDescription profile={profile} />
            </div>
        </div>
    )
}

const ProfileDescription = ({ profile }) => {
    return (
        <div>

            <div>
                <div>
                    <span className={s.descriptionBlock__spanInfo}>About me: {profile.abooutMe || <b>&#8943;</b> } </span>
                </div>
                <div>
                    <span className={s.descriptionBlock__spanInfo}>Looking for a job: {profile.lookingForAJop ? "yes" : "no"} </span>
                </div>
                {profile.lookingForAJop &&
                    <div>
                        <span className={s.descriptionBlock__spanInfo}>My professionak skills: {profile.lookingForAJop} </span>
                    </div>
                }
                <div>
                    <span className={s.descriptionBlock__spanInfo}> Contacts: {Object.keys(profile.contacts).map(key => {
                        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })} </span>
                </div>
            </div>
        </div>
    )
}

const Contacts = ({ contactTitle, contactValue }) => {
    return <div><span>{contactTitle}: {contactValue}</span></div>
}

export default ProfileInfo;