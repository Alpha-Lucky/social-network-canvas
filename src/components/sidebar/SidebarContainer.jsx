import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

let stateDataSideBar = (state) => {
  return (
    {state: state.sideBar})
}

let SidebarContainer = connect(stateDataSideBar)(Sidebar)


export default SidebarContainer
