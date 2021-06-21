import {headerAPI, loginAPI} from "../api/Api";
import {Dispatch} from "react";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_LOGIN = 'SET_LOGIN'

type initialStateType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

let initialState: initialStateType = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
}


export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case SET_LOGIN: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setLogin>

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {type: SET_USER_DATA, data: {id, email, login}}
}

export const authMe = (id: number, email: string, login: string) => {

    return (dispatch: any) => {

        // dispatch(setAuthUserData(id, email, login));
        headerAPI.getAuthMe()
            .then(data => { // then is promise !!!!
                console.log(data)
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(id, email, login))
                }
                // setAuthUserData(id, email, login)
            });
    }
}

export const setLogin = (email: string, password: string, rememberMe: boolean, captcha?: boolean) => {
    return {type: SET_LOGIN, data: {email, password, rememberMe, captcha}}
}

export const login = (email: string, password: string, rememberMe: boolean, captcha?: boolean) => (dispatch: Dispatch<any>) => {
    loginAPI.updateLogin()
        .then(data =>{
            if (data.data.resultCode === 0) {
                dispatch(setLogin(email, password, rememberMe, captcha))
            }
        })
}