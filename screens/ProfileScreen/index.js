import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
// Styles...
import { 
  Container, 
  PhotoWrap, 
  ProfileInfoWrap, 
  Field,
  Title, 
  Subtitle 
} from './styles';

import { CredentialsContext } from '../../components/CredentialsContext';
import { PhotoPicker } from '../../components/PhotoPicker';

const ProfileScreen = ({ navigation }) => {
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  return (
    <Container>
      <PhotoWrap style={styles.shadow}>
        <PhotoPicker />
      </PhotoWrap>
      <ProfileInfoWrap style={styles.shadow}>
        <Title>E-mail</Title>
        <Field>
          <Subtitle>{storedCredentials.email || 'andrey@gmail.com'}</Subtitle>
        </Field>
        <Title>Телефон</Title>
        <Field>
          <Subtitle>{storedCredentials.phone || '89912334567'}</Subtitle>
        </Field>
        <Title>ФИО</Title>
        <Field>
         <Subtitle>{storedCredentials.name || 'Андрей Стрелков'}</Subtitle> 
        </Field>
      </ProfileInfoWrap>
    </Container>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  shadow2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});

export default ProfileScreen;
