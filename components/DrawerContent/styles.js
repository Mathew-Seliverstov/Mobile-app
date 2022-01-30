import React from "react"
import styled from "styled-components/native"
import {View, Image, Text, TouchableOpacity} from 'react-native'
import getColor from "../../utils/getColor"

export const Container = styled.View`
	width: 100%;
	height: 100%;
	padding: 10px;
` 

export const DrawerHeader = styled.View`
	height: 120px;
	align-items: center;
	border-bottom-width: 0.5px;
	border-bottom-color: #c1c1c1;
`

export const DrawerHeaderMain = styled.View`
	flex-direction: row;
	width: 100%;
`

export const ImgWrap = styled.View`
	padding: 0;
	justify-content: center;
	align-items: center;
`

export const InfoWrap = styled.View`
	padding: 5px;
	flex-direction: column;
	justify-content: center;
`

export const InfoText = styled.Text`
	font-size: 16px;
	color: #747872;
	line-height: 20px;
	text-align: left;
	width: 180px;
`

export const EditBtn = styled.TouchableOpacity`
	flex-direction: row;
	background: ${props => props.color};
	width: 100%;
	height: 30%;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
`

export const EditBtnText = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	margin-left: 10px;
`

export const DrawerSection = styled.View`
	border-top-width: 0.5px;
	border-top-color: #c1c1c1;
	border-bottom-width: 0.5px;
	border-bottom-color: #c1c1c1;
`