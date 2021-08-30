import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import reducer from './reducers'
import middleware from './middleware'

//creating a store and passing root reducer and middleware
const store = createStore(reducer, middleware)

ReactDOM.render(
    //wrapping main App inside provider that stick to store in this context
    <BrowserRouter>
    <Provider store={store} >
        <App />
        </Provider>
        </BrowserRouter>,
  document.getElementById('root')
);
