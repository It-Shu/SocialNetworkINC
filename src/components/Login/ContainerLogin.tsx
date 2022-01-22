import React from 'react';
import {connect} from "react-redux";
import { postLogin } from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Login } from './login';
import {Redirect} from "react-router-dom";

type mapStatePropsType = {
    isAuth: boolean
}


class ContainerLogin extends React.Component<any, any> {

    render() {
        if (this.props.isAuth) {
            debugger
            return <Redirect to={'/profile'}/>
        }
        return <Login
            login={this.props.postLogin}
            isAuth={this.props.isAuth}
        />;

    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {postLogin})(ContainerLogin)
