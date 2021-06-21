import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
    // updateNewPostText: (newText: string) => void // ( newText: string) => void
    // dispatch: (action: ActionsTypes) => void
}


export const MyPosts = (props: MyPostPropsType) => {


    const postsElements = props.posts.map(p => <Post key={p.id}
                                                     id={p.id}
                                                     message={p.message}
                                                     likesCount={p.likesCount}/>);

    // let postMessageRef = React.createRef<HTMLTextAreaElement>();


    // const onAddPost = () => {
    //     props.addPost(props.newPostText)
    //     // props.dispatch(addPostActionCreator(props.newPostText))
    // }
    const addNewPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let newText = e.currentTarget.value
    //     props.updateNewPostText(newText)
    //     // props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    // }


    return <div className={s.postsBlock}>

        <h3>My posts</h3>

        <AddPostReduxForm onSubmit={addNewPost}/>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

const AddNewPostForm: React.FC<InjectedFormProps<PostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' placeholder='Enter your post'
                       className={s.textareaMassage}/>
            </div>
            <div>
                <button className={s.buttonPosts}>Add post</button>
            </div>
        </form>
    )
}


const AddPostReduxForm = reduxForm<PostType>({
    form: 'profileAddNewPostForm'
})(AddNewPostForm)