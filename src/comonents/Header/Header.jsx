import React from 'react';
import cls from './Header.module.css'

let Post = React.createRef();


const Header = () => {
    return (
        <header className={cls.item} >
            <img src="https://upload.wikimedia.org/wikipedia/ru/2/2c/NAVI_logo.png" alt="logo"/>

        </header >
    );
}

export default Header;