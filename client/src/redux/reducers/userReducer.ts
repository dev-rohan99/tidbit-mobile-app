/* eslint-disable */
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    loading: false,
    isLoading: false,
    user: {},
    users: [],
    token:"",
    error: null,
}

const userReducer = createReducer(initialState, {

    userSignupRequest: (state) => {
        state.loading = true;
        state.isAuthenticated = false;
    },

    userRegisterSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },

    userRegisterFailed: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    userLoginRequest: (state) => {
        state.isAuthenticated = false;
        state.loading = true;
    },

    userLoginSuccess: (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
    },

    userLoginFailed: (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload;
        state.user = {};
    },

    userLoadRequest: state => {
        state.loading = true;
        state.isAuthenticated = false;
    },

    userLoadSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
    },

    userLoadFailed: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
    },

    userLogoutRequest: (state, action) => {
        state.loading = true;
    },

    clearErrors: (state) => {
        state.error = null;
        state.isAuthenticated = false;
    }
    
});

export default userReducer;
