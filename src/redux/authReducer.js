import { stopSubmit } from "redux-form"
import { headerApi } from "../api/api"

const SET_USER_DATA = "SET_USER_DATA"


let i = {
  userId: null,
  email: null,
  login: null,
  isFethining: false,
  isAuth: false
}

const authReducer = (state = i, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload
      }

    }
    default: {
      return state
    }
  }
}
export const setAutoUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const getAuthUserData = () => async (dispatch) => {
  let response = await headerApi.auth()
  if (response.data.resultCode === 0) {
    let { userId, email, login } = response.data.data
    dispatch(setAutoUserData(userId, email, login, true))
  }
}

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
  let response = await headerApi.login(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    let messages = response.data.messages.length > 0 ? response.data.messages[0] : "The entered data is incorrect"
    dispatch(stopSubmit("login", { _error: messages }))
  }
}

export const loginOutThunk = () => async (dispatch) => {
  let response = await headerApi.loginOut()
  if (response.data.resultCode === 0) {
    dispatch(setAutoUserData(null, null, null, false))
  }
}

export default authReducer
