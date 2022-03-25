import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
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