import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <span>
          {props.message}
        </span>
        <hr />
      </div>
      <div>
        <span className={s.span__heart}>&#10084;</span>
        {props.likesCount}
      </div>
    </div>
  )
}

export default Post;