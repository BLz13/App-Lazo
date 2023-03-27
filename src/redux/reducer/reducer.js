import { actionsTypes } from "../types/index";

const { SELECT_NOTE, ADD_NOTE, DELETE_NOTE } = actionsTypes;

const initialState = {
    general:[],
    shopping:[],
    toDo:[],
    selected: null
};

const notesReducer = ( state = initialState, action) => {

    switch(action.type) {

        case SELECT_NOTE: {

            return {
                ...state,
                selected: action.payload
            };

        }
    
        case  ADD_NOTE: {

            switch (action.payload.currentScreen) {
                case "general": return {
                    ...state,
                    general: [...state.general, action.payload.noteData]
                };
                case "shopping": return {
                    ...state,
                    shopping: [...state.shopping, action.payload.noteData]
                };
                case "toDo": return {
                    ...state,
                    toDo: [...state.toDo, action.payload.noteData]
                };
                default: return {
                    ...state,
                    general: [...state.general, action.payload.noteData]
                };
            };

        };

        case  DELETE_NOTE: {

            switch (state.selected.currentScreen) {
                case "general": {
                    const indexNote = state.general.findIndex( (note) => (note.id === state.selected.noteData.id) )
                    console.log(indexNote);
                    if (indexNote === -1) {
                        return(state)
                    } {
                        return {
                            ...state,
                            general: (state['general'].filter( (note) => note.id !== state.selected.noteData.id))
                        };
                    };
                };
                case "shopping": {
                    const indexNote = state.shopping.findIndex( (note) => (note.id === state.selected.noteData.id) )
                    if (indexNote === -1) {
                        return(state)
                    } {
                        return {
                            ...state,
                            shopping: (state['shopping'].filter( (note) => note.id !== state.selected.noteData.id))
                        };
                    };
                };
                case "toDo": {
                    const indexNote = state.toDo.findIndex( (note) => (note.id === state.selected.noteData.id) )
                    if (indexNote === -1) {
                        return(state)
                    } {
                        return {
                            ...state,
                            toDo: (state['toDo'].filter( (note) => note.id !== state.selected.note.id))
                        };
                    };
                };
                default: {
                    const indexNote = state.general.findIndex( (note) => (note.id === state.selected.note.id) )
                    console.log(indexNote);
                    if (indexNote === -1) {
                        return(state)
                    } {
                        return {
                            ...state,
                            general: (state['general'].filter( (note) => note.id !== state.selected.note.id))
                        };
                    };
                };
            };
        };
        
        default : return(state);
    }
    
};

export default notesReducer;