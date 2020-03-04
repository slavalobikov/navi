import React from 'react';
import cls from './PanelPost.module.css';



const PanelPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        /*alert(text);*/
    };

    let onChange = () => {
       let text = newPostElement.current.value;
       props.updateNewPostText(text);
    };

    return (
        <div className={cls.panel}>
         <textarea ref={newPostElement} value={props.newPostText} onChange={onChange} />

         <button onClick={addPost} >Опубликовать пост</button>
        </div>

    );
};

export default PanelPost