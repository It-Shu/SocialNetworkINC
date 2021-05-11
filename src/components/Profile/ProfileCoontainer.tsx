import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileUsersType, setUserProfile} from "../../redux/profile-reducer";

type mapStatePropsType = {
    profile: ProfileUsersType
}

type mapDispatchPropsType = {
    setUserProfile: (profile: ProfileUsersType) => void
}

type ProfileType = mapStatePropsType & mapDispatchPropsType

class ProfileContainer extends React.Component <ProfileType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => { // then is promise !!!!
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div> // profile any !!!!!!!
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);