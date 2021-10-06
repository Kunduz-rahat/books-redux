import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {cartReducer} from "./reducers/cartReducer";
import {catalogReducer} from "./reducers/catalogReducer";
import {composeWithDevTools} from "redux-devtools-extension";



export const store = (createStore(combineReducers({
  cart : cartReducer,
  catalog : catalogReducer
}), composeWithDevTools(applyMiddleware(thunk))))