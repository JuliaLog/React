import React from 'react';
import s from "./Post.module.css";


const Post = (props) => {

  return (
        <div className={s.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbIYYpnVdikmoTWYfDng_JVDNSqsukyyrE7dO3NrnTleD7ps9cgKN_Ch_HYmxYAluWIo&usqp=CAU" alt="avatar" />
          {props.message}  
          <div>
          <span>Like</span> {props.likesCount}
          </div>
        </div>
  )
}

export default Post;