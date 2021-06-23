import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {authMe, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type mapStatePropsType = {
    isAuth: boolean
    login: string | null
    id: number | null
    email: string | null

}

type mapDispatchLogInPropsType = {
    setAuthUserData: (id: number, email: string, login: string, isAuth: boolean) => void
    authMe: (id: number | null, email: string | null, login: string | null) => void
}

type HeaderPropsType = mapStatePropsType & mapDispatchLogInPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.authMe(this.props.id, this.props.email, this.props.login)
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