import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/navBar/Navbar';
import Login from './components/pages/login/Login';
import React from 'react';
import News from './components/pages/news/News';
import Setting from './components/pages/sitting/Setting';
import MessagesContainer from './components/pages/messages/messageContainer';
import ProfileContainer from './components/pages/profile/ProfileContainer';
import SidebarContainer from './components/sidebar/SidebarContainer';
import UsersContainer from './components/pages/users/usersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component{

  componentDidMount() {
    this.props.initializeApp()
  }
 
 render() {
  if(!this.props.initialized){return <Preloader />}
  return (
    <div className="App" >
      <div className="Header">
        <HeaderContainer />
        <Navbar />
      </div>
      <div className="Sidebar" >
      <Route path='/' render={ () => <SidebarContainer />} />
      </div>
      <div className="Content">
            <div className="contentConteiner">
            <Route exact path='/' component={ProfileContainer} />
            <Route path='/Profile/:userId?' render={ () => <ProfileContainer />} />
            <Route path='/Messages' render={ () => <MessagesContainer />} />
            <Route path='/Login' component={Login} />
            <Route path='/News' component={News} />
            <Route path='/Setting' component={Setting} />
            <Route path='/Friends' render={ () => <UsersContainer />} />
            </div>
        </div>
      </div>
  );
}
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp })) (App)
