import React from 'react';

import css from './MainLayout.module.css';
import {Outlet, NavLink} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <header className={css.header}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </header>
            <div><Outlet/></div>
        </div>
    );
};

export default MainLayout;
