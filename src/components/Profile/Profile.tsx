import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {DescriptionsType, ProfileUsersType, UpdateStatusUserType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    //store: ReducersStoreType
    //addPost: (postText: string) => void
    //updateNewPostText:  (newText: string) => void
    // profilePage: ProfileType
    // dispatch: (action: ActionsTypes) => void
    profile: ProfileUsersType
    // status: UpdateStatusUserType | null
    status: string
    updateStatus: (status: string) => void

}


export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer
                // store={props.store}
                // posts={props.profilePage.posts}
                //addPost={props.addPost}
                //updateNewPostText={props.updateNewPostText}
                // dispatch={props.dispatch.bind(props.profilePage)}
                // newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}