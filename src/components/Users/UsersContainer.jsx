import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow } from '../../redux/usersReducer';
import PreLoader from '../commen/Preloader/Preloader';
import { toggleFollowingProgress } from '../../redux/usersReducer';
import { compose } from 'redux';
import { getUsers } from '../../redux/usersSelectors';
import { getTotalUsersCount } from '../../redux/usersSelectors';
import { getCurrentPage } from '../../redux/usersSelectors';
import { getIsFetching } from '../../redux/usersSelectors';
import { getFollowingInProgress } from '../../redux/usersSelectors';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize); 
        
    }  

    onPageChanget = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize); 

    }

    render() {
        return <>
            {this.props.isFetching ? 
                <PreLoader/> : null }
            <Users totalUsersCount = {this.props.totalUsersCount} 
                           pageSize = {this.props.pageSize}
                           currentPage = {this.props.currentPage}
                           onPageChanget = {this. onPageChanget}
                           users = {this.props.users}
                           follow = {this.props.follow}
                           unfollow = {this.props.unfollow}
                           followingInProgress = {this.props.followingInProgress}
                         
                />  
            </>
        }
    }

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowingInProgress: state.usersPage.followingInProgress,
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getFollowingInProgress(state),
    }
}


export default compose (
    connect (mapStateToProps, { follow, unfollow,setCurrentPage, toggleFollowingProgress, getUsers})) (UsersContainer)