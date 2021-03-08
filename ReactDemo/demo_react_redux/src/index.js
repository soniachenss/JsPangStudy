import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import store from './store'

import { Provider } from 'react-redux'

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)


ReactDOM.render(App,document.getElementById('root'));