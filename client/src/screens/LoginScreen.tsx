/* eslint-disable */
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform, Alert, ToastAndroid } from 'react-native';
import React, { useState, useEffect } from 'react';
import { EnvelopeIcon, EyeSlashIcon, EyeIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, userLogin } from '../redux/actions/userAction';


type Props = {
    navigation: any
}; 

const LoginScreen = ({ navigation }: Props) => {

    const [hidePassword, setHidePassword] = useState(true);
    const [input, setInput] = useState({
        email : "",
        password : ""
    });
    const dispatch = useDispatch();
    const {error, isAuthenticated} = useSelector((state: any) => state.user);
    
    const goToSignup = () => {
        navigation.navigate("Signup");
    };

    const handleInputChange = (name: string, value: string) => {
        setInput((prevState) => ({
            ...prevState,
            [name] : value
        }));
    }
    
    const userLoginFormSubmit = () => {
        userLogin(input.email, input.password, navigation)(dispatch);
    };

    useEffect(() => {
        if(error){
            if(Platform.OS === "android"){
                ToastAndroid.show("Email or password not matching!", ToastAndroid.LONG);
            }else{
                Alert.alert("Email or password not matching!");
            }
        }
        if(isAuthenticated){
            loadUser()(dispatch);
            if(Platform.OS === "android"){
                ToastAndroid.show("Welcome back!", ToastAndroid.LONG);
            }else{
                Alert.alert("Welcome back!");
            }
        }
    }, [error, isAuthenticated]);

    return (
        <SafeAreaView className="bg-white h-[100%]">
        
            <View>
                <ImageBackground className="w-[100%]" 
                style={{
                    height:150,
                }} 
                source={require("../assets/images/loginheaderImg.jpg")} 
                resizeMode='cover'
                />
            </View>

            <ScrollView>
                <View className="px-4 pb-4">
                <View className="mt-[50px]">
                    
                    <View className="mb-14">
                        <Text className="text-slate-800 text-[18px] font-bold text-center mb-2">Effortless Food & Grocery Delivery</Text>
                        <Text className="text-gray-400 text-[15px] font-medium text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    </View>
                    
                    <View>
                        <View className="flex-row items-center bg-gray-200 p-2 px-3 rounded-md mb-3">
                            <EnvelopeIcon size={25} color="#000000"/>
                            <TextInput name="email" value={input.email} onChangeText={(value) => handleInputChange("email", value)} placeholderTextColor="#000000" className="p-2 text-[17px] w-[100%] text-[#000000]" placeholder="Email address" keyboardType="default"/>
                        </View>

                        <View className="flex-row items-center bg-gray-200 p-2 px-3 rounded-md mb-3">
                            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>{hidePassword ? <EyeSlashIcon size={25} color="#000000"/> : <EyeIcon size={25} color="#000000"/>}</TouchableOpacity>
                            <TextInput name="password" value={input.password} onChangeText={(value) => handleInputChange("password", value)} placeholderTextColor="#000000" className="p-2 text-[17px] w-[100%] text-[#000000]" placeholder="Password" keyboardType="default"  secureTextEntry={hidePassword} />
                        </View>

                        <TouchableOpacity onPress={userLoginFormSubmit} className="py-4 px-5 w-[100%] rounded-md bg-[#412fc9] mr-4">
                            <Text className="text-[19px] font-bold text-center text-white">Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="mt-7 flex flex-row justify-center">
                        <Text className="text-gray-400 text-[15px] font-medium">Don't have a account?</Text>
                        <TouchableOpacity onPress={goToSignup} className="ml-2">
                            <Text className="text-[#412fc9] font-medium">Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="mt-8 relative h-[100px]">
                        <View className="absolute bottom-0 w-[100%]">
                            {/* <Text className="text-gray-400 text-[15px] font-medium text-center">Or Login With</Text>

                            <View className="flex flex-row justify-between mt-4">

                            <TouchableOpacity className="w-[23.5%] py-3 px-5 bg-[#EB493B] flex justify-center items-center rounded-xl">
                                <FaGoogle className="text-2xl" />
                            </TouchableOpacity>

                            <TouchableOpacity className="w-[23.5%] py-3 px-5 bg-[#1F7BF2] flex justify-center items-center rounded-xl">
                                <FcGoogle className="text-2xl" />
                            </TouchableOpacity>

                            <TouchableOpacity className="w-[23.5%] py-3 px-5 bg-[#249EF0] flex justify-center items-center rounded-xl">
                                <FcGoogle className="text-2xl"/>
                            </TouchableOpacity>

                            <TouchableOpacity className="w-[23.5%] py-3 px-5 bg-[#0B6A9A] flex justify-center items-center rounded-xl">
                                <FcGoogle className="text-2xl" />
                            </TouchableOpacity>

                            </View> */}
                        </View>
                    </View>

                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen;
