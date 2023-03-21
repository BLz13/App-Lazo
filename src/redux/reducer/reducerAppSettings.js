import { actionsTypes } from "../types/index";

const { CHANGE_THEME } = actionsTypes;

const initialState = {
    appTheme: "light"
};

const reducerAppSettings = ( state = initialState, action) => {

    switch(action.type) {

        case CHANGE_THEME: {

            return {
                ...state,
                appTheme: () => { if (appTheme === "light") {"dark"} {"light"} }
            };

        }

        default : return(state);
    }
    
};

export default reducerAppSettings;