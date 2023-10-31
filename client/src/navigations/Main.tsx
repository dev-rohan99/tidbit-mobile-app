/* eslint-disable */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import PostCommentScreen from '../screens/PostCommentScreen';

type Props = {};

const Main = (props: Props) => {

    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="PostComment" component={PostCommentScreen} />
      </Stack.Navigator>
    )
}

export default Main;
