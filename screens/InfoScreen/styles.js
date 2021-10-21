import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native'
import styled from 'styled-components'
// Colors...
import {Colors} from '../../components/styles'

export const Container = styled.View`
  flex: 1;
  background: #fff;
  width: 400px;
  align-items: flex-start;
  padding: 25px;
`

export const ContainerTitle = styled.Text`
  font-size: 28px;
  font-weight: 700;
  margin-top: 10px;
`

export const Contact = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 10px;
`

export const Link = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${Colors.brand};
  margin-left: 10px;
`

export  const Label = styled.Text`
  font-size: 20px;
  color: #000;
  margin-top: 10px;
  max-width: 80%;
`

export const Bold = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.color ? props.color : '#000'}
`

export const MapWrapper = styled.View`
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
`

export const StyledButton = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  background: #ef5350;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const ModalBG = styled.View`
  flex: 1;
  background: #00000050;
  justify-content: center;
  align-items: center;
`

export const ModalHeader = styled.View`
  width: 100%;
  height: 40px;
  align-items: flex-end;
  justify-content: center;
`
