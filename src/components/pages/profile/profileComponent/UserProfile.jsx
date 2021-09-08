import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../../redux/profileReducer';

const ProfileUser= (props) => {
   
    let clickSubmitProfile = () => {
    props.dispatch(addPostActionCreator())
    }

    let updateText = (e) => {
        let text = e.target.value
        let action = updatePostActionCreator(text)
        props.dispatch(action)
    }


    return (
        <div className="glavCont" >
            <div>
            <img alt="" src="https://thumb-p2.xhcdn.com/a/b8uwfRlvc9csVIslhweiSQ/000/142/317/692_1000.jpg" />
            <h1> Title: bla bla bla</h1><br/>
            </div>
            <div>
            <legend>Новый пост</legend><br/>
            <textarea cols="25" rows="5" placeholder="new post"  value={props.updateText} onChange={updateText} /><br/>
            <input type="submit" onClick={clickSubmitProfile} /><br/>
            </div>
        </div>
    )
}

export default ProfileUser