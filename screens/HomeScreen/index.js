import React, {useState, useContext, useEffect} from 'react'
import {Text, View, FlatList, StatusBar, ActivityIndicator} from 'react-native'
import axios from 'axios'
// Icons...
import emptyCalendar from '../../assets/img/emptyCalendar.png'
// Styled Components...
import {
    Container,
    DefaultContainer,
    DefaultTitle,
    DefaultImg,
    Header
} from './styles'

import { CredentialsContext } from '../../components/CredentialsContext'
import AppointmentCard from "./AppointmentCard";


const HomeScreen = () => {
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext)
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    function getList() {
      const _id = storedCredentials.appointments
      
      axios
        .post('https://mighty-chamber-57023.herokuapp.com/appointment/userall', {_id})
        .then(res => {
          setList(res.data.data.data)
        })
        .catch(err => console.log('Error: ', err))
        .finally(() => setIsLoading(false))
    }
    // useEffect(() => {
      getList();
      // () => {};
    // }, [])
    
    if (isLoading) {
      return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="#0f0f0f" size={48} />
        </View>
    } else if (!isLoading) {
      return (
        <Container>
          <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
          {list.length > 0
            ? <FlatList
                keyExtractor={(item) => item.date + item.time + item.training}
                data={list}
                renderItem={item => (
                  <AppointmentCard item={item.item} appointmentId={storedCredentials.appointments}/>
                )}
                style={{flex: 1, width: '100%'}} 
              />
            : <DefaultContainer>
                <DefaultTitle>У вас нет записей...</DefaultTitle>
                <DefaultImg source={emptyCalendar} />
              </DefaultContainer>
            }
          </Container>
      )
    }
}

export default  HomeScreen
