import { profileApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let i = {
    postMessage: [
        { post: 'it`s my first post', id: 1, like: 13 },
        { post: 'I`m happy', id: 2, like: 123 },
        { post: 'How are you? i`m fine', id: 3, like: 23 }
    ],
    updateTextPost: '',
    profile: null
}

const profileReducer = (state = i, action) => {
    switch (action.type) {
        case UPDATE_POST: {
            return {
                ...state,
                updateTextPost: action.text
            }
        }
        case ADD_POST: {
            let newPost = state.updateTextPost
            return {
                ...state,
                postMessage: [...state.postMessage, { post: newPost, like: 0, id: 5, }],
                updateTextPost: ''
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default: {
            return state
        }

    }
}

export const addPost = () => ({ type: ADD_POST })
export const updatePost = (text) => ({ type: UPDATE_POST, text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const profileThunk = (userId) => {
    return (dispatch) => {
        profileApi.profile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export default profileReducer
