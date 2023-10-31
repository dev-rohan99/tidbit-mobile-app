/* eslint-disable */
import { View, Image } from 'react-native';
import React from 'react';
import loding from "../assets/images/loading.gif";

const Loader = () => {
  return (
    <View className="w-[100%] h-[100%] bg-white flex justify-center items-center">
        <Image style={{ width: 200, height: 200 }} source={loding}/>
    </View>
  )
}

export default Loader;
