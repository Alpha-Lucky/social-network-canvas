import React from 'react';

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
            <div>
            <img alt="" src="https://thumb-p2.xhcdn.com/a/b8uwfRlvc9csVIslhweiSQ/000/142/317/692_1000.jpg" />
            <h1> Title: bla bla bla</h1><br/>
            </div>
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