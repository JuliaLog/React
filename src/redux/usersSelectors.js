

export const getUsers = () => {
    return state.usersPage.users;
}

export const getPageSixe = () => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = () => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = () => {
    return state.usersPage.currentPage;
}

export const getIsFetching = () => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = () => {
    return state.usersPage.followingInProgress;
}




