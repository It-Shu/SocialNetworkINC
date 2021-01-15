import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img src={'https://fireinspire.com.ua/wp-content/uploads/2017/01/maxresdefault-6.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>

        </div>
    )
}