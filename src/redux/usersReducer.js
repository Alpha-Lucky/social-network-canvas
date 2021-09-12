const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"


let i = {
   users: [

  ],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1
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
      return {...state, users: action.users}
    }
        case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    default: {
      return state
    }
  }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })
export const setCurrentActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })


export default usersReducer


/*     {id: 1, followed: true, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Michael', status: "i m devoloper", location: {city: "Moscow", country: "Russia" } },
    {id: 2, followed: false, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Alex',  status: "Be happy", location: {city: "Krasnodar", country: "Russia" } },
    {id: 3, followed: false, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Angela', status: "Smile" , location: {city: "Orel", country: "Russia" } },
    {id: 4, followed: true, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Alisa', status: "I m crazy" , location: {city: "Sochi", country: "Russia" } },
    {id: 5, followed: false, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Helena', status: "Workining", location: {city: "Moscow", country: "Russia" } } */