import { combineReducers, createStore } from "redux";
import { reducerGeneral, reducerShopping, reducerToDo } from "./reducer/index"

const rootReducer = combineReducers({
    general: reducerGeneral,
    shopping: reducerShopping,
    toDo: reducerToDo,
});

export default createStore(rootReducer);