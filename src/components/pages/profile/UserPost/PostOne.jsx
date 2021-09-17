import React from 'react';
import '../styleCont.css';
import MapToPost from './MapToPost';


const PostOne = (props) => {
    let postMapContOne = props.postMessage.map(el => <MapToPost  hisPost={el.post} key={el.id} id={el.id} likes={el.like} />)
    return (
        <div>
        {postMapContOne}
        </div>
        )

}
export default PostOne