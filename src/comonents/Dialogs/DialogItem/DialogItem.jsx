import React from 'react';
/*import cls from './../Dialogs.module.css';*/
import {NavLink} from "react-router-dom";
import cls from './DialogsItem.module.css';


const DialogItem = (props) => {


    return <div className={cls.dialog + ' ' + cls.active}>
       {/* <img className={cls.ava}  src={props.ava} alt="ava"/>*/}

        <NavLink className={cls.item} to={"/Dialogs/" + props.id}>  <img className={cls.ava}  src={props.ava} alt="ava"/> {props.user} </NavLink>
    </div>
};


export default DialogItem;