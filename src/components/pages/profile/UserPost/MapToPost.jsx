import React from 'react';
import '../styleCont.css';


const MapToPost = (props) => {
    return (
            <div className="boxMini">
            <h1 className="boxMini__text">{props.hisPost}</h1>
             <div><span>likes:{props.likes}</span></div>
            </div>
            )

}
export default MapToPost