import { actionsTypes } from "../types/index";

const { SELECT_NOTE, ADD_NOTE, DELETE_NOTE } = actionsTypes;

const initialState = {
    toDoNotes:[],
    selectedNote: null,
};

const reducerToDo = ( state = initialState, action) => {

    switch(action.type) {

        case SELECT_NOTE: {

            return {
                ...state,
                selected: action.payload.note
            };

        }
        
        case  ADD_NOTE: {

            return {
                ...state,
                toDoNotes: [...state.toDoNotes, action.payload]
            };

        }

        case  DELETE_NOTE: {

            const indexNote = state.toDoNotes.findIndex(
                (note) => (note.id === state.selected.id)
            );

            if (indexNote === -1) { return(state) };
            
            return{
                ...state,
                toDoNotes: (state['toDoNotes'].filter( (note) => note.id !== state.selected.id))
            };
            
        }

        default : return(state);
    }
    
};

export default reducerToDo;