import React from 'react';
import userPhoto from "../../assets/images/user.png";
import s from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";


class Users extends React.Component <UsersPropsType> {

    constructor(props:UsersPropsType) {
        super(props)

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => { // then is promise !!!!
                this.props.setUsers(response.data.items)
            })

    }


    render() {
        return <div>
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
<span>
    <div>

        <img
            src={userPhoto} className={s.userPhoto}/>
    </div>
    <div>
        {u.followed
            ? <button onClick={() => {
                this.props.unfollow(u.id)
            }}>UnFollow</button>
            : <button onClick={() => {
                this.props.follow(u.id)
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
    }

}

export default Users;