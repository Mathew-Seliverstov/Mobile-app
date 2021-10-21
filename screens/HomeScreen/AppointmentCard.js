import React from "react";
import {Text, View} from 'react-native'

const AppointmentCard = ({title}) => {
    return (
        <View style={{backgroundColor: '#eee'}}>
            <Text>{title}</Text>
        </View>
    )
}

export default AppointmentCard
