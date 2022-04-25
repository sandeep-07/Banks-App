import {  combineReducers, createStore } from "redux";

import favouritesReducer from "./reducers/favouritesReducer";
import banksReducer from "./reducers/banksReducer";
const rootReducer=combineReducers({banks:banksReducer,favourites:favouritesReducer})
const store = createStore(rootReducer)
export default store