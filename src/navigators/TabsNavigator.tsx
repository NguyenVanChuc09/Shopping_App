import { View, Text } from 'react-native'
import React from 'react'

import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Icon from 'react-native-vector-icons/FontAwesome'
import { CompositeScreenProps } from '@react-navigation/native';
import { RootStackParamList, RootStackScreenProps } from './RootNavigator';

export type TabsStackParamList = {
    Home: undefined;
    Cart: undefined;
    Notification: undefined;
    Profile: undefined;
};

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

export type TabsStackScreenProps<T extends keyof TabsStackParamList> = CompositeScreenProps<
    BottomTabScreenProps<TabsStackParamList, T>,
    RootStackScreenProps<"TabsStack">
>;

export default function TabsNavigator() {
    return (
        <TabsStack.Navigator screenOptions={{
            tabBarShowLabel: false
        }}>
            <TabsStack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false, tabBarIcon({ size, color }) {
                        return <Icon name='home' size={20} color={color} />
                    }
                }} />
            <TabsStack.Screen
                name='Cart'
                component={CartScreen}
                options={{
                    headerShown: false, tabBarIcon({ size, color }) {
                        return <Icon name='shopping-cart' size={20} color={color} />
                    }
                }} />
            <TabsStack.Screen
                name='Notification'
                component={NotificationScreen}
                options={{
                    headerShown: false, tabBarIcon({ size, color }) {
                        return <Icon name='bell' size={20} color={color} />
                    }
                }} />
            <TabsStack.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    headerShown: false, tabBarIcon({ size, color }) {
                        return <Icon name='user' size={20} color={color} />
                    }
                }} />
        </TabsStack.Navigator>
    )
}

const Example = () => {
    return <View />
};