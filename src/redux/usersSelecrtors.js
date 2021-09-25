import { createSelector } from "reselect"

const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getPagePageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFethining = (state) => {
    return  state.usersPage.isFethining
}

export const getFollowingInProgres = (state) => {
    return state.usersPage.followingInProgres
}

