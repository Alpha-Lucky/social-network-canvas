import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state'
import state from './redux/state';

/* addPost('pushtest') */

export let rerenderEntireewqewqThree = () => {

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state={state} addPost={addPost} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}


