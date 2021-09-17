import React from 'react';
import '../styleCont.css';


const MapToPost = (props) => {
    return (
            <div className="boxMini">
            <img alt="" src="https://thumb-p2.xhcdn.com/a/b8uwfRlvc9csVIslhweiSQ/000/142/317/692_1000.jpg"></img>
            <h1>{props.hisPost}</h1>
             <div><span>likes:{props.likes}</span></div>
            </div>
            )

}
export default MapToPost