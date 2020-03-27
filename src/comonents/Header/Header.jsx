import React from 'react';
import cls from './Header.module.css'
import {NavLink} from "react-router-dom";
import User from './../../assets/imgs/User-icon.png'



const Header = (props) => {

    let ava = props.ava;
    if (!ava) {
        ava = User;
    }

    return (
        <header className={cls.item} >
            <img src="https://upload.wikimedia.org/wikipedia/ru/2/2c/NAVI_logo.png" alt="logo"/>
            <div className={cls.login}>

                {props.isAuth ? <div>  <img src={ava} /> {props.login} </div> :
            <NavLink to='/login' > Login</NavLink>}
            </div>
        </header >
    );
};

export default Header;