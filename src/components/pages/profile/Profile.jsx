import React from 'react';
import ProfileUserContainer from './profileComponent/UserProfileContainer';
import './styleCont.css';
import PostOne from './UserPost/PostOne.jsx';


const Profile = (props) => {
    return (
        <div className="conta" >
            <div className="boxAvatar">
            <ProfileUserContainer />
            </div>
            <div className="boxPost">
            <PostOne postMessage={props.postMessage} />
             </div>
        </div>
    )

}
export default Profile