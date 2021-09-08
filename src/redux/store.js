import profileReducer from "./profileReducer"
import messagesReducer from "./messagesReducer"
import sideBarReducer from "./sideBarReducer"



let store = {
  _state: {
    profilePage: {
      postMessage: [
        { post: 'it`s my first post', id: 1, like: 13 },
        { post: 'I`m happy', id: 2, like: 123 },
        { post: 'How are you? i`m fine', id: 3, like: 23 }
      ],
      updateTextPost: ''
    },
    messagesPage: {
      dialogData: [
        { name: 'Michael', id: 1 },
        { name: 'Alex', id: 2 },
        { name: 'Angela', id: 3 },
        { name: 'Alisa', id: 4 },
        { name: 'Helena', id: 5 }
      ],
      messageData: [
        { message: 'Hi', id: 1 },
        { message: 'What did you yestuday?', id: 2 },
        { message: 'How are you?', id: 3 },
        { message: 'Go walk!', id: 4 },
        { message: 'Heooo', id: 5 },
        { message: 'So eazy, i`m leaning fery fast!', id: 6 }
      ],
      updateMessage: ''
    },
    sideBar: {
      friends: [
        { urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Michael', id: 1 },
        { urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Alex', id: 2 },
        { urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Angela', id: 3 },
        { urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Alisa', id: 4 },
        { urlImg: "https://www.blast.hk/attachments/74778/", classes: 'itemSide', classesFriends: 'itemFriends', name: 'Helena', id: 5 }
      ]
    }
  },
  getState() {
    return this._state
  },
  _callSubscribe() {
    console.log('state changed')
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state. messagesPage, action)
    this._state.sideBar = sideBarReducer(this._state.sideBar, action)
    this._callSubscribe(this._state)
  
  },
  subscribe(observer) {
    this._callSubscribe = observer
  }
}

export default store
