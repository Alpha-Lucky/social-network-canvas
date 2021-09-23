import React from 'react';
import { Field, reduxForm } from 'redux-form';
import UserNickName from './Contact/contact';
import PropsMessage from './MessageInfo/propsMessage';
import './styleMass.css'


const Messages = (props) => {

    let dialogMap = props.state.dialogData.map(el => <UserNickName key={el.id} name={el.name} id={el.id} />);
    let messageMap = props.state.messageData.map(el => <PropsMessage key={el.id} messageThisUser={el.message} id={el.id} />);
    
    let addNewMessage = (values) => {
        return props.clickSubValueContainer(values.newMessageBody)
        }


    return (
        <div className="boxContact"> 
            <div className="boxInfo">
                {dialogMap}
            </div>
            <div className="boxInfoCont">
                {messageMap}
               <div className="boxNewMessage"> 
               <ReduxAddMessagesForm onSubmit={addNewMessage} />
               </div>
            </div>
        </div>
    )
};

const AddMessagesForm = (props) => {
    return  <form onSubmit={props.handleSubmit}>       
                <div>
                    <Field name="newMessageBody" component="textarea" className="textariaMessages" placeholder="new message" />
                </div>
                <div>
                    <button className="submitMassage"> Ok </button>
                    </div>
            </form> 
}

const ReduxAddMessagesForm = reduxForm({form: "textariaMessages"}) (AddMessagesForm)



export default Messages
