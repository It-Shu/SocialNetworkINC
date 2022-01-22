import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src={'https://logocs.ucoz.ru/design/trans_spay_got.jpg'}/>
        <div className={s.loginBlock}>
            {props.isAuth ? <div> {props.login} - <button>logout</button></div> : <NavLink to={'/login'}>Log In</NavLink>}
        </div>
    </header>
}
