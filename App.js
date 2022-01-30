import React, {useState} from 'react';

import RootStack from "./navigators/RootStack";

import AppLoading from 'expo-app-loading'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {CredentialsContext} from './components/CredentialsContext'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [appReady, setAppReady] = useState(false)
  const [storedCredentials, setStoredCredentials] = useState('')

  const checkLoginCredentials = () => {
    AsyncStorage
        .getItem('nevskiyCredentials')
        .then((result) => {
          if (result !== null) {
            setStoredCredentials(JSON.parse(result))
          } else {
            setStoredCredentials(null)
          }
        })
        .catch(error => console.log(error))
  }

  async function loadApplication () {
    await checkLoginCredentials()
    await Font.loadAsync({
      'rbt-light': require('./assets/fonts/Roboto-Light.ttf'),
      'rbt-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'rbt-medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'rbt-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
  }

  if (!appReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    )
  } else {
    return (
    <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
      <RootStack />
    </CredentialsContext.Provider>
  )
  }

  
}
