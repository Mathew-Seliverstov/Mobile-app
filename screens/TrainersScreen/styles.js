import {View, ScrollView, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
import styled from 'styled-components'
import {Colors} from "../../components/styles";

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  padding-top: 30px;
`

export const ContainerTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const CardsContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-left: 0;
`

export const Card = styled.View`
  max-width: ${Dimensions.get('window').width - 10 + 'px'};
  width: 90%;
  background: #fefefe;
  padding: 15px;
  border-radius: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px;
`

export const CardProfileWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardImg = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 15px;
`

export const ProfileWrapper = styled.View``

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
`

export const Line = styled.View`
  border: 1px solid #b0abab;
  height: 2px;
  width: 100%;
`

export const CardContacts = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #6b6767;
  line-height: 24px;
`
