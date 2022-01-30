import {View, ScrollView, Text, TouchableOpacity, Pressable, Image, Dimensions} from 'react-native'
import styled from 'styled-components'
import {Colors} from "../../components/styles"

// index.js
export const Container = styled.View`
  flex: 1;
  background: #fcfcfc;
  align-items: center;
  padding: 15px;
  padding-top: 8px;
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

export const Header = styled.Text`
  font-size: 24px;
  font-family: rbt-bold;
  width: 100%;
  padding: 5px;
  text-align: center;
  color: #0f0f0f;
  background-color: #fff;
`
// End.

// AppointmentCard.js
export const CardWrap = styled.Pressable`
  width: 96%;
  height: auto;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-horizontal: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const TextWrap = styled.View`
  width: 65%;
  height: 100%;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: rbt-bold;
  color: #0f0f0f;
`

export const Subtitle = styled.Text`
  font-size: 16px;
  font-family: rbt-regular;
  color: #0f0f0f;
  margin-left: 5px;
`

export const InfoWrap = styled.View`
  width: 35%;
  height: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`

export const InfoTextWrap = styled.View`
  width: auto;
  height: 25px;
  margin-top: 5px;
  padding: 10px;
  background-color: #2a86ff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`

export const InfoPriceWrap = styled.View`
  width: auto;
  height: 25px;
  margin-top: 5px;
  padding: 10px;
  background-color: #4AD10A;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`

export const InfoText = styled.Text`
  font-size: 14px;
  font-family: rbt-bold;
  color: #fff;
`
// End.
