import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';
import stylesForForm from './../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({profile, handleSubmit, error }) => {

    return (
        <form onSubmit={handleSubmit}>
            <button className="submit">save</button>
            {error && <div className={stylesForForm.formSummaryError}>{error}</div>}
            <div>
                <div>
                    <span className={s.descriptionBlock__spanInfo}>Full name: {createField("Full name", "fullName", [], Input)} </span>
                </div>
                <div>
                    <span className={s.descriptionBlock__spanInfo}>About me: {createField("About me", "aboutMe", [], Input)} </span>
                </div>
                <div>
                    <span className={s.descriptionBlock__spanInfo}>Looking for a job: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})} </span>
                </div>
                    <div>
                        <span className={s.descriptionBlock__spanInfo}>My professional skills: {createField("My professional skills", "lookingForAJobDescription", [], Textarea)} </span>
                    </div>
                <div>
                    <span className={s.descriptionBlock__spanInfo}> Contacts <hr/> {Object.keys(profile.contacts).map(key => {
                        return <span className={s.descriptionBlock__spanInfo} key={key} contactTitle={key} contactValue={profile.contacts[key]}>
                            {key} : {createField(key, "contacts." + key, [], Input )}
                            </span>
                    })} </span>
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;

