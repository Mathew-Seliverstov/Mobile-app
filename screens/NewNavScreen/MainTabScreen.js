import React from "react";
// Navigation...
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
// Screens...
import InfoScreen from "../InfoScreen";
import TrainersScreen from "../TrainersScreen";
import HomeScreen from "../HomeScreen";
import AppointmentScreen from "../AppointmentScreen";
import {Colors} from "../../components/styles";
import {Image, TouchableOpacity} from "react-native";
// Icons
import {Ionicons} from '@expo/vector-icons'

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
        >
            <Tab.Screen
                name="Info"
                component={InfoScreen}
                options={{
                    tabBarLabel: 'Инфо',
                    tabBarColor: '#5DCEC6',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-information-circle" color={color} size={26}  />
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Домой',
                    tabBarColor: '#ff5a40',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Appointment"
                component={AppointmentScreen}
                options={{
                    tabBarLabel: 'Записаться',
                    tabBarColor: '#469400',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-add-circle" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Trainers"
                component={TrainersScreen}
                options={{
                    tabBarLabel: 'Тренеры',
                    tabBarColor: '#1d766f',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-people" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#009387',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                title:'Overview',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Ionicons name="ios-menu" size={25} backgroundColor="#009387" />
                    </TouchableOpacity>

                )
            }} />
        </HomeStack.Navigator>
    )

}

export default  MainTabScreen
