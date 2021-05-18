import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DescriptionsType, ProfileUsersType, setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';


type PathParamTypes = {
    userId: string
}

type WithRouterPropsType = RouteComponentProps<PathParamTypes> & OwnProfileType

type mapStatePropsType = {
    profile: ProfileUsersType
}

type mapDispatchPropsType = {
    setUserProfile: (profile: ProfileUsersType) => void
}

type OwnProfileType = mapStatePropsType & mapDispatchPropsType

class ProfileContainer extends React.Component <WithRouterPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => { // then is promise !!!!
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div> // profile any !!!!!!!
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);