import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../../redux/messagesReducer';
import UserNickName from './Contact/contact';
import PropsMessage from './MessageInfo/propsMessage';
import './styleMass.css'





const Messages = (props) => {
    let dialogMap = props.state.dialogData.map(el => <UserNickName name={el.name} id={el.id} />);
    let messageMap = props.state.messageData.map(el => <PropsMessage messageThisUser={el.message} id={el.id} />);
    
    let changeText = (e) => {
        let text = e.target.value;
        let action = updateMessageActionCreator(text) 
        props.dispatch(action)
    }
    let clickSubValue = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div className="boxContact" onClick={() => {
            console.log(props)
          }}> 
            <div className="boxInfo">
                {dialogMap}
            </div>
            <div className="boxInfoCont">
                {messageMap}
               <div className="boxNewMessage"> 
               <textarea className="textariaMessages" placeholder="new message" value={props.state.updateMessage} rows="1" onChange={changeText} />
               <input className="submitMassage" type="submit" value="ok" onClick={clickSubValue}  />
               </div>
            </div>
        </div>
    )
};


export default Messages
