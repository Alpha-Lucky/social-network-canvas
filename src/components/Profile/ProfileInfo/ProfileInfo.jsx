import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit =  (formData) => {
        saveProfile(formData).then(
        ()=> {
            setEditMode(false)
        })
    }

    return (
        <div className={s.container__profile__thisuser + " " + "border__topAndBot"}>
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
             {editMode 
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> 
            :   <div className={s.descriptionBlock}>
                <ProfileDescription profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}} />
            </div>}
        </div>
    )
}

const ProfileDescription = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
           { isOwner && <button className="submit" onClick={goToEditMode} >edit</button>}
            <div>
                <div>
                    <span className={s.descriptionBlock__spanInfo}>
                        <b>About me:</b> 
                        <span>{profile.aboutMe || <b>&#8943;</b> }
                        </span>
                        </span>
                </div>
                <div>
                    <span className={s.descriptionBlock__spanInfo}>
                        <b>Looking for a job:</b> 
                        <span>{profile.lookingForAJob ? "yes" : "no"}</span>
                    </span>
                </div>
                {profile.lookingForAJob &&
                    <div>
                        <span className={s.descriptionBlock__spanInfo}>
                        <b>My professionak skills:</b> 
                        <span>{profile.lookingForAJobDescription}</span>
                        </span>
                    </div>
                }
                <div>
                    <span className={s.descriptionBlock__spanInfo}><b>Contacts</b> <hr/> {Object.keys(profile.contacts).map(key => {
                        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })} </span>
                </div>
            </div>
        </div>
    )
}


const Contacts = ({ contactTitle, contactValue }) => {
    return <div>
        <span>
            <b>{contactTitle}:</b>
             <span>
                 <a className="linkContent" href={contactValue}>{contactValue}</a>
            </span>
        </span>
        </div>
}

export default ProfileInfo;