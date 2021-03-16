import { ProfileType} from "./store";
import {followAC, setUsersAC, unfollowAC} from "./users-reducer";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState: ProfileType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It`s my first post.', likesCount: 14},
        {id: 3, message: 'Omg', likesCount: 19},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            let body = state.newPostText
            return  {
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
           return  {
                ...state,
                newPostText: action.newText,
            }
           // newState.newPostText = action.newText;
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

type ProfileActionsType =
    ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export default profileReducer;