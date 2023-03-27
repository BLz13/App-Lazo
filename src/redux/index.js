import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./note.slice";

export const store = configureStore({
    reducer: {
        notes: noteReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
});