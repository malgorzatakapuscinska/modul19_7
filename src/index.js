import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {reducer} from './reducers';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {addComment} from './actions';
import {DevTools} from  './DevTools'
const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger), DevTools.instrument());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
