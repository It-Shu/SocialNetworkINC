import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getStatus,
    getUsersProfile,
    ProfileUsersType,
    updateStatus,
    UpdateStatusUserType
} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";


type PathParamTypes = {
    userId: string
}

type WithRouterPropsType = RouteComponentProps<PathParamTypes> & OwnProfileType

type mapStatePropsType = {
    profile: ProfileUsersType | null
    userId: number | null
    // status: UpdateStatusUserType | null
    status: string
}


type mapDispatchPropsType = {
    getUsersProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

type OwnProfileType = mapStatePropsType & mapDispatchPropsType

class ProfileContainer extends React.Component <WithRouterPropsType> {

    componentDidMount() {

        let userId = this.props.match && this.props.match.params.userId ? Number(this.props.match.params.userId) : 12785
        if (!userId && this.props.userId) {
            userId = this.props.userId;
        }
        this.props.getUsersProfile(userId)


        // setTimeout(()=> {
        this.props.getStatus(userId)
        // }, 2000)
        //this.props.updateStatus(status)

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
                <Profile profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,
    userId: state.profilePage.userId,
    status: state.profilePage.status
})

/*
let withUrlDataContainerComponent = withRouter(ProfileContainer)

export const WithAuthRedirect(connect(mapStateToProps, {getUsersProfile})(withUrlDataContainerComponent));
*/

export default compose<ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)