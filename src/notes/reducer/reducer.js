import { noteTypes } from "../types/index";

const { ADD_NOTE, DELETE_NOTE } = noteTypes;

const initialState = {
    general: [],
    shopping: [],
    toDo: []
};

const notesReducer = ( state = initialState, action) => {

    switch(action.type) {
    
        case  ADD_NOTE: {

            const { payload } = action;

            const { categoryId } = payload.categoryId;

            return{
                ...state,
                [categoryId]: this.props[categoryId].push(payload.note)
            };

        }

        case  DELETE_NOTE: {

            const { payload } = action;

            const { categoryId } = payload.categoryId;

            const indexNote = state[categoryId].findIndex(
                (note) => (note.id === payload.note.noteId)
            );

            if (indexNote === -1) { return(state) };
            
            return{
                ...state,
                [categoryId]: [...state[categoryId], (prevItemsList) => prevItemsList.filter( (note) => note.id !== action.note.noteId)]
            };
            
        }

        default : return(state);
    }
    
};

export default notesReducer;