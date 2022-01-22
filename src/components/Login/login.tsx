import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {Redirect} from "react-router-dom";

type FormDataType = {
    email: string
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} type={"password"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            <div>
                <button>logIn</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}


export const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
        return <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}


// export default connect(null, {postLogin})(Login)