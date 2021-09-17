import React from 'react';
import ProfileInfo from './ProfileInfo';

const ProfileUser = (props) => { 
    let clickSubmitProfile = () => {
    props.clickSubmitProfileContainer()
    }

let updateText = (e) => {
    let text = e.target.value
    props.updateTextContainer(text)
    }

    return (
        <div className="glavCont" >
            <ProfileInfo profile={props.profile}/>
            <div>
                <div className="boxNewPost">
                   <textarea className="textariaProfile" placeholder="new post"  value={props.updateText} onChange={updateText} /><br/>
            <input className="submitProfile" type="submit" onClick={clickSubmitProfile} value="ok" /><br/>
            </div>
            </div>
        </div>
    )
}

export default ProfileUser