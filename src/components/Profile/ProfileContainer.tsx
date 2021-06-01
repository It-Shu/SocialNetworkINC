import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUsersProfile, ProfileUsersType} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamTypes = {
    userId: string
}

type WithRouterPropsType = RouteComponentProps<PathParamTypes> & OwnProfileType

type mapStatePropsType = {
    profile: ProfileUsersType | null
    userId: number | null
    // isAuth: boolean
}

type mapDispatchPropsType = {
    // setUserProfile: (profile: ProfileUsersType) => void
    getUsersProfile: (userId: number) => void

}

type OwnProfileType = mapStatePropsType & mapDispatchPropsType

class ProfileContainer extends React.Component <WithRouterPropsType> {

    componentDidMount() {

        let userId = this.props.match && this.props.match.params.userId ? Number(this.props.match.params.userId) : 12785
        if (!userId && this.props.userId) {
            userId = this.props.userId;
        }
        this.props.getUsersProfile(userId)

        /* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
             .then(response => { // then is promise !!!!
                 this.props.setUserProfile(response.data)
             });*/
    }

    render() {
        if (!this.props.profile) {
            return <div>
                <Preloader/>
            </div>
        }
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,
    userId: state.profilePage.userId,
})

/*
let withUrlDataContainerComponent = withRouter(ProfileContainer)

export const WithAuthRedirect(connect(mapStateToProps, {getUsersProfile})(withUrlDataContainerComponent));
*/

export default compose<ComponentType>(
    connect(mapStateToProps, {getUsersProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)