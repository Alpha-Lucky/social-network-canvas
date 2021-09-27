import Sidebar from './Sidebar';
import { connect } from 'react-redux';

import { PureComponent } from 'react';
import { sideBarThunk } from '../../redux/sideBarReducer';

class stateDataSideBar extends PureComponent {
 
  componentDidMount() {
    this.props.sideBarThunk()
  }

  render () {
    return <Sidebar state={this.props.state} />
  }
}

let stateDataFriends = (state) => {
  return {
    state: state.sideBar
  }
}


let SidebarContainer = connect(stateDataFriends, {sideBarThunk})(stateDataSideBar)

export default SidebarContainer
