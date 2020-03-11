import React from 'react';
import cls from './Panel.module.css';
import {addMessageCreator, updateNewMessageTextCreator} from "../../../redux/store";
/*import {addMessage} from "../../../redux/state";*/


const Panel = (props) => {
let newMessageElement = React.createRef();
let addMessage = () => {
    let text = newMessageElement.current.value;
    props.dispatch(addMessageCreator());
    props.dispatch(updateNewMessageTextCreator(text));
    props.dispatch(updateNewMessageTextCreator(''));
    /*    props.addMessage(text);
    props.updateNewMessageText('');
    newMessageElement.current.value = '';*/
    /*   props.dispatch ({type: 'ADD-MESSAGE'});
    props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newText: text});
  props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newText: '' });*/
};

let onMessageChange = () => {
      let text = newMessageElement.current.value;
      props.dispatch(updateNewMessageTextCreator(text))
    /*props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT' , newText: text })*/
     /*console.log(text);
    props.updateNewMessageText(text);*/

};
    return (
        <div className={cls.panel}>
            <textarea ref={newMessageElement} value={props.newMessageText} onChange={onMessageChange} />
            <button onClick={ addMessage }>Отправить</button>

        </div>

    );
};

export default Panel