import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followSuccess,
    initialStateType,
    setCurrentPage, toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollowSuccess,
    UserType, toggleIsFollowingProgress, getUsers
} from "../../redux/users-reducer";
import React, {ComponentType} from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStatePropsType = {
    usersPage: initialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any> // any???

}

type mapDispatchUsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
   // setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
   // setTotalUsersCount: (totalCount: number) => void
   // toggleIsFetching: (isFetching: boolean) => void
   // toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStatePropsType & mapDispatchUsersPropsType


class UsersContainer extends React.Component <UsersPropsType> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

      /*  this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => { // then is promise !!!!
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            });*/
    }

    onPageChanged = (pageNumber: number) => { // ??? pageNumber ???

        this.props.getUsers(pageNumber, this.props.pageSize);

       /* this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => { // then is promise !!!!
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            });*/
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                usersPage={this.props.usersPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
               // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
    }
}

/*const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => { // ??? pageNumber ???
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(setToggleIsFetchingAC(isFetching))
        }
    }
}*/ // connect создаст mapDispatchToProps сам!!!

// let WithRedirect = WithAuthRedirect(UsersContainer)

export default compose<ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
        follow: followSuccess,
        unfollow: unfollowSuccess,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers,
    })
)(UsersContainer)
