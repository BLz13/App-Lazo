import { getNotes, insertNote } from "../db";

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
            const newNote = new Note(
                action.payload.id,
                action.payload.category,
                action.payload.value,
                action.payload.image
            );
            switch (newNote.category) {
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
                const { id, category, url, value } = action.payload;
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
        },
        setNotes: (state, action) => {
            const generalNotes = [];
            const shoppingNotes = [];
            const toDoNotes = [];  
            action.payload.map( (note) => {              
                switch (note.category) {
                    case "general": return (generalNotes.push(note));
                    case "shopping": return (shoppingNotes.push(note));
                    case "toDo": return (toDoNotes.push(note));
                    default: break;
                };
            });            
            return state = {
                general: generalNotes,
                shopping: shoppingNotes,
                toDo: toDoNotes,
                selected: null
            };
        }
    }
});

export const { addNote, deleteNote, selectNote, setNotes } = noteSlice.actions;

export default noteSlice.reducer;

export const saveNote = (payload) => {
    const {category, value, image} = payload;
    return async (dispatch) => {
        try {
            const result = await insertNote(category, value, image);
            dispatch(addNote({ id: result.insertId, category, value, image }))
        }
        catch (error) {
            console.log("error", error);
            throw error;
        };
    };
};

export const loadNotes = () => {
    return async (dispatch) => {
        try {
            const result = await getNotes();
            dispatch(setNotes(result?.rows?._array))
        }
        catch (error) {
            console.log("error", error);
            throw error;
        };
    };
};