import React from 'react';
import cls from './Posts.module.css'



const Post = (props) => {
    return (
        <div className={cls.imgs}>
            <img src={props.imgs} alt="ava"/>
            {props.text}
            <button>Лайкнуть ({props.likeCounts})</button>
        </div>
    );
};

export default Post;