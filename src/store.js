import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {productoReducer} from './redux/service/productoReducer'
import { shoppingReducer } from './redux/reducers/shoppingReducer'


const rootReducer = combineReducers ({
    producto: productoReducer,
    carrito: shoppingReducer
   
})

export default function generateStore() {
    const store = createStore (rootReducer, composeWithDevTools (applyMiddleware(thunk) ) )
    return store;
}

