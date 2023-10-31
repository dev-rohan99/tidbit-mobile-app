/* eslint-disable */
import axios from "axios";
import { Dispatch } from "redux";
import { URI } from "../URI";
import AsyncStorage from "@react-native-async-storage/async-storage";

// user post create
export const userPostCreateAction = (title: string, image: string, user: object, replies: Array<{ title: string; image: string; user: any }>) => async (dispatch: Dispatch) => {
    try{

        dispatch({
            type: "userPostRequest"
        });

        const token = await AsyncStorage.getItem("token");
        await axios.post(`${URI}/posts/create-post`, { title, image, user, replies }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {

            dispatch({
                type: "userPostSuccess",
                payload: res.data.post
            });

        }).catch((err) => {
            dispatch({
                type: "userPostFailed",
                payload: err.response.data.message
            });
        });

    }catch(err: any){
        dispatch({
            type: "userPostFailed",
            payload: err.response.data.message
        });
    }
}

// user post create
export const userAllPostGetAction = () => async (dispatch: Dispatch) => {
    try{

        dispatch({
            type: "getAllPostsRequest"
        });

        const token = await AsyncStorage.getItem("token");
        await axios.post(`${URI}/posts/all-post`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {

            dispatch({
                type: "getAllPostsSuccess",
                payload: res.data.posts
            });

        }).catch((err) => {
            dispatch({
                type: "getAllPostsFailed",
                payload: err.response.data.message
            });
        });

    }catch(err: any){
        dispatch({
            type: "getAllPostsFailed",
            payload: err.response.data.message
        });
    }
}
