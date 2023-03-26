import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducerGeneral, reducerShopping, reducerToDo } from "./reducer/index"

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    general: reducerGeneral,
    shopping: reducerShopping,
    toDo: reducerToDo
});

export default createStore(rootReducer, applyMiddleware(thunk));