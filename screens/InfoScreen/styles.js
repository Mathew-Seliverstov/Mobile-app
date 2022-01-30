import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';
// Colors...
import { Colors } from '../../components/styles';

export const Container = styled.View`
  flex: 1;
  background: #fcfcfc;
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: rbt-bold;
  width: 100%;
  height: 25px;
`;

export const DocumentWrap = styled.View`
  background-color: #fff;
  width: 100%;
  height: auto;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const List = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  margin-top: 5px;
`;

export const ListBullet = styled.View`
  background-color: #0f0f0f;
  margin: 5px;
  margin-right: 10px;
  border-radius: 50px;
  width: 6px;
  height: 6px;
`;

export const ListText = styled.Text`
  font-size: 16px;
  font-family: rbt-medium;
  width: 90%;
`;

export const SheduleWrap = styled.View`
  background-color: #fff;
  width: 100%;
  height: auto;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const SheduleLabel = styled.Text`
  font-size: 18px;
  font-family: rbt-medium;
`;

export const SheduleText = styled.Text`
  font-size: 19px;
  font-family: rbt-medium;
`;

export const ContactWrap = styled.View`
  background-color: #fff;
  width: 100%;
  height: auto;
  padding: 8px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const Contact = styled.TouchableOpacity`
  flex-direction: row;
  margin: 2px;
  padding: 5px;
`;

export const Link = styled.Text`
  font-size: 20px;
  font-family: rbt-medium;
  color: ${Colors.brand};
  margin-left: 10px;
`;

export const Label = styled.Text`
  font-size: 20px;
  font-family: rbt-bold;
  color: #0f0f0f;
  margin-top: 10px;
  max-width: 80%;
`;

export const AdressWrap = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2px;
  padding: 5px;
`;

export const AdressText = styled.Text`
  font-size: 18px;
  font-family: rbt-medium;
  color: ${Colors.brand};
  margin-left: 10px;
  width: 88%;
`;
