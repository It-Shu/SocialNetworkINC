import React from 'react';
// import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {ActionsTypes, ProfileType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {ReducersStoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    store: ReducersStoreType
    //addPost: (postText: string) => void
    //updateNewPostText:  (newText: string) => void
   // profilePage: ProfileType
    dispatch: (action: ActionsTypes) => void
}


export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
               // posts={props.profilePage.posts}
                //addPost={props.addPost}
                //updateNewPostText={props.updateNewPostText}
                    // dispatch={props.dispatch.bind(props.profilePage)}
                    // newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}