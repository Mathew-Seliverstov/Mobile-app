import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Colors} from "../components/styles";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import MainTabScreen from "../screens/NewNavScreen/MainTabScreen";

const Stack = createStackNavigator()

import {CredentialsContext} from "../components/CredentialsContext";

const RootStack = () => {
    return (
        <CredentialsContext.Consumer>
            {({storedCredentials}) => (
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyled: {
                                backgroundColor: 'transparent'
                            },
                            headerTintColor: Colors.tertiary,
                            headerTransparent: true,
                            headerTitle: '',
                            headerLeftContainerStyle: {
                                paddingLeft: 20
                            }
                        }}
                        // initialRouteName="Login"
                    >
                    {storedCredentials
                        ? (
                            <Stack.Screen name="Main" component={MainTabScreen} />
                        )
                        : (<>
                            <Stack.Screen name="LoginScreen" component={LoginScreen} />
                            <Stack.Screen name="SignupScreen" component={SignupScreen} />
                        </>)
                    }
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </CredentialsContext.Consumer>
    )
}

export default RootStack
