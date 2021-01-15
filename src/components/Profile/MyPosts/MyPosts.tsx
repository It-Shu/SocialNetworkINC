import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";



export const MyPosts = (props) => {


    let postsElements = props.state.posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/> );
    return <div className={s.postsBlock}>

        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea className={s.textareaMassage}/>
        </div>
        <div>
            <button className={s.buttonPosts} type="submit"><span>Add post</span></button>
        </div>
        <div>
            New post
        </div>

        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}