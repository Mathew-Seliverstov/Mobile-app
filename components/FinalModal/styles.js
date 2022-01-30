import styled from "styled-components";
import {View, Text, Dimensions, FlatList, Pressable, TouchableOpacity} from "react-native";
import { Colors } from "../styles";

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #0f0f0f70;
  padding: 25px;
`

export const StyledModal = styled.View`
  background: #fff;
  border-radius: 10px;
  width: ${WIDTH - 40}px;
  height: auto;
`

export const ContentWrap = styled.View`
  padding: 10px;
  width: 100%;
  height: auto;
`

export const Item = styled.View`
  background: #fff;
  padding: 8px;
  border-radius: 10px;
  justify-content: center;
  margin-bottom: 8px;
`

export const PriceWrap = styled.View`
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const TitlePrice = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #000;
`

export const Price = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${Colors.success};
`

export const OptionsWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const MiniPriceWrap = styled.View`
  height: 25px;
  width: auto;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.success + '99'};
  border-radius: 12.5px;
`

export const MiniPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`

export const Title = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #000;
`

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #0f0f0f;
`

export const ButtonsContiner = styled.View`
  height: 45px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 5px;
`

export const ButtonWrap = styled.TouchableOpacity`
  width: 48%;
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
