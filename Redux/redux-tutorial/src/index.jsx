import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {thunk} from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App'
import rootReducer from './reducers'

import './index.css'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
)