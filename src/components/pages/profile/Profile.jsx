import React from 'react';
import ProfileUserContainer from './profileComponent/UserProfileContainer';
import './styleCont.css';
import PostOne from './UserPost/PostOne.jsx';


const Profile = (props) => {
    
    let postMapContOne = props.state.postMessage.map(el => <PostOne  hisPost={el.post} key={el.id} id={el.id} likes={el.like} />)
    return (
        <div className="conta" >
            <div className="boxAvatar">
            <ProfileUserContainer /* dispatch={props.dispatch}  updateText={props.state.updateTextPost} */ />
            </div>
            <div className="boxPost">
            {postMapContOne}
            </div>
        </div>
    )

}
export default Profile