import React from "react";
import './preloader.css'
import logo from '../../../logo.svg'

let PreloaderApp = (props) =>  {
    return(
        <div className="preloader">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
        </div>
    )
}

export default PreloaderApp