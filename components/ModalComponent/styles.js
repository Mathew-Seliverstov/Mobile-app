import styled from "styled-components";
import {View, Text, Dimensions, FlatList, Pressable, TouchableOpacity} from "react-native";
import { Colors } from "../styles";

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #0f0f0f50;
  padding: 25px;
`

export const StyledModal = styled.View`
  background: #fff;
  border-radius: 10px;
  width: ${WIDTH - 40}px;
  height: auto;
`

export const Header = styled.Text`
	height: 40px;
	width: 100%;
  padding: 4px;
	font-size: 22px;
	font-weight: bold;
	text-align: center;
	background-color: ${Colors.info};
	color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const ButtonsContiner = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
  margin-bottom: 10px;
`

export const ButtonWrap = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
  padding: 5px;
  background-color: ${props => props.type === 'cancel' ? Colors.error : Colors.success};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`
