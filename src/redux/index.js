import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducerAppSettings, reducerGeneral, reducerShopping, reducerToDo } from "./reducer/index"

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    general: reducerGeneral,
    shopping: reducerShopping,
    toDo: reducerToDo,
    appSettings: reducerAppSettings
});

export default createStore(rootReducer, applyMiddleware(thunk));