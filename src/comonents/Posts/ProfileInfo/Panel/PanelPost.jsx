import React from 'react';
import cls from './PanelPost.module.css';



const PanelPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type:'ADD-POST'});
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text} );
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: ''} );
     /*   // props.addPost(text);
        // props.updateNewPostText('');
        // newPostElement.current.value = '';*/
        /*alert(text);*/
    };

    let onChange = () => {
       let text = newPostElement.current.value;
        props.dispatch({ type:'UPDATE-NEW-POST-TEXT', newText:text })
    /*   props.updateNewPostText(text);*/
    };

    return (
        <div className={cls.panel}>
         <textarea ref={newPostElement} value={props.newPostText} onChange={onChange} />

         <button onClick={addPost} >Опубликовать пост</button>
        </div>

    );
};

export default PanelPost