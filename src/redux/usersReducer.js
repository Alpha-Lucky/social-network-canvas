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
      case SET_TOTAL_COUNT: {
        return {...state, totalUsersCount: action.totalUsersCount}
    }
    case TOOGLE_IS_FETHING: {
      return {...state, isFethining: action.isFethining}
  }
  case FOLOWING_IS_PROGRES: {
    return { ...state, followingInProgres: action.following 
      ? [...state.followingInProgres, action.userId]
      : state.followingInProgres.filter(id => id !== action.userId)}
  }
    default: {
      return state
    }
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, totalUsersCount })
export const toogleIsFething = (isFethining) => ({ type: TOOGLE_IS_FETHING, isFethining })
export const toogleFollowingProgres = (userId, following) => ({ type: FOLOWING_IS_PROGRES, userId, following })

export default usersReducer


/*     {id: 1, followed: true, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Michael', status: "i m devoloper", location: {city: "Moscow", country: "Russia" } },
    {id: 2, followed: false, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Alex',  status: "Be happy", location: {city: "Krasnodar", country: "Russia" } },
    {id: 3, followed: false, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Angela', status: "Smile" , location: {city: "Orel", country: "Russia" } },
    {id: 4, followed: true, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Alisa', status: "I m crazy" , location: {city: "Sochi", country: "Russia" } },
    {id: 5, followed: false, urlImg: "https://www.blast.hk/attachments/74778/", name: 'Helena', status: "Workining", location: {city: "Moscow", country: "Russia" } } */