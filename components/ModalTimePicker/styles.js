import styled from "styled-components";
import {View, Image, Text, Dimensions, FlatList, TouchableOpacity} from "react-native";

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #0f0f0f50;
  padding: 25px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 10px;
  padding-top: 5px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #0f0f0f;
`

export const CloseButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  right: 0;
`

export const CloseIcon = styled.Image`
  width: 36px;
  height: 36px;
`

export const StyledModal = styled.View`
  background: #fff;
  border-radius: 10px;
  width: ${WIDTH - 40}px;
  height: auto;
`

export const Option = styled.TouchableOpacity`
  align-items: flex-start;
  border-radius: 15px;
  background-color: ${props => props.disabled ? '#96969650' : '#fff'};
  margin: 10px;
`

export const OptionText = styled.Text`
  margin: 20px;
  font-size: 20px;
  color: ${props => props.disabled ? '#757575' : '#0f0f0f'};
  font-weight: bold;
`