import { createStore, applyMiddleware } from "redux"
import promiseMiddleware from "redux-promise-middleware"

import productReducer from "./productReducer"


const store = createStore(productReducer, applyMiddleware(promiseMiddleware))

export default store