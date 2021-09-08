import React from 'react';
import ProfileUser from './profileComponent/UserProfile';
import './styleCont.css';
import PostOne from './UserPost/PostOne.jsx';


const Profile = (props) => {
    let postMapContOne = props.state.postMessage.map(el => <PostOne  hisPost={el.post} id={el.id} likes={el.like} />)
    return (
        <div className="conta" >
            <div className="boxAvatar">
            <ProfileUser dispatch={props.dispatch}  updateText={props.state.updateTextPost} />
            </div>
            <div className="boxPost">
            {postMapContOne}
            </div>
        </div>
    )

}
export default Profile