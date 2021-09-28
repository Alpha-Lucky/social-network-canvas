import { profileApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


let i = {
    postMessage: [
        { post: 'it`s my first post', id: 1, like: 13 },
        { post: 'I`m happy', id: 2, like: 123 },
        { post: 'How are you? i`m fine', id: 3, like: 23 }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = i, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = action.newPostBody
            return {
                ...state,
                postMessage: [...state.postMessage, { post: newPost, like: 0, id: 5, }],
                updateTextPost: ''
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_USER_STATUS: {
            return { ...state, status: action.status }
        }
        default: {
            return state
        }

    }
}

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_USER_STATUS, status })

export const profileThunk = (userId) => async (dispatch) => {
        let response = await profileApi.profile(userId)
        dispatch(setUserProfile(response.data))
    }


export const getStatusThunk = (userId) => async (dispatch) => {
        let response = await profileApi.getStatus(userId)
            dispatch(setStatus(response.data))
}

export const updateStatusThunk = (status) => async (dispatch) => {
        let response = await profileApi.updateStatus(status)
            if(response.data.resultCode === 0) {  dispatch(setStatus(status))}
}

export default profileReducer
