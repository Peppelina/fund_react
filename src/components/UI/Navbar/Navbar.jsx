import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <MyButton onClick={logout}
            style={{backgroundColor: 'pink'}}
            >
                Выйти
            </MyButton>
            <div className={'navbar_links'}>
                <NavLink
                    style={{marginRight: 10}}
                    to='/about'> О сайте </NavLink>
                <NavLink to='/posts'> Посты </NavLink>
            </div>
        </div>
    );
};

export default Navbar;