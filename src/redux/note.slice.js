import Note from "../models/notes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    general:[],
    shopping:[],
    toDo:[],
    selected: null
};

const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        addNote: (state, action) => {
            const { id, url, value } = action.payload.noteData;
            const category = action.payload.currentScreen;
            const newNote = new Note(id, value, url);
            switch (category) {
                case "general": return {
                    ...state,
                    general: [...state.general, newNote]
                };
                case "shopping": return {
                    ...state,
                    shopping: [...state.shopping, newNote]
                };
                case "toDo": return {
                    ...state,
                    toDo: [...state.toDo, newNote]
                };
                default: return state;
            };
        },
        deleteNote: (state, action) => {
            const { id, category } = state.selected;
            switch (category) {
                case "general": {
                    const indexNote = state.general.findIndex( (note) => (note.id === id) )
                    if (indexNote === -1) {
                        return(state)
                    } {
                        return {
                            ...state,
                            general: (state['general'].filter( (note) => note.id !== id))
                        };
                    };
                };
                case "shopping": {
                    const indexNote = state.shopping.findIndex( (note) => (note.id === id) )
                    if (indexNote === -1) {
                        return(state)
                    } {
                        return {
                            ...state,
                            shopping: (state['shopping'].filter( (note) => note.id !== id))
                        };
                    };
                };
                case "toDo": {
                    const indexNote = state.toDo.findIndex( (note) => (note.id === id) )
                    if (indexNote === -1) {
                        return(state)
                    } {
                        return {
                            ...state,
                            toDo: (state['toDo'].filter( (note) => note.id !== id))
                        };
                    };
                };
                default: return state;
            };
        },
        selectNote: (state, action) => {
            if (action.payload) {
                const { id, url, value } = action.payload.noteData;
                const category = action.payload.currentScreen;
                return {
                    ...state,
                    selected: {
                        id: id,
                        category: category,
                        value: value,
                        url: url
                    }
                }
            }
        }
    } 
});

export const { addNote, deleteNote, selectNote } = noteSlice.actions;

export default noteSlice.reducer;