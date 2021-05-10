import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {initialStateType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";

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
                props.unfollow(u.id)
            }}>UnFollow</button>
            : <button onClick={() => {
                props.follow(u.id)
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