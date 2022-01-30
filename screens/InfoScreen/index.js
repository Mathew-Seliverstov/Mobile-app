import React, { useEffect, useRef, useState } from 'react';
import { Linking, StyleSheet, Platform, ScrollView } from 'react-native';
// Styled Components...
import {
  Container,
  Title,
  DocumentWrap,
  List,
  ListBullet,
  ListText,
  SheduleWrap,
  SheduleLabel,
  SheduleText,
  ContactWrap,
  Contact,
  Link,
  Label,
  AdressWrap,
  AdressText,
} from './styles';
// Links
import openUrl from '../../utils/Links';
import { Colors } from '../../components/styles';
// Icons...
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const InfoScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#fcfcfc'}} showsVerticalScrollIndicator={false}>
      <Container>
        <DocumentWrap style={styles.shadow}>
          <Title>Необходимые документы</Title>
          <List>
            <ListBullet />
            <ListText>Паспорт</ListText>
          </List>
          <List>
            <ListBullet />
            <ListText>Водительское удостоверение</ListText>
          </List>
          <List>
            <ListBullet />
            <ListText>РОХа (если со своим оружием)</ListText>
          </List>
        </DocumentWrap>

        <SheduleWrap style={styles.shadow}>
          <Title style={{ height: 50, fontSize: 19 }}>Режим работы стрелкового объекта, без выходных</Title>
          <List>
            <SheduleLabel>ПН-ВС: </SheduleLabel>
            <SheduleText>10:00 - 18:00</SheduleText>
          </List>
        </SheduleWrap>

        <ContactWrap style={styles.shadow}>
          <Title>Свяжитесь с нами</Title>
          <Contact onPress={() => openUrl('info@ipsc-nevskiy.ru', 'email')}>
            <Ionicons name="ios-mail" color="#000" size={26} />
            <Link>info@ipsc-nevskiy.ru</Link>
          </Contact>
          <Contact onPress={() => openUrl('8(986) 555-0-555', 'phone')}>
            <Ionicons name="ios-call" color="#000" size={26} />
            <Link>8(986) 555-0-555</Link>
          </Contact>
          <Contact onPress={() => openUrl('8(911) 974-48-56', 'phone')}>
            <Ionicons name="ios-call" color="#000" size={26} />
            <Link>8(911) 974-48-56</Link>
          </Contact>

          <Label>Наш адрес</Label>
          <AdressWrap onPress={() => Linking.openURL('https://yandex.ru/maps/?pt=30.153489,60.135269&z=17&l=map')}>
            <Ionicons name="location-sharp" color="#000" size={30} />
            <AdressText>п. Песочный, ул. Пионерская, дом 88</AdressText>
          </AdressWrap>
        </ContactWrap>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default InfoScreen;
