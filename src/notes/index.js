import { combineReducers, createStore } from "redux";

import { notesReducer } from "./reducer/index"

const rootReducer = combineReducers({
    notes: notesReducer,
});

export default createStore(rootReducer);