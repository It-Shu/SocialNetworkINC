import {headerAPI, loginAPI} from "../api/Api";
import {Dispatch} from "react";
import { ThunkDispatch } from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA'

type initialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}


export const authReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            debugger
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                login: action.payload.login,
                isAuth: action.payload.isAuth
            }
        }
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: SET_USER_DATA, payload: {id, email, login, isAuth}} as const
}

export const authMe = () => {

    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {


        return  headerAPI.getAuthMe()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }

            });
    }
}

// export const setLogin = (email: string, password: string, rememberMe: boolean, captcha?: boolean) => {
//     return {type: SET_LOGIN, data: {email, password, rememberMe, captcha}}
// }

export const postLogin = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    loginAPI.updateLogin(email, password, rememberMe)
        .then((res) =>{
            if (res.data.resultCode === 0) {
                dispatch(authMe())
            }
        })
}

export const deleteLogout = () => (dispatch: Dispatch<any>) => {
    loginAPI.Logout()
        .then(res =>{
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}
