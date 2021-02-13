import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../redux/state";


export const Post = (props: PostType) => {


    return (

        <div className={s.item}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39ARgbYvRq62aQnjYDw1PQIFWTaQoq61kdw&usqp=CAU'}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}