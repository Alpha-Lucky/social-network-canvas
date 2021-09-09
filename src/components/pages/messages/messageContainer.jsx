import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../../redux/messagesReducer';
import Messages from './message';



const MessagesContainer = (props) => {
     
    let changeTextContainer = (text) => {
        let action = updateMessageActionCreator(text) 
        props.dispatch(action)
    }
    let clickSubValueContainer = () => {
        props.dispatch(addMessageActionCreator())
    }

    return ( 
        <Messages 
        changeTextContainer={changeTextContainer} 
        clickSubValueContainer={clickSubValueContainer}
        state={props.state} />
    )
};


export default MessagesContainer
