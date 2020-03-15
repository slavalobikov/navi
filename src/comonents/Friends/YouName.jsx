import React from 'react';
/*import cls from './../Dialogs.module.css';*/
import {NavLink} from "react-router-dom";



const YouName = (props) => {


    return <div>

       Твое имя {props.name } , you id {props.id}
    </div>
};


export default YouName;