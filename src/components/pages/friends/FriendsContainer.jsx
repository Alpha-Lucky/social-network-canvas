import React from 'react';
import StoreContext from '../../../storeContext';
import Friends from './Friends';


let FriendsContainer = (props) => {
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
}
export default FriendsContainer