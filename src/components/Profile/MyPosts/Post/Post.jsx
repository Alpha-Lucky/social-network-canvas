import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
        { props.message }
          <div>
        <span className={s.span__heart}>&#10084;</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;