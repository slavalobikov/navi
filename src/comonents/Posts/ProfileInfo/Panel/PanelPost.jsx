import React from 'react';
import cls from './PanelPost.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/store";


const PanelPost = (props) => {

    let addPost = () => {
        props.addPost();
    };

    let onChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };


    return (
        <div className={cls.panel}>
            <textarea value={props.newPostText} onChange={onChange}/>

            <button onClick={addPost}>Опубликовать пост</button>
        </div>

    );
};

export default PanelPost