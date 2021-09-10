
import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../../redux/messagesReducer';
import Messages from './message';

let stateData = (state) => {

    return {
        state: state.messagesPage
    }
}

let dispatchData = (dispatch) => {

    return {
        changeTextContainer: (text) => {
            let action = updateMessageActionCreator(text)
            dispatch(action)
        },
        clickSubValueContainer: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

let MessagesContainer = connect(stateData, dispatchData)(Messages)

export default MessagesContainer



/* const MessagesContainer = (props) => {
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
} */