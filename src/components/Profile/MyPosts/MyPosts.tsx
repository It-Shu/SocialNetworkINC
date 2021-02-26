import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostPropsType = {
    posts: Array<PostType>
    //addPost: (postText: string) => void
    //updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


export const MyPosts = (props: MyPostPropsType) => {


    const postsElements = props.posts.map(p => <Post key={p.id}
                                                     id={p.id}
                                                     message={p.message}
                                                     likesCount={p.likesCount}/>);

    // let postMessageRef = React.createRef<HTMLTextAreaElement>();


    const addPost = () => {
        // props.addPost(props.newPostText)
        props.dispatch(addPostActionCreator(props.newPostText))
    }

    const newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewPostText(e.currentTarget.value)
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }


    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <textarea className={s.textareaMassage}
                //ref={postMessageRef}
                      onChange={newPostChange}
                      value={props.newPostText}/>
        </div>
        <div>
            <button className={s.buttonPosts}
                    type="submit"
                    onClick={addPost}><span>Add post</span>
            </button>
        </div>
        <div>
            New post
        </div>

        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}