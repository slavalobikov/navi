import React from 'react';
import cls from './Panel.module.css';
import {addMessageCreator, updateNewMessageTextCreator} from "../../../redux/store";
/*import {addMessage} from "../../../redux/state";*/


const Panel = (props) => {
/*let newMessageElement = React.createRef();*/
let addMessage = (e) => {
    /*let text = newMessageElement.current.value;*/
    let text = e.target.value;
/*    props.dispatch(addMessageCreator());
    props.dispatch(updateNewMessageTextCreator(text));
    props.dispatch(updateNewMessageTextCreator(''));*/
    props.addMessage(text);
    props.updateNewMessageText('');
    /*   props.dispatch ({type: 'ADD-MESSAGE'});
    props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newText: text});
  props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newText: '' });*/
};
let onMessageChange = (e) => {
      /*let text = newMessageElement.current.value;*/
    let text = e.target.value;
    props.updateNewMessageText(text);
     /* props.dispatch(updateNewMessageTextCreator(text))*/
    /*props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT' , newText: text })*/
     /*console.log(text);
    props.updateNewMessageText(text);*/

};
debugger
    return (
        <div className={cls.panel}>
            <textarea  value={props.newMessageText} onChange={onMessageChange} />
            <button onClick={ addMessage }>Отправить</button>


        </div>

    );
};

export default Panel
