import React from 'react';
// import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {PostType, ProfileType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfileType
    addPost: (postText: string) => void
}



export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}