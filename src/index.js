import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import './index.css';
import store from './redux/reduxStore';
import reportWebVitals from './reportWebVitals';


let entireThree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
        <App 
          state={state}
          dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
    }

    entireThree(store.getState())
    store.subscribe(() => {
      let state = store.getState()
      entireThree(state)
    })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

