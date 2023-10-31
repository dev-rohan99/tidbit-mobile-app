/* eslint-disable */
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
const { height } = Dimensions.get("window");

type Props = {
  navigation: any
};

const WelcomeScreen = ({ navigation }: Props) => {

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    }, []);
  
    const goToLogin = () => {
      navigation.navigate("Login");
    };
  
    const goToSignup = () => {
      navigation.navigate("Signup");
    };
  
    return (
      <ScrollView className="bg-white">
        <SafeAreaView className="bg-white h-[100%]">
          <View className="px-4 py-10 pb-4">
            <View className="relative h-[100%]">
              <ImageBackground 
                  style={{
                      height:height / 2
                  }} 
                  source={require("../assets/images/imageone.jpg")} 
                  resizeMode='contain'
              />
              
              <View className="mb-7">
                  <Text className="text-slate-800 text-[18px] font-bold text-center mb-2">Effortless Food & Grocery Delivery</Text>
                  <Text className="text-gray-400 text-[15px] font-medium text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
              </View>
              
              <View className="flex-row flex-[1] justify-center items-center">
                  <TouchableOpacity onPress={goToLogin} className="py-3 px-5 rounded-md bg-[#412fc9] mr-4">
                      <Text className="text-[19px] font-bold text-white">Login</Text>
                  </TouchableOpacity>
    
                  <TouchableOpacity onPress={goToSignup} className="py-3 px-5 rounded-md bg-[#373737]">
                      <Text className="text-[19px] font-bold text-white">Sign Up</Text>
                  </TouchableOpacity>
              </View>
    
              <TouchableOpacity className="mt-[80px] w-[100%]">
                <Text className="text-gray-400 text-[16px] font-normal text-center">Privacy & Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
}

export default WelcomeScreen;
