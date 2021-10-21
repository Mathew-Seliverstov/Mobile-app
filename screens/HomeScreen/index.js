import React from 'react'
import {Text, View, FlatList, StatusBar} from 'react-native'
// Icons...
import emptyCalendar from '../../assets/img/emptyCalendar.png'
// Styled Components...
import {
    Container,
    DefaultContainer,
    DefaultTitle,
    DefaultImg
} from './styles'

import AppointmentCard from "./AppointmentCard";

const HomeScreen = ({list}) => {
    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
        <Container>
            {!list
                ? <DefaultContainer>
                    <DefaultTitle>У вас нет записей...</DefaultTitle>
                    <DefaultImg source={emptyCalendar} />
                </DefaultContainer>
                : <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={list}
                    renderItem={({item}) => (
                    <AppointmentCard title={item.title} />
                )} />
            }
        </Container>
        </>
    )
}

export default  HomeScreen
