const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


let i = {
   users: [
/*     {id: 1, followed: true, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Michael', status: "i m devoloper", location: {city: "Moscow", country: "Russia" } },
    {id: 2, followed: false, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Alex',  status: "Be happy", location: {city: "Krasnodar", country: "Russia" } },
    {id: 3, followed: false, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Angela', status: "Smile" , location: {city: "Orel", country: "Russia" } },
    {id: 4, followed: true, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Alisa', status: "I m crazy" , location: {city: "Sochi", country: "Russia" } },
    {id: 5, followed: false, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Helena', status: "Workining", location: {city: "Moscow", country: "Russia" } } */
  ]
}

const usersReducer = (state = i, action) => {
  switch(action.type) {
    case FOLLOW: {
        return {
          ...state,
          users: state.users.map(
            u => {
                if (u.id === action.userId){
                  return {...u, followed: true}
                }
                return u;
          }
          )
        }
    }
    case UNFOLLOW: {
      return  {
        ...state,
        users: state.users.map(
           u => {
              if (u.id === action.userId){
                return {...u, followed: false}
              }
              return u;
          }
        )
      }
    }
    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }
    default: {
      return state
    }
  }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })


export default usersReducer