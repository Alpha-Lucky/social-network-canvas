import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { usersApi } from '../api/api';

const SET_USERS = "SET_USERS"

let i = {
  SidebarData: [
    {
      title: 'Profile',
      path: '/profile',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text',
      cNameSide: 'linkSide',
      cNameSideLinks: 'linkSideDec'
    },
    {
      title: 'Messages',
      path: '/Messages',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text',
      cNameSide: 'linkSide',
      cNameSideLinks: 'linkSideDec'

    },
    {
      title: 'News',
      path: '/News',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text',
      cNameSide: 'linkSide',
      cNameSideLinks: 'linkSideDec'
    },
/*     {
      title: 'Login',
      path: '/Login',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text',
      cNameSide: 'linkSide',
      cNameSideLinks: 'linkSideDec'
    }, */
    {
      title: 'Setting',
      path: '/Setting',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text',
      cNameSide: 'linkSide',
      cNameSideLinks: 'linkSideDec'
    },
    {
      title: 'Friends',
      path: '/Friends',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text',
      cNameSide: 'linkSide',
      cNameSideLinks: 'linkSideDec'
    }
  ],
  users: [

  ]
}

const sideBarReducer = (state = i, action) => {
  switch (action.type) {

    case SET_USERS: {
      return { ...state, users: action.users }
    }
    default: {
      return state
    }
  }
}

export const setUsersAc = (users) => ({ type: SET_USERS, users })

export const sideBarThunk = () => {
  return (dispatch) => {
    usersApi.getUsersSideBar().then(data => {
      dispatch(setUsersAc(data.items))
    })
  }
}

export default sideBarReducer


/* export const followActionCreator = () => ({ type: FOLLOW, userId })
export const unFollowActionCreator = () => ({ type: UNFOLLOW, userId })
export const SET_USERSActionCreator = () => ({ type: SET_USERS, userId }) 

    {id: 1, followed: true, urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Michael', status: "i m devoloper", location: {sity: "Moscow", country: "Russia" } },
    {id: 2, followed: false, urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Alex',  status: "Be happy", location: {sity: "Krasnodar", country: "Russia" } },
    {id: 3, followed: false, urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Angela', status: "Smile" , location: {sity: "Orel", country: "Russia" } },
    {id: 4, followed: true, urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Alisa', status: "I m crazy" , location: {sity: "Sochi", country: "Russia" } },
    {id: 5, followed: false, urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Helena', status: "Workining", location: {sity: "Moscow", country: "Russia" } }
*/


