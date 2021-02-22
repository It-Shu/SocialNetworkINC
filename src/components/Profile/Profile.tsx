import React from 'react';
// import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {ActionsTypes, ProfileType} from "../../redux/state";

type ProfilePropsType = {
    //addPost: (postText: string) => void
    //updateNewPostText:  (newText: string) => void
    profilePage: ProfileType
    dispatch: (action: ActionsTypes) => void
}


export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                //addPost={props.addPost}
                //updateNewPostText={props.updateNewPostText}
                     dispatch={props.dispatch.bind(props.profilePage)}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}