import {View, ScrollView, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
import styled from 'styled-components'
import {Colors} from "../../components/styles";


// index.js
export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
`

export const DefaultContainer = styled.View`
  width: ${Dimensions.get('window').width -30 + 'px'};
  height: ${Dimensions.get('window').height -400 + 'px'};
  justify-content: center;
  align-items: center;
`

export const DefaultTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const DefaultImg = styled.Image`
  width: 100px;
  height: 100px;
  opacity: 0.2;
`
// End.

// AppointmentCard.js

// End.
