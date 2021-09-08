import React from 'react';


const PropsMessage = (props) => {
    return (
        <div className="dialog">
            <img alt="" src="https://img2.freepng.ru/20180516/kgw/kisspng-circle-spiral-point-5afc6640e7a081.7898340415264906889488.jpg" />
            <span>{props.messageThisUser}</span>
        </div>
    )
}

export default PropsMessage