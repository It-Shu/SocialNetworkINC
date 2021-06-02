import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileUsersType, UpdateStatusUserType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileUsersType
    // status: UpdateStatusUserType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {

    return (
        <div>
           {/* <div>
                <img src={'https://fireinspire.com.ua/wp-content/uploads/2017/01/maxresdefault-6.jpg'}/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status}/>
            </div>
        </div>
    )
}