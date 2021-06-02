import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileUsersType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileUsersType
}

export const ProfileInfo = (props: ProfileInfoType) => {

    return (
        <div>
           {/* <div>
                <img src={'https://fireinspire.com.ua/wp-content/uploads/2017/01/maxresdefault-6.jpg'}/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={'Hello there'}/>
            </div>
        </div>
    )
}