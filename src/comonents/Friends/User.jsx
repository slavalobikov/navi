import React from 'react';
import cls from './User.module.css'



const User = (props) => {


    return <div className={cls.user} >
        <div>
            <div><img className={cls.avaImg} src={props.imgs} alt={props.name}/></div>
             {props.name}
            <div>  <button> dddddddddddddd </button> </div>
        </div>

        Привет {props.name}
    </div>
};


export default User;