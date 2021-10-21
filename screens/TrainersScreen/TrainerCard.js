import React from 'react'
import {Linking, StyleSheet, TouchableOpacity} from 'react-native'
// Styles...
import {
    Card,
    CardProfileWrapper,
    CardImg,
    ProfileWrapper,
    CardTitle,
    CardContacts,
    Line,
} from './styles'
// Colors...
import {Colors} from '../../components/styles'

const TrainerCard = ({img, name, lastName, tel, email}) => {
    return (
        <Card style={styles.shadow}>
            <CardProfileWrapper>
                <CardImg source={img} />
                <ProfileWrapper>
                    <CardTitle>{name}</CardTitle>
                    <Line></Line>
                    <CardTitle>{lastName}</CardTitle>
                    <Line></Line>
                    <TouchableOpacity onPress={() => Linking.openURL(`tel:${tel}`)}>
                        <CardContacts>{tel}</CardContacts>
                    </TouchableOpacity>
                    <Line></Line>
                    <TouchableOpacity onPress={() => Linking.openURL(`mailto:${email}`)}>
                        <CardContacts>{email}</CardContacts>
                    </TouchableOpacity>
                    <Line></Line>
                </ProfileWrapper>
            </CardProfileWrapper>
        </Card>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
})

export default TrainerCard