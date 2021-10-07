import React from "react";
import s from './NotFound.module.css'
import imgNotFound from '../../../assets/images/404.png'

let NotFound = () => {
    return(
        <div className={s.container_notFound}>
           <div>
               <img src={imgNotFound} alt="404 Not Found" />
            </div>
            <div className={s.notFound}>
                <span>
                404 NOT FOUND
                </span>
            </div>
        </div>
    )
}

export default NotFound