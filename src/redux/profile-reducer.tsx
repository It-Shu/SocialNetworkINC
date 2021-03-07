import {ActionsTypes, PostType, ProfileType} from "./store";


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

const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state
        }

        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({
    type: ADD_POST,
    newPostText: newPostText
}) as const

export const updateNewPostTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
}) as const

export default profileReducer;