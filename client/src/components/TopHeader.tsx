/* eslint-disable */
import { TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import { Bars3BottomRightIcon, ChatBubbleOvalLeftEllipsisIcon } from 'react-native-heroicons/outline';

type Props = {
    navigation: any;
};

const TopHeader = ({ navigation }: Props) => {

    
    return (
        <View className="flex flex-row px-5 justify-between items-center shadow-lg bg-white py-3">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text className="text-[26px] text-[#412FC9] font-bold">TIDBIT</Text>
            </TouchableOpacity>

            <View className="flex flex-row justify-end items-center gap-x-3">
                <TouchableOpacity>
                    <ChatBubbleOvalLeftEllipsisIcon size={35} color="#000"/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Bars3BottomRightIcon size={35} color="#000"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TopHeader