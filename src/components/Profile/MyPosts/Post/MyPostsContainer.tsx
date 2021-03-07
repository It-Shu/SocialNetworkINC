import {MyPosts} from "../MyPosts";
import {ActionsTypes, PostType} from "../../../../redux/store";
import {ChangeEvent} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {ReducersStoreType} from "../../../../redux/redux-store";


type MyPostContainerPropsType = {
    store: ReducersStoreType
   // posts: Array<PostType>
    // addPost: (postText: string) => void
   // updateNewPostText: (newText: string) => void
   // newPostText: string
   // dispatch: (action: ActionsTypes) => void
}




export const MyPostsContainer = (props: MyPostContainerPropsType) => {
let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePage.newPostText)) // props.newPostText
    }

    const newPostChange = (newText: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(newText))
    }


    return ( <MyPosts addPost={addPost} updateNewPostText={newPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/> )
}