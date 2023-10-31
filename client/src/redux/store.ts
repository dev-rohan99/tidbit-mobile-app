/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";


const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    }),
});


export default store;
