/* eslint-disable */
import axios from "axios";
import { Dispatch } from "redux";
import { URI } from "../URI";
import AsyncStorage from "@react-native-async-storage/async-storage";


// user signup
export const userSignup = (name: string, email: string, password: string, avatar: string, navigation: any) => async (dispatch: Dispatch) => {
    try{
        
        dispatch({
            type: "userSignupRequest"
        });

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        await axios.post(`${URI}/users/user-signup`, { name, email, password, avatar }, config).then((res) => {

            dispatch({
                type: "userRegisterSuccess",
                user: res.data.user
            });
            AsyncStorage.setItem("token", res.data.token);
            navigation.navigate("Login");
            
        }).catch((err) => {
            dispatch({
                type: "userRegisterFailed",
                payload: err.response.data.message
            });
        });

    }catch(err: any){
        dispatch({
            type: "userRegisterFailed",
            payload: err.response.data.message
        });
    }
}

// user load
export const loadUser = () => async (dispatch: Dispatch<any>) => {
    try{

        dispatch({
            type: 'userLoadRequest',
        });

        const token = await AsyncStorage.getItem('token');
        await axios.get(`${URI}/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res: any) => {
            dispatch({
                type: 'userLoadSuccess',
                payload: {
                    user: res.data.user,
                    token,
                },
            });
        }).catch((err: any) => {
            dispatch({
                type: 'userLoadFailed',
                payload: err.response.data.message,
            });
        });

    }catch(err: any){
        dispatch({
            type: 'userLoadFailed',
            payload: err.response.data.message,
        });
    }
}

// user login
export const userLogin = (email: string, password: string, navigation: any) => async (dispatch: Dispatch) => {
    try{
        
        dispatch({
            type: "userLoginRequest"
        });

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        await axios.post(`${URI}/users/user-login`, { email, password }, config).then((res) => {
            
            dispatch({
                type: "userLoginSuccess",
                user: res.data.user
            });
            AsyncStorage.setItem("token", res.data.token);
            // navigation.navigate("Home2");
            
        }).catch((err) => {
            dispatch({
                type: "userLoginFailed",
                payload: err.response.data.message
            });
        });

    }catch(err: any){
        dispatch({
            type: "userLoginFailed",
            payload: err.response.data.message
        });
    }
}

