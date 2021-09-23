
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../../redux/messagesReducer';
import Messages from './message';

let stateData = (state) => {

    return {
        state: state.messagesPage
    }
}

let dispatchData = (dispatch) => {

    return {
        clickSubValueContainer: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }
    }
}

export default compose(
    connect(stateData, dispatchData), withAuthRedirect)(Messages)   
    