import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileUsersType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileUsersType
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <div>
        <Preloader/>
        </div>
    }

    return (
        <div>

            <div>
                <img src={'https://fireinspire.com.ua/wp-content/uploads/2017/01/maxresdefault-6.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>avatar + description</div>
            </div>

        </div>
    )
}