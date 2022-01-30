import styled from "styled-components";
import {View, Text, Dimensions, FlatList, TouchableOpacity} from "react-native";

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #0f0f0f70;
  padding: 25px;
`

export const StyledModal = styled.View`
  background-color: #fff;
  border-radius: 10px;
  width: ${WIDTH - 80}px;
  height: auto;
`

export const Header= styled.Text`
  padding: 12px;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  background-color: ${props => props.color};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #fff;
`

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`

export const TextBlock = styled.View`
  padding: 15px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`

export const BtnBlock = styled.View`
  padding: 15px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`

export const ConfirmBtn = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${props => props.color};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`

export const BtnText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`

export const BtnDeleteBlock = styled.View`
  padding: 15px;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const ConfirmDeleteBtn = styled.TouchableOpacity`
  width: 45%;
  height: 50px;
  background-color: ${props => props.color};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`