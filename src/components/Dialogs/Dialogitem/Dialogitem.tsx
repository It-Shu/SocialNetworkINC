import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogType} from "../../../redux/store";


export const DialogItem = (props: DialogType) => {

    let path = '/dialog/' + props.id

    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}
