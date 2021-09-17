
import { connect } from 'react-redux';
import { addPost, updatePost } from '../../../../redux/profileReducer';
import ProfileUser from './UserProfile';

let stateDataProfileUser = (state) => {
    return {
        updateText: state.profilePage.updateTextPost,
        profile: state.profilePage.profile
    }
}

let dispatchDataProfileUser = (dispatch) => {
    return {
            clickSubmitProfileContainer: () => {
                dispatch(addPost())
            },
        updateTextContainer: (text) => {
                
                dispatch(updatePost(text))
        }
    }
}

let ProfileUserContainer = connect(stateDataProfileUser, dispatchDataProfileUser)(ProfileUser)



export default ProfileUserContainer
