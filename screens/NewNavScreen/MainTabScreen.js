import React, { useState, useContext } from 'react';
// Navigation...
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Screens...
import InfoScreen from '../InfoScreen';
import ProfileScreen from '../ProfileScreen';
import HomeScreen from '../HomeScreen';
import AppointmentScreen from '../AppointmentScreen';
import EditProfileScreen from '../EditProfileScreen';
import { Colors } from '../../components/styles';
import { Image, Text, TouchableOpacity, View } from 'react-native';
// Icons
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../../components/CredentialsContext';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import KebabMenu from '../../components/KebabMenu';
import axios from 'axios';

import {DrawerContent} from '../../components/DrawerContent'

const ProfileStack = createStackNavigator()
const Stack = createDrawerNavigator()

// const Tab = createMaterialBottomTabNavigator();

// const MainTabScreen = ({ navigation }) => {
//   return (
//     <Tab.Navigator initialRouteName="Home" activeColor="#fff">
//       <Tab.Screen
//         name="ProfileStack"
//         component={ProfileStackScreen}
//         options={{
//           tabBarLabel: 'Профиль',
//           tabBarColor: '#0a0a0a',
//           tabBarIcon: ({ color }) => <Ionicons name="ios-person" color={color} size={26} />,
//         }}
//       />
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Домой',
//           tabBarColor: '#0f0f0f',
//           tabBarIcon: ({ color }) => <Ionicons name="ios-home" color={color} size={26} />,
//         }}
//       />
//       <Tab.Screen
//         name="Appointment"
//         component={AppointmentScreen}
//         options={{
//           tabBarLabel: 'Записаться',
//           tabBarColor: '#141414',
//           tabBarIcon: ({ color }) => <Ionicons name="ios-add-circle" size={26} color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="Info"
//         component={InfoScreen}
//         options={{
//           tabBarLabel: 'Инфо',
//           tabBarColor: '#1c1c1c',
//           tabBarIcon: ({ color }) => <Ionicons name="ios-information-circle" color={color} size={26} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const Profile = createStackNavigator();
// const Drawer = createDrawerNavigator()

// const ProfileStackScreen = () => {
//   const [visible, setVisible] = useState(false);
//   const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

//   const clearLogin = () => {
//     AsyncStorage.removeItem('nevskiyCredentials')
//       .then(() => setStoredCredentials(''))
//       .catch((err) => console.log(err));
//   };

//   const deleteAcc = () => {
//     axios
//       .post('https://mighty-chamber-57023.herokuapp.com/user/delete', {
//         _id: storedCredentials._id,
//         appointmentId: storedCredentials.appointments,
//       })
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));
//     AsyncStorage.removeItem('nevskiyCredentials')
//       .then(() => setStoredCredentials(''))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <Drawer.Navigator 
//       initialRouteName="Profile"
//       screenOptions={{
//         drawerActiveTintColor: '#fff',
//         drawerActiveBackgroundColor: Colors.brand
//       }}
//     >
//       <Drawer.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={({ navigation }) => ({
//           headerRight: () => (
//             <KebabMenu
//               setVisible={setVisible}
//               visible={visible}
//               navigation={navigation}
//               clearLogin={clearLogin}
//               deleteAcc={deleteAcc}
//             />
//           ),
//           title: 'Профиль',
//           headerTintColor: '#0f0f0f'
//         })}
//       />
//       <Profile.Screen
//         name="EditProfile"
//         component={EditProfileScreen}
//         options={({ navigation }) => ({
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 10}}>
//               <Ionicons name="ios-arrow-back-sharp" color="#0f0f0f" size={26} />
//             </TouchableOpacity>
//           ),
//           title: 'Редактировать профиль',
//           headerTintColor: '#0f0f0f'
//         })}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default MainTabScreen;
const MainTabScreen = () => {
  return (
    <ProfileStack.Navigator initialRouteName='Main'>
      <ProfileStack.Screen component={EditProfileScreen} name="EditProfile" options={{headerTitle: 'Редактировать'}}/>
      <ProfileStack.Screen component={ProfileStackScreen} name="Main" options={{headerShown: false}}/>
    </ProfileStack.Navigator>
  )
}
const ProfileStackScreen = () => {
  return (
    <Stack.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Stack.Screen component={HomeScreen} name="Home" options={{headerTitle: 'Главная'}} />
			<Stack.Screen component={AppointmentScreen} name="Appointment" options={{headerTitle: 'Запись'}} />
			<Stack.Screen component={InfoScreen} name="Info" options={{headerTitle: 'Инфо'}} />
    </Stack.Navigator>
  )
}

export default MainTabScreen
