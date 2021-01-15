import React from "react";
import s from './../Dialogs.module.css'

type PropsMessage = {
    message: string
}

export const Message = (props: PropsMessage) => {
    return <div className={s.dialogs}>{props.message}</div>
}
