import React, {useEffect, useRef, useState} from 'react'
import {Linking, Text, View, StyleSheet, Platform, Modal, Image, TouchableOpacity, Animated} from 'react-native'
// Styled Components...
import {
    Container,
    ContainerTitle,
    Contact,
    Link,
    Label,
    Bold,
    MapWrapper,
    StyledButton,
    ModalBG,
    ModalContainer,
    ModalHeader
} from './styles'
// Links
import openUrl from '../../utils/Links'
import {Colors} from "../../components/styles";
// Icons...
import {Ionicons} from '@expo/vector-icons'
import {StatusBar} from "expo-status-bar";
// Map
import MapView, {Callout, Marker} from "react-native-maps";

import ModalMap from "./Modal";

const InfoScreen = () => {
    return (
        <Container>
            <ContainerTitle>Свяжитесь с нами:</ContainerTitle>

            <Contact onPress={() => openUrl('info@ipsc-nevskiy.ru', 'email')}>
                <Ionicons name="ios-mail" color="#000" size={30} />
                <Link>info@ipsc-nevskiy.ru</Link>
            </Contact>

            <Contact onPress={() => openUrl('8(986) 555-0-555', 'phone')}>
                <Ionicons name="ios-call" color="#000" size={30} />
                <Link>8(986) 555-0-555</Link>
            </Contact>

            <Contact onPress={() => openUrl('8(911) 974-48-56', 'phone')}>
                <Ionicons name="ios-call" color="#000" size={30} />
                <Link>8(911) 974-48-56</Link>
            </Contact>

            <Label style={{fontWeight: 'normal'}}>Режим работы стрелкового объекта, без выходных:</Label>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Bold>СР: </Bold>
                <Text style={{paddingTop: 4, fontSize: 18, fontWeight: '700'}}>10:00-20:00</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Bold>ЧТ-ВТ: </Bold>
                <Text style={{paddingTop: 4, fontSize: 18, fontWeight: '700'}}>10:00-17:00</Text>
            </View>
            <Label>Наш адрес: </Label>
            <Contact onPress={() => Linking.openURL('https://yandex.ru/maps/?pt=30.153489,60.135269&z=17&l=map')}>
                <Bold color={Colors.brand}>п. Песочный, ул. Пионерская, 88</Bold>
            </Contact>
        </Container>
    )
};

const styles = StyleSheet.create({
    map: {
        height: '60%',
        width: '100%',
        marginTop: 20,
    },
    modalContainer: {
        width: '90%',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 20
    }
})

export default InfoScreen