/* eslint-disable */
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, Alert, ScrollView, Image, Platform, ToastAndroid, StyleSheet } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, IdentificationIcon, PhoneIcon, UserCircleIcon, UserIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, userSignup } from '../redux/actions/userAction';

type Props = {
  navigation: any
};

const SignupScreen = ({ navigation }: Props) => {

  const [hidePassword, setHidePassword] = useState(true);
  const [input, setInput] = useState({
    name : "",
    email : "",
    password : ""
  });
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();
  const {error, isAuthenticated} = useSelector((state: any) => state.user);

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  useEffect(() => {
    if(error){
      if(Platform.OS === "android"){
        ToastAndroid.show(error, ToastAndroid.LONG);
      }else{
        Alert.alert(error);
      }
    }
    if(isAuthenticated){
      loadUser()(dispatch);
    }
  }, [error, isAuthenticated]);

  const handleInputChange = (name: string, value: string) => {
    setInput((prevState) => ({
        ...prevState,
        [name] : value
    }));
  }

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
    }).then((image: ImageOrVideo | null) => {
      if(image){
        setAvatar(`data:image/jpeg;base64,${image.data}`);
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  const userSignUpFormSubmit = () => {
    
    if(!input.name || !input.email || !input.password || !avatar){
      if(Platform.OS === "android"){
        ToastAndroid.show("Please fill the all fields and upload avatar", ToastAndroid.LONG);
      }else{
        Alert.alert("Please fill the all fields and upload avatar");
      }
    }else{
      userSignup(input.name, input.email, input.password, avatar, navigation)(dispatch);
    }

  };

  return (
    <SafeAreaView className="bg-white h-[100%]">
      
      <View>
        <ImageBackground className="w-[100%]" 
          style={{
              height:150,
          }} 
          source={require("../assets/images/signupheaderimg.jpg")} 
          resizeMode='cover'
        />
      </View>

      <ScrollView>
        <View className="px-4 pb-4">
          <View className="mt-[50px]">
            
            <View className="mb-14">
                <Text className="text-slate-800 text-[18px] font-bold text-center mb-2">Connect with Peoples</Text>
                <Text className="text-gray-400 text-[15px] font-medium text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            </View>
            
            <View className="">
              <View className="flex-row items-center text-slate-800 bg-gray-200 p-2 px-3 rounded-md mb-3">
                <IdentificationIcon size={25} color="#000000"/>
                <TextInput placeholderTextColor="#000000" name="name" value={input.name} onChangeText={(value) => handleInputChange("name", value)} className="p-2 text-[17px] w-[100%] text-slate-800" placeholder="Full Name" keyboardType="default"/>
              </View>

              <View className="flex-row items-center bg-gray-200 p-2 px-3 rounded-md mb-3">
                <EnvelopeIcon size={25} color="#000000"/>
                <TextInput name="email" value={input.email} onChangeText={(value) => handleInputChange("email", value)} className="p-2 text-[17px] w-[100%] text-slate-800" placeholder="Email address" placeholderTextColor="#000000" keyboardType="email-address"/>
              </View>

              <View className="flex-row items-center bg-gray-200 text-slate-800 p-2 px-3 rounded-md mb-3">
                <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>{hidePassword ? <EyeSlashIcon size={25} color="#000000"/> : <EyeIcon size={25} color="#000000"/>}</TouchableOpacity>
                <TextInput placeholderTextColor="#000000" name="password" value={input.password} onChangeText={(value) => handleInputChange("password", value)} className="p-2 text-[17px] w-[100%] text-slate-800 placeholder:text-slate-800" placeholder="Password" keyboardType="default" secureTextEntry={hidePassword}/>
              </View>

              <TouchableOpacity
                className="flex-row items-center bg-gray-200 p-4 px-3 rounded-md mb-3"
                onPress={uploadImage}>
                <Image
                  source={{
                    uri: avatar
                      ? avatar
                      : 'https://cdn-icons-png.flaticon.com/128/568/568717.png',
                  }}
                  className="w-[25px] h-[25px] rounded-full"
                />
                <Text className="text-slate-800 text-[17px] pl-2">Upload image</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={userSignUpFormSubmit} className="py-4 px-5 w-[100%] rounded-md bg-[#412fc9] mr-4">
                  <Text className="text-[19px] font-bold text-center text-white">Sign Up</Text>
              </TouchableOpacity>
            </View>

            <View className="mt-7 flex flex-row justify-center">
              <Text className="text-gray-400 text-[15px] font-medium">Already have a account?</Text>
              <TouchableOpacity onPress={goToLogin} className="ml-2">
                <Text className="text-[#412fc9] font-medium">Login</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignupScreen;
