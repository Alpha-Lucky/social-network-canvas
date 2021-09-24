import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Textarea from '../../../common/FormControls/FormControls';
import {maxLengthCreating, required } from '../../../common/validation/validation';
import ProfileInfo from './profileInfo/ProfileInfo';

const maxLength30 = maxLengthCreating(30)

const updatePostForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostBody" placeholder="new Post" validate={[required, maxLength30]} />
            </div>
            <div>
                <button className="submit">ok</button>
            </div>
    </form>

} 

const UpdateReduxForm = reduxForm({form: "updatePost"}) (updatePostForm)


const ProfileUser = (props) => {

    let clickSubmitProfile = (values) => {
        return props.addPost(values.newPostBody)
    }

    return (
        <div className="glavCont" >
            <ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk} />
            <div>
                <div className="boxNewPost">

                <UpdateReduxForm onSubmit={clickSubmitProfile} />

                </div>
            </div>
        </div>
    )
}






export default ProfileUser