import { actionsTypes } from "../types/index";

const { SELECT_NOTE, ADD_NOTE, DELETE_NOTE } = actionsTypes;

const initialState = {
    shoppingNotes:[],
    selectedNote: null,
};

const reducerShopping = ( state = initialState, action) => {

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
                shoppingNotes: [...state.shoppingNotes, action.payload]
            };

        }

        case  DELETE_NOTE: {

            const indexNote = state.shoppingNotes.findIndex(
                (note) => (note.id === state.selected.id)
            );

            if (indexNote === -1) { return(state) };
            
            return{
                ...state,
                shoppingNotes: ((prevItemsList) => prevItemsList.filter( (note) => note.id !== state.selected.id))
            };
            
        }

        default : return(state);
    }
    
};

export default reducerShopping;