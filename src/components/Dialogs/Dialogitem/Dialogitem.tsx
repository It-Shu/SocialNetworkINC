import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';



export const DialogItem = (props) => {

    let path = '/dialog/' + props.id

    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}
