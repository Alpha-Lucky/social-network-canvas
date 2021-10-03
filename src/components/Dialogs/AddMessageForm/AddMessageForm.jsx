import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import styles from "./AddMessageForm.module.css"

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="margin__top30">
                <Field component={Input}
                       validate={[required, maxLength50]}
                       placeholder='Enter your message' name="newMessageBody" />
            </div>
            <div className={styles.button__form_messages}>
            <button className="submit__75px margin30">Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);

























