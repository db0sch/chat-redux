// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


// const message = "Username?";
// const username = window.prompt(message) || `anonymous${Math.floor(10 + (Math.random() * 90))}`;
const username = `anonymous${Math.floor(10 + (Math.random() * 90))}`;

const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  selectedChannel: 'general',
  currentUsername: username
};

import messagesReducer from './reducers/messagesReducer';
import channelsReducer from './reducers/channelsReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';
import currentUsernameReducer from './reducers/currentUsernameReducer';

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: currentUsernameReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, applyMiddleware(logger, promiseMiddleware))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
