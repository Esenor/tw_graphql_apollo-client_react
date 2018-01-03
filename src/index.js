import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css'
import ApplicationContainer from './components/containers/ApplicationContainer'
import reducer from './store/reducers'
import { getCustomersList } from './store/actions/async'

let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><ApplicationContainer /></Provider>, document.getElementById('root'))

store.dispatch(getCustomersList())
