import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import Favicon from "react-favicon";
import { Helmet } from "react-helmet";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(combineReducers, composeEnhancers(
//   applyMiddleware(thunk)
// ));

ReactDOM.render(
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
