import {MyPosts} from "../MyPosts";
import {RootStateType} from "../../../../redux/dialogs-reducer";
import {addPostAC} from "../../../../redux/profile-reducer";
import store from "../../../../redux/redux-store";
import {connect} from "react-redux";


const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText,
        description: state.profilePage.description

    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
            //store.getState().profilePage.newPostText,
        },
        // updateNewPostText: (newText: string) => {
        //     dispatch(updateNewPostTextAC(newText))
        // }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);
















/*
type MyPostContainerPropsType = {
    store: ReducersStoreType
   // posts: Array<PostType>
    // addPost: (postText: string) => void
   // updateNewPostText: (newText: string) => void
   // newPostText: string
   // dispatch: (action: ActionsTypes) => void
}

*/

/*
export const MyPostsContainer = (/!*props: MyPostContainerPropsType*!/) => {
    // let state = props.store.getState();

    /!* const addPost = () => {
         props.store.dispatch(addPostActionCreator(state.profilePage.newPostText)) // props.newPostText
     }

     const newPostChange = (newText: string) => {
         props.store.dispatch(updateNewPostTextActionCreator(newText))
     }*!/


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    const addPost = () => {
                        store.dispatch(addPostActionCreator(state.profilePage.newPostText)) // props.newPostText
                    }
                    const newPostChange = (newText: string) => {
                        store.dispatch(updateNewPostTextActionCreator(newText))
                    }
                    return <MyPosts
                        addPost={addPost}
                        updateNewPostText={newPostChange}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        // posts={store.getState().profilePage.posts}
                        // newPostText={store.getState().profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}
*/



