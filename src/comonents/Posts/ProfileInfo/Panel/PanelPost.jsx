import React from 'react';
import cls from './PanelPost.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/store";


const PanelPost = (props) => {

    /*let newPostElement = React.createRef();*/




/*    let onChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        /!*   props.updateNewPostText(text);*!/
    };*/
    let onChange = (e) => {
        let text = e.target.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});

        /*   props.updateNewPostText(text);*/
    };
    let addPost = () => {
        /*let text = newPostElement.current.value;*/
        let text = props.newPostText;
        props.dispatch(addPostActionCreator());
        props.dispatch(updateNewPostTextActionCreator(text));
        props.dispatch(updateNewPostTextActionCreator(''));
        /* props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text} );
         props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: ''} );*/

        /*   // props.addPost(text);
           // props.updateNewPostText('');
           // newPostElement.current.value = '';*/
        /*alert(text);*/
    };

    return (
        <div className={cls.panel}>
            <textarea /*ref={newPostElement}*/ value={props.newPostText} onChange={onChange}/>

            <button onClick={addPost}>Опубликовать пост</button>
        </div>

    );
};

export default PanelPost