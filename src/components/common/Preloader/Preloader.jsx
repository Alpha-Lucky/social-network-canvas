import React from "react";
import preloader from '../../img/preloader.gif'
import './preloader.css'

let Preloader = (props) =>  {
    return(
        <div className="preloader">
        <img src={preloader} alt="loading..." />
        </div>
    )
}

export default Preloader