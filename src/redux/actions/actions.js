import { actionsTypes } from "../types/index";

const { SELECT_NOTE, ADD_NOTE, DELETE_NOTE } = actionsTypes;

export const selectNote = (data) => ({
    type: SELECT_NOTE,
    payload: data
});

export const addNote = (data) => ({
    type: ADD_NOTE,
    payload: data
});

export const deleteNote = () => ({
    type: DELETE_NOTE,
});