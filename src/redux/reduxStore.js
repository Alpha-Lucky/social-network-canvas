import { combineReducers, createStore } from 'redux'
import authReducer from './authReducer';
import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer'
import usersReducer from './usersReducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    sideBar: sideBarReducer,
    auth: authReducer
})

let store = createStore(reducers);

export default store
