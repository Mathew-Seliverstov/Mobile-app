import { View, ScrollView, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import styled from 'styled-components';
import { Colors } from '../../components/styles';

const CIRCLE_WIDTH = Dimensions.get('window').width / 2;

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  align-items: center;
  padding-top: 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  padding: 5px 20px;
  background-color: #fff;
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-family: rbt-bold;
`;

export const PhotoWrap = styled.View`
  width: ${CIRCLE_WIDTH}px;
  height: ${CIRCLE_WIDTH}px;
  border-radius: 100px;
  background-color: #fff;
  margin-vertical: 25px;
`;

export const ProfileInfoWrap = styled.View`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: 20px;
  padding: 20px;
  padding-bottom: 30px;
  position: absolute;
  bottom: 0;
`;

export const Field = styled.View`
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
  padding: 10px;
  margin: 2px;
  margin-bottom: 5px;
  border-radius: 5px;
`

export const Title = styled.Text`
  font-size: 14px;
  font-family: rbt-regular;
  color: #0f0f0f;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-family: rbt-regular;
  color: #0f0f0f;
  padding-left: 5px;
`;
