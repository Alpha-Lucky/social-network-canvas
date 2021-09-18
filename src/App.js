import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/navBar/Navbar';
import Music from './components/pages/music/Music';
import React from 'react';
import News from './components/pages/news/News';
import Setting from './components/pages/sitting/Setting';
import MessagesContainer from './components/pages/messages/messageContainer';
import ProfileContainer from './components/pages/profile/ProfileContainer';
import SidebarContainer from './components/sidebar/SidebarContainer';
import UsersContainer from './components/pages/users/usersContainer';
import HeaderContainer from './components/header/HeaderContainer';





function App(props) {
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
            <Route path='/Profile/:userId?' render={ () => <ProfileContainer />} />
            <Route path='/Messages' render={ () => <MessagesContainer />} />
            <Route path='/Music' component={Music} />
            <Route path='/News' component={News} />
            <Route path='/Setting' component={Setting} />
            <Route path='/Friends' render={ () => <UsersContainer />} />
            </div>
        </div>
      </div>
  );
}

export default App;
