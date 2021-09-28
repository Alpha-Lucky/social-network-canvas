import { usersApi } from "../api/api"
import { updateObjectArray } from "../components/common/objectFunc/object"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOOGLE_IS_FETHING = "TOOGLE_IS_FETHING"
const FOLOWING_IS_PROGRES = "FOLOWING_IS_PROGRES"


let i = {
  users: [

  ],
  pageSize: 5,
  totalUsersCount: 1,
  currentPage: 1,
  isFethining: true,
  followingInProgres: []
}

const usersReducer = (state = i, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, "id", {followed: true})
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, "id", {followed: false})
      }
    }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount }
    }
    case TOOGLE_IS_FETHING: {
      return { ...state, isFethining: action.isFethining }
    }
    case FOLOWING_IS_PROGRES: {
      return {
        ...state, followingInProgres: action.following
          ? [...state.followingInProgres, action.userId]
          : state.followingInProgres.filter(id => id !== action.userId)
      }
    }
    default: {
      return state
    }
  }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, totalUsersCount })
export const toogleIsFething = (isFethining) => ({ type: TOOGLE_IS_FETHING, isFethining })
export const toogleFollowingProgres = (userId, following) => ({ type: FOLOWING_IS_PROGRES, userId, following })

export const getUsersThunk = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toogleIsFething(true))
    dispatch(setCurrentPage(currentPage))

    let data = await usersApi.getUsers(currentPage, pageSize)
    dispatch(toogleIsFething(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, ac) => {
  dispatch(toogleFollowingProgres(userId, true))
  let data = await apiMethod(userId)
  if (data.resultCode === 0) { }
  dispatch(ac(userId))
  dispatch(toogleFollowingProgres(userId, false))

}

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), followSuccess)

    /* dispatch(toogleFollowingProgres(userId, true))

    let data = await apiMethod(userId)
    if (data.resultCode === 0) { }
    dispatch(ac(userId))
    dispatch(toogleFollowingProgres(userId, false)) */
  }
}

export const unfollow = (userId) => {
  return async (dispatch) => { 
    followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi), unfollowSuccess)

/*     dispatch(toogleFollowingProgres(userId, true))

    let data = await apiMethod(userId)
    if (data.resultCode === 0) { }
    dispatch(ac(userId))
    dispatch(toogleFollowingProgres(userId, false)) */
  }
}



export default usersReducer
