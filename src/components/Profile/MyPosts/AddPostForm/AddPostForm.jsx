import React from 'react';
import s from '../MyPosts.module.css';
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={"textarea"} name="postText"/>
                </div>
                <div>
                    <button className="submit__75px">Add post</button>
                </div>
            </form>
    )
}

export default reduxForm({form: 'profile-add-post'})(AddPostForm)
