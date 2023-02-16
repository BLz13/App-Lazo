import { noteTypes } from "../types/index";

const { ADD_NOTE, DELETE_NOTE } = noteTypes;

export const addNote = (data) => ({
    type: ADD_NOTE,
    payload: data
})

export const deleteNote = (data) => ({
    type: DELETE_NOTE,
    payload: data
})