import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navBar/Navbar';
import Profile from './components/pages/profile/Profile';
import Messages from './components/pages/messages/message';
import Music from './components/pages/music/Music';
import React from 'react';
import News from './components/pages/news/News';
import Setting from './components/pages/sitting/Setting';
import Friends from './components/pages/friends/Friends';





function App(props) {
  return (
    <div className="App" >
      <div className="Header">
        <Header />
        <Navbar />
      </div>
      <div className="Sidebar" >
      <Route path='/' render={ () => <Sidebar state={props.state.sideBar} />} />
      </div>
      <div className="Content">
            <div className="contentConteiner">
            <Route path='/Profile' render={ () => <Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path='/Messages' render={ () => <Messages state={props.state.messagesPage} dispatch={props.dispatch}   />} />
            <Route path='/Music' component={Music} />
            <Route path='/News' component={News} />
            <Route path='/Setting' component={Setting} />
            <Route path='/Friends' render={ () => <Friends state={props.state.friends} />} />
           
            </div>
        </div>
      </div>
  );
}

export default App;
