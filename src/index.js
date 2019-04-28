import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import ToDoApp from './components/TodoApp'
import rootReducer from './reducers'
import logger from 'redux-logger'


//ReactとReduxを結びつける。

let store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <ToDoApp />
    </Provider>,
    document.getElementById('app')
);
