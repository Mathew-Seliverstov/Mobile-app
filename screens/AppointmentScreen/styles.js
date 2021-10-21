import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native'
import styled from 'styled-components'
import {Colors} from '../../components/styles'

export const Container = styled.View`
	flex: 1;
	padding: 15px;
	padding-bottom: 10px;
	padding-top: 5px;
	background-color: #fcfcfc;
	align-items: center;
	justify-content: flex-start;
`

export const Header = styled.Text`
	color: #0f0f0f;
	font-size: 22px;
	font-weight: bold;
	margin-bottom: 5px;
`

export const ItemWrap = styled.TouchableOpacity`
	height: 240px;
	width: 250px;
	margin-top: 12px;
	margin: 15px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: ${props => props.bg || '#fff'};
`

export const StyledImage = styled.Image`
	width: 100%;
	height: 75%;
	top: 0;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`

export const TextContainer = styled.View`
	padding: 8px 8px;
	justify-content: center;
	align-items: center;
	height: 25%;
`

export const ItemText = styled.Text`
	font-size: 14.2px;
	font-weight: bold;
	color: ${props => props.color || '#0f0f0f'};
`

export const SelectItemWrap = styled.TouchableOpacity`
	height: 55px;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	margin-top: 10px;
	margin-bottom: 10px;
	border-radius: 10px;
	background-color: #fff;
`

export const SelectItemText = styled.Text`
	font-size: 18px;
	font-weight: bold;
`

export const SelectItemIcon = styled.Image`
	height: 26px;
	width: 26px;
	left: 0px;
`

export const ButtonWrap = styled.TouchableOpacity`
	background-color: #0f0f0f;
	height: 60px;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin-top: 5%;
	margin-bottom: 5px;
	border-radius: 10px;
`

export const ButtonText = styled.Text`
	font-size: 22px;
	font-weight: bold;
	color: #fff;
`
