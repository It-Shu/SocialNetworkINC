import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'


export const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item} >
            <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={'/dialog'} activeClassName={s.active}>Message</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/users'} activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/setting'} activeClassName={s.active}>Settings</NavLink>
        </div>
    </nav>
}
