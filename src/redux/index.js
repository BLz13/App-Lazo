import { applyMiddleware, combineReducers, createStore } from "redux";

import { notesReducer } from "./reducer/index"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    notesReducer: notesReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));