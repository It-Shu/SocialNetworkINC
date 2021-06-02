import {profileAPI} from "../api/Api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
// const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";

// Profile types
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | ProfileUsersType
    description: null | string
    userId: number | null
    // status: UpdateStatusUserType | null
    status: string

}

type ProfileUsersContact = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null

}

type PhotosType = {
    small: string
    large: string
}

export type ProfileUsersType = {
    aboutMe: string
    contacts: Array<ProfileUsersContact>
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

// Descriptions types

type ContactsDescriptionType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

export type DescriptionsType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsDescriptionType
}


let initialState: ProfileType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It`s my first post.', likesCount: 14},
        {id: 3, message: 'Omg', likesCount: 19},
    ],
    newPostText: '',
    profile: null,
    description: null,
    userId: null,
    status: '',

}

const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            let body = state.newPostText
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: new Date().getTime(),
                    message: body,
                    likesCount: 0
                }],
            }
            /*
               const newPost: PostType = {
                   id: new Date().getTime(),
                   message: newState.body,
                   likesCount: 0
               }
               newState.posts.push(newPost)
               newState.newPostText = '';*/
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
            // newState.newPostText = action.newText;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
       /* case UPDATE_USER_STATUS: {
            return {...state, status: action.status}
        }*/
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => ({
    type: ADD_POST,
    newPostText: newPostText
}) as const

export const updateNewPostTextAC = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
}) as const

export const setUserProfile = (profile: ProfileUsersType) => ({
    type: SET_USER_PROFILE,
    profile
}) as const

export const setUserStatus = (status: string) => ({
    type: SET_USER_STATUS,
    status
}) as const

/*export const updateUserStatus = (status: UpdateStatusUserType) => ({
    type: UPDATE_USER_STATUS,
    status
}) as const*/

type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
   // | ReturnType<typeof updateUserStatus>

export default profileReducer;

// Thunks

/*export type GetStatusUserType = {
    userId: number
}*/
export type UpdateStatusUserType = {
    status: string
    userId: number
    resultCode: number
}



export const getUsersProfile = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response))
            })
    }
}

export const getStatus = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId)
            .then(response => {

                dispatch(setUserStatus(response))
            })
    }
}

export const updateStatus = (status: string) => (dispatch: any) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })

}
