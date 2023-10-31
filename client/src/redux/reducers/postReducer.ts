/* eslint-disable */
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    posts:[],
    post:{},
    error: null,
    isSuccess:false,
    loading: true,
}

const postReducer = createReducer(initialState, {

    userPostRequest: (state) => {
        state.loading = true;
    },

    userPostSuccess: (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.post = action.payload;
    },

    userPostFailed: (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = action.payload;
    },

    getAllPostsRequest: (state) => {
        state.loading = true;
    },

    getAllPostsSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    },

    getAllPostsFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearErrors: (state) => {
        state.error = null;
    }
    
});

export default postReducer;
