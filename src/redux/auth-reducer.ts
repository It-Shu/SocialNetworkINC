import {headerAPI} from "../api/Api";

const SET_USER_DATA = 'SET_USER_DATA'

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
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {type: SET_USER_DATA, data: {id, email, login}}
}

export const authMe = (id: number, email: string, login: string) => {

    return (dispatch: any) => {

        dispatch(setAuthUserData(id, email, login));
        headerAPI.getAuthMe()
            .then(data => { // then is promise !!!!
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(id, email, login))
                }
                setAuthUserData(id, email, login)
            });
    }
}