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
  switch(action.type) {
    case SET_USER_DATA: {
        return {
          ...state,
          ...action.data,
          isAuth: true
        }
  
        }
      default: {
      return state
    }
  }
}
export const setAutoUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} })

export const getAuthUserData = () => (dispatch) => {
    headerApi.auth().then(data => {
      if (data.resultCode === 0) {
          let {id, email, login } = data.data
          dispatch(setAutoUserData(id, email, login))
      }
  })
}

export default authReducer
