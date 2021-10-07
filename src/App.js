import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Route, withRouter, Switch,  } from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";
import NavbarMoble from './components/navBarMoble/NavbarMoble';
import ScrollToTop from './utils/ScrollToTop';
import NotFound from './components/common/NotFound/NotFound';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
    catchAllErrors = (reason, promise) => {
        alert("Erros, try later")
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllErrors)
    }
    componentWillUnmount(){
        window.removeEventListener("unhandledrejection", this.catchAllErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <div className='header'>
                    <HeaderContainer />
                </div>
                <div className='navBar'>
                    <Navbar />
                    <NavbarMoble />
                </div>
                <ScrollToTop />
                <div className='app-wrapper-content'>
                <Switch> 
                    <Route exact path='/' 
                    render={() => <LoginPage />} />

                    <Route path='/dialogs'
                        render={withSuspense(DialogsContainer)} />

                    <Route path='/profile/:userId?'
                        render={withSuspense(ProfileContainer)} />

                    <Route path='/users'
                        render={() => <UsersContainer />} />

                    <Route path='/login'
                        render={() => <LoginPage />} />

                    
                    <Route path='/*'
                        render={() => <NotFound />} />
                </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
    return <HashRouter >
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;
