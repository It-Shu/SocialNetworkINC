import {ActionsTypes, PostType, RootStateType} from "./state";


const ADD_POST = "ADD-POST";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state: RootStateType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.profilePage.newPostText,
                likesCount: 0
            }
            state.profilePage.posts.push(newPost)
            state.profilePage.newPostText = '';
            return state
        }

        case UPDATE_NEW_POST_TEXT: {
            state.profilePage.newPostText = action.newText;
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