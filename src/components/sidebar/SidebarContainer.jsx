import React from 'react';
import StoreContext from '../../storeContext';
import Sidebar from './Sidebar';
import { SidebarData } from '../dataLinks/SidebarData';

let SidebarContainer = (props) => {
    return(
      <StoreContext.Consumer>
        {
        (store) => {
          let state = store.getState().sideBar
          return <Sidebar 
          SidebarData={SidebarData}
          state={state} />
        }
        }
      </StoreContext.Consumer>

    )
}
export default SidebarContainer