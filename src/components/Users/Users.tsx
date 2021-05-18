import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {initialStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    usersPage: initialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}


const Users = (props: UsersType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(pagesCount)

    return (
        <div>

            <div>
                {pages.map(pageNumber => {
                    return <span className={props.currentPage === pageNumber ? s.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(pageNumber)
                                 }}>{pageNumber}</span>
                })}
            </div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
<span>
    <div>
        <NavLink to={'/profile/' + u.id}>
            <img
                src={/*u.photos.small !=null ? u.photos.small :*/ userPhoto} className={s.userPhoto}/>
        </NavLink>
    </div>
    <div>
        {u.followed
            ? <button onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                        'API_KEY': '072a9a18-83e1-4f21-8d4a-ee70734761c2'
                    }
                })
                    .then(response => { // then is promise !!!!
                        if (response.data.resultCode === 0) {
                            props.unfollow(u.id)
                        }
                    });


            }}>UnFollow</button>

            : <button onClick={() => {

                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                        'API_KEY': '072a9a18-83e1-4f21-8d4a-ee70734761c2'
                    }

                })
                    .then(response => { // then is promise !!!!
                        if (response.data.resultCode === 0) {
                            props.follow(u.id)
                        }
                    });
            }}>Follow</button>}
            </div>
            </span>
                    <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
            </span>
                </div>)
            }
        </div>
    )
}


export default Users;