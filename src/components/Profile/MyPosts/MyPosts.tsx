import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostPropsType = {
    posts: Array<PostType>
}


export const MyPosts = (props: MyPostPropsType) => {


    const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);




    const addPost = () => {
        const addNewPosts =
        alert("Empty Post")
    }


    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea className={s.textareaMassage}/>
        </div>
        <div>
            <button className={s.buttonPosts} type="submit" onClick={ addPost }><span>Add post</span></button>
        </div>
        <div>
            New post
        </div>

        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}