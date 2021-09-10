import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';


let stateDataFriends = (state) => {
  return {
    friends: state.sideBar.friends
  }
}

let FriendsContainer = connect(stateDataFriends)(Friends)


export default FriendsContainer


/* let FriendsContainerdsadsa = (props) => {
  return(
    <StoreContext.Consumer>
      {
        (store) => {
    let state = store.getState().sideBar
    return <Friends state={state} />
        }
      }
    </StoreContext.Consumer>
  )
} */