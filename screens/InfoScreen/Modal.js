import React, {useEffect, useRef, useState} from 'react'
import { Text, View, StyleSheet, Platform, Modal, Image, TouchableOpacity, Animated, Button} from 'react-native'
import {
    ModalBG,
    ModalHeader
} from './styles'
// Map...
import MapView, {Callout, Marker} from "react-native-maps";
// Links...
import openUrl from "../../utils/Links";

const ModalMap = ({visible, setVisible}) => {
    const [showModal, setShowModal] = useState(visible)
    const scaleValue = useRef(new Animated.Value(0)).current
    useEffect(() => {
        toggleModal()
    }, [visible])

    const toggleModal = () => {
        if (visible) {
            setShowModal(true)
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }).start()
        } else {
            setTimeout(() => setShowModal(false), 200)

            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start()
        }
    }

    return (
        <Modal transparent visible={showModal}>
            <ModalBG>
                <Animated.View
                    style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}
                >
                    <View style={{alignItems: 'center'}}>
                        <ModalHeader>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Image
                                    source={require('../../assets/img/close.png')}
                                    style={{height: 25, width: 25}}
                                />
                            </TouchableOpacity>

                        </ModalHeader>
                    </View>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 60.135269,
                            longitude: 30.153489,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        provider={Platform.OS === 'android' ? 'google' : ''}
                    >
                        <Marker
                            coordinate={{
                                latitude: 60.135269,
                                longitude: 30.153489
                            }}
                        >
                            <Callout>
                                <Text>Мы здесь!</Text>
                            </Callout>
                        </Marker>
                    </MapView>
                    <Button title="Открыть в Яндекс" onPress={() => openUrl('https://yandex.ru/maps/?pt=30.153489,60.135269&z=16&l=map')} />
                </Animated.View>
            </ModalBG>
        </Modal>
    )
}

const styles = StyleSheet.create({
    map: {
        height: '70%',
        width: '100%',
        marginTop: 20,
        marginBottom: 20
    },
    modalContainer: {
        width: '90%',
        height: '75%',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 20
    }
})

export default ModalMap
