import { connect } from 'react-redux';
import Profile from './Profile';


let stateDataProfile = (state) => {
    return {
        state: state.profilePage
    }
}


let ProfileContainer = connect(stateDataProfile)(Profile)

export default ProfileContainer