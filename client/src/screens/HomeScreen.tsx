/* eslint-disable */
import { ScrollView, SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ChatBubbleLeftRightIcon, EllipsisHorizontalIcon, HeartIcon, PaperAirplaneIcon, PlusIcon } from 'react-native-heroicons/outline';
import { CheckBadgeIcon, HeartIcon as SolidHeartIcon } from 'react-native-heroicons/solid';
import TopHeader from '../components/TopHeader';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
    navigation: any;
};

const HomeScreen = ({ navigation }: Props) => {

    const { user } = useSelector((state: any) => state.user);
    const { isSuccess, loading } = useSelector((state: any) => state.post);
    const dispatch = useDispatch();
    const [react, setReact] = useState(true);
        
    return (
        <SafeAreaView>
            <TopHeader/>

            <ScrollView>
                <View className="px-5 mt-3 bg-white py-4 shadow-lg rounded-b-3xl">
                    <ScrollView className="flex gap-2" horizontal={true}>

                        <View className="w-[90px] relative h-[100px] p-[1.5px] object-cover rounded-lg border-[4px] border-[#412FC9]">
                            <Image className="w-[100%] h-[100%] object-cover rounded-md" source={{uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"}}/>
                            <View className="absolute w-[100%] h-[100%] rounded-md bottom-0 left-0 flex flex-col justify-center bg-[#ffffff8b]">
                                <View className="rounded-full w-[30px] h-[30px] flex justify-center items-center mx-auto" style={{
                                        backgroundColor: "#412fc9",
                                        marginBottom: 2
                                }}>
                                    <PlusIcon size={20} color="#fff"/>
                                </View>
                                <Text className="text-[14px] font-semibold text-[#d9d4ff] text-center">Create</Text>
                            </View>
                        </View>

                        <View className="w-[90px] relative h-[100px] p-[1.5px] object-cover rounded-lg border-[4px] border-[#412FC9]">
                            <Image className="w-[100%] h-[100%] object-cover rounded-md" source={{uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"}}/>
                            <Image source={{uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"}} className="absolute top-2 left-2 w-[25px] h-[25px] rounded-full shadow-xl" />
                        </View>

                        <View className="w-[90px] relative h-[100px] p-[1.5px] object-cover rounded-lg border-[4px] border-[#412FC9]">
                            <Image className="w-[100%] h-[100%] object-cover rounded-md" source={{uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"}}/>
                            <Image source={{uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"}} className="absolute top-2 left-2 w-[25px] h-[25px] rounded-full shadow-xl" />
                        </View>

                        <View className="w-[90px] relative h-[100px] p-[1.5px] object-cover rounded-lg border-[4px] border-[#412FC9]">
                            <Image className="w-[100%] h-[100%] object-cover rounded-md" source={{uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"}}/>
                            <Image source={{uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"}} className="absolute top-2 left-2 w-[25px] h-[25px] rounded-full shadow-xl" />
                        </View>
                        
                    </ScrollView>
                </View>

                <View className="px-5 mt-3 bg-white py-4 shadow-lg rounded-3xl mx-4 mb-3">

                    <View>
                        <View className="flex flex-row justify-between items-center">
                            <View className="flex flex-row gap-3 items-center">
                                <TouchableOpacity className="w-[50px] h-[50px] p-[1.5px] object-cover rounded-full border-[2px] border-[#412FC9]">
                                    <Image className="w-[100%] h-[100%] object-cover rounded-full" source={{uri: user?.avatar?.url ? user?.avatar?.url : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}}/>
                                </TouchableOpacity>

                                <View>
                                    <View className="flex flex-row justify-start items-center">
                                        <Text className="text-[16px] font-bold text-[#000] mr-1 mb-[1px]">{user?.name ? user?.name : "Anonymous"}</Text>
                                        <CheckBadgeIcon size={21} color="#412FC9"/>
                                    </View>
                                    <Text className="text-[14px] font-semibold text-[#b5b5b5]">13 minutes ago</Text>
                                </View>
                            </View>

                            <TouchableOpacity className="py-2">
                                <EllipsisHorizontalIcon size={35} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View className="mt-3">
                            <Text className="text-[#000] text-[16px] font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur et mollitia dolorum, neque voluptas incidunt at animi harum unde, est quae labore, praesentium facere. Consequatur tempora aliquam quas corrupti?</Text>
                        </View>

                        <View className="flex flex-row justify-between gap-2 mt-3">
                            <Image className="w-[30%] h-[300px] object-cover rounded-lg" source={{uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"}}/>
                            <Image className="w-[30%] h-[300px] object-cover rounded-lg" source={{uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"}}/>
                            <TouchableOpacity className="w-[30%] h-[300px] relative">
                                <Image className="w-[100%] h-[100%] object-cover rounded-lg" source={{uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"}}/>
                                <View className="w-[100%] h-[100%] absolute bg-[#ffffffa9] top-0 bottom-0 left-0 flex justify-center items-center">
                                    <PlusIcon size={45} color="#fff"/>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View className="flex gap-1 flex-row justify-between items-center pt-5 pb-2">
                            <View className="flex flex-row justify-start items-center">
                                <TouchableOpacity className="flex gap-1 flex-row justify-start items-center mr-5">
                                    {react ? <SolidHeartIcon size={35} color="#412FC9"/> : <HeartIcon size={35} color="#000"/>}
                                    <Text className="text-[#000] text-[16px] font-bold">150</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate("PostComment")} className="flex gap-1 flex-row justify-start items-center">
                                    <ChatBubbleLeftRightIcon size={33} color="#000"/>
                                    <Text className="text-[#000] text-[16px] font-bold">44</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity className="flex gap-1 flex-row justify-end items-center">
                                <Text className="text-[#000] text-[16px] font-bold">1k</Text>
                                <View className="rotate-[-20deg] mb-1">
                                    <PaperAirplaneIcon size={30} color="#000"/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;
