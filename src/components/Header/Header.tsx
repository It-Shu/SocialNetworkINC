import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    debugger
    return <header className={s.header}>
        <img src={'https://logocs.ucoz.ru/design/trans_spay_got.jpg'}/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Log In</NavLink>}
        </div>
    </header>
}
