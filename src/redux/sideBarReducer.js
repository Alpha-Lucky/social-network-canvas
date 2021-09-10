import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


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
      icon: <FaIcons.FaCartPlus />,
      cName: 'nav-text',
      cNameSide: 'linkSide',
      cNameSideLinks: 'linkSideDec'
    },
    {
      title: 'Music',
      path: '/Music',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text',
      cNameSide: 'linkSide',
      cNameSideLinks: 'linkSideDec'
    },
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
  friends: [
    { urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Michael', id: 1 },
    { urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Alex', id: 2 },
    { urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Angela', id: 3 },
    { urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Alisa', id: 4 },
    { urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Helena', id: 5 }
  ]
}

const sideBarReducer = (state = i, action) => {

  return state
}
export default sideBarReducer