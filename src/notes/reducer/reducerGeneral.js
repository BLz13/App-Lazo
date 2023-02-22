import { actionsTypes } from "../types/index";

const { SELECT_NOTE, ADD_NOTE, DELETE_NOTE } = actionsTypes;

const initialState = {
    generalNotes:[],
    selected: null,
};

const reducerGeneral = ( state = initialState, action) => {

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
                generalNotes: [...state.generalNotes, action.payload]
            };

        }

        case  DELETE_NOTE: {

            console.log(state.generalNotes);

            const indexNote = state.generalNotes.findIndex(
                (note) => (note.id === state.selected.id)
            );

            if (indexNote === -1) { return(state) };
            
            return{
                ...state,
                generalNotes: (state['generalNotes'].filter( (note) => note.id !== state.selected.id))
            };
            
        }

        default : return(state);
    }
    
};

export default reducerGeneral;