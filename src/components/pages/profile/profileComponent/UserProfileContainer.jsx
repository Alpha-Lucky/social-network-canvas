
import { connect } from 'react-redux';
import { addPostActionCreator, updatePostActionCreator } from '../../../../redux/profileReducer';
import ProfileUser from './UserProfile';

let stateDataProfileUser = (state) => {
    return {
        updateText: state.profilePage.updateTextPost
    }
}

let dispatchDataProfileUser = (dispatch) => {
    return {
            clickSubmitProfileContainer: () => {
                dispatch(addPostActionCreator())
            },
        updateTextContainer: (text) => {
                
                dispatch(updatePostActionCreator(text))
        }
    }
}

let ProfileUserContainer = connect(stateDataProfileUser, dispatchDataProfileUser)(ProfileUser)



export default ProfileUserContainer

/* const ProfileUserContdsadsaainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage.updateTextPost
                    let clickSubmitProfileContainer = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let updateTextContainer = (text) => {
                        let action = updatePostActionCreator(text)
                        store.dispatch(action)
                    }
                    return (
                        <ProfileUser 
                        updateTextContainer={updateTextContainer} 
                        clickSubmitProfileContainer={clickSubmitProfileContainer} 
                        updateText={state} 
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
} */
