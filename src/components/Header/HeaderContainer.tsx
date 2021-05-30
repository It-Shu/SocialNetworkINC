import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authMe, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type mapStatePropsType = {
    isAuth: boolean
    login: string
    id: number
    email: string

}

type mapDispatchLogInPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
    authMe: (id: number, email: string, login: string) => void
}

type HeaderPropsType = mapStatePropsType & mapDispatchLogInPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {

        this.props.authMe(this.props.id, this.props.email, this.props.login)

       /* axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => { // then is promise !!!!
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            });*/

    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    id: state.auth.id
})

export default connect(mapStateToProps, {setAuthUserData, authMe})(HeaderContainer)