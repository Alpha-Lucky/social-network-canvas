import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ProfileInfo from './profileInfo/ProfileInfo';


const updatePostForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
            <div><Field component="textarea" name="newPostBody" className="textariaProfile" /></div>
            <div><button className="submitProfile">ok</button></div>
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