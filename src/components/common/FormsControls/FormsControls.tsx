import React from "react";
import s from "./FormsControls.module.css"


type TextareaTypes = {
    input: {}
    meta: {
        touched: boolean
        error: string
    }
}

const FormControl: React.FC<TextareaTypes> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div className={s.formControl + " " + (hasError ? s.error : "")}>
        <div>
            {props.children}
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

export const Textarea: React.FC<TextareaTypes> = (props) => {
const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<TextareaTypes> = (props) => {
    const {input, meta, ...restProps} = props
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}