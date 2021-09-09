import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../../redux/messagesReducer';
import StoreContext from '../../../storeContext';
import Messages from './message';


const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().messagesPage
                    let changeTextContainer = (text) => {
                        let action = updateMessageActionCreator(text)
                        store.dispatch(action)
                    }
                    let clickSubValueContainer = () => {
                        store.dispatch(addMessageActionCreator())
                        
                    }
                    return <Messages
                        dispatch={store.dispatch}
                        changeTextContainer={changeTextContainer}
                        clickSubValueContainer={clickSubValueContainer}
                        state={state} />
                }
            }
        </StoreContext.Consumer>

    )
}


export default MessagesContainer
