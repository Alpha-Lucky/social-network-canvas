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
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.mainPhoto}>
                    <img src={profile.photos.large || userPhoto} />
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                </div>
                <div className={s.status}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;