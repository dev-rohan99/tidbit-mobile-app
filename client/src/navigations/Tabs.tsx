/* eslint-disable */
import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import PostScreen from '../screens/PostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { PlusIcon } from 'react-native-heroicons/outline';

type Props = {};

const Tabs = (props: Props) => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true }}>
            
            <Tab.Screen
                name="Home2"
                component={HomeScreen}
                options={({route}) => ({
                tabBarIcon: ({focused}) => (
                    <Image
                    source={{
                        uri: focused
                        ? 'https://cdn-icons-png.flaticon.com/128/3917/3917032.png'
                        : 'https://cdn-icons-png.flaticon.com/128/3917/3917014.png',
                    }}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: focused ? '#000' : '#444',
                    }}
                    />
                ),
                })}
            />

            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={({route}) => ({
                tabBarIcon: ({focused}) => (
                    <Image
                    source={{
                        uri: focused
                        ? 'https://cdn-icons-png.flaticon.com/128/5529/5529120.png'
                        : 'https://cdn-icons-png.flaticon.com/128/5069/5069149.png',
                    }}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: focused ? '#000' : '#444',
                    }}
                    />
                ),
                })}
            />

            <Tab.Screen
                name="Post"
                component={PostScreen}
                options={({route}) => ({
                tabBarStyle: { display: route.name === "Post" ? "none" : "flex" },
                tabBarIcon: ({focused}) => (
                    <View className="rounded-full" style={{
                        backgroundColor: "#412fc9",
                        padding: 9,
                        marginBottom: 25
                    }}>
                        <PlusIcon size={45} color="#fff"/>
                    </View>
                ),
                })}
            />

            <Tab.Screen
                name="Notifications"
                component={NotificationScreen}
                options={({route}) => ({
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image
                        source={{
                            uri: focused
                            ? 'https://cdn-icons-png.flaticon.com/128/9083/9083587.png'
                            : 'https://cdn-icons-png.flaticon.com/128/9083/9083442.png',
                        }}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#000' : '#444',
                        }}
                        />

                        <Text className="bg-[#412FC9] absolute top-[-5px] right-[-9px] rounded-full py-[1px] px-[2px]">99+</Text>
                    </View>
                ),
                })}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={({route}) => ({
                tabBarIcon: ({focused}) => (
                    <View className="w-[30px] h-[30px] p-[1.5px] object-cover rounded-full border-[2px] border-[#412FC9]">
                        <Image className="w-[100%] h-[100%] object-cover rounded-full" source={{uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}}/>
                    </View>
                ),
                })}
            />

        </Tab.Navigator>
    )
}

export default Tabs;
