import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import profile from '../../assets/img/profile.jpg'

// Styles...
import {
    Container,
    ContainerTitle,
    CardsContainer
} from './styles'
import TrainerCard from "./TrainerCard";

const TrainersScreen = () => {
    return (
        <Container>
            <ContainerTitle>Наши тренеры:</ContainerTitle>
            <CardsContainer>
                <TrainerCard img={profile} name="Евгений" lastName="Понасенков" tel="+7(991)-021-3854" email="matvansel@gmail.com" />
                <TrainerCard img={profile} name="Евгений" lastName="Понасенков" tel="+7(991)-021-3854" email="matvansel@gmail.com" />
            </CardsContainer>
        </Container>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    }
})

export default TrainersScreen
