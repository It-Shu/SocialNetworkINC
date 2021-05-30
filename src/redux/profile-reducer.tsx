import {profileAPI, unFollowAPI} from "../api/Api";
import {toggleIsFollowingProgress, unfollowSuccess} from "./users-reducer";
import axios from "axios";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
    userId: null
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

type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>

export default profileReducer;

/*
export const getProfile = (userId: number) => {

    return (dispatch: any) => {

        dispatch(setUserProfile(userId))
        if (!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId)
            .then(response => { // then is promise !!!!
                setUserProfile(response.data)
            });
    }
}*/


export const getUsersProfile = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response))
            })
    }
}
