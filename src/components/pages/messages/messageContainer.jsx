
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
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

export default compose(
    connect(stateData, dispatchData), withAuthRedirect)(Messages)   
    