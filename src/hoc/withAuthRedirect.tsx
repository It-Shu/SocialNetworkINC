import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

interface MapStateToPropsForRedirectType {
    isAuth: boolean;
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    // class RedirectComponent extends React.Component<MapStateToPropsForRedirectType> {
        const RedirectComponent = (props: MapStateToPropsForRedirectType) => {
        // render() {
            let {isAuth, ...restProps} = props

            if (!props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...restProps as T}/>
       // }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}