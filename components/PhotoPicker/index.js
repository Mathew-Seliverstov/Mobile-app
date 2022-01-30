import React, { useState, useContext, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ActivityIndicator } from 'react-native'
import { 
  PhotoWrap, 
  StyledImage 
} from './styles';
import axios from 'axios';
import { CredentialsContext } from '../../components/CredentialsContext';

async function askFromPermissions() {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    console.log('good');
    return false;
  }
  return true;
}

export const PhotoPicker = ({}) => {
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const [img, setImg] = useState('https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png');
  const [isLoading, setIsLoading] = useState(true)

  async function onClick() {
    const hasPermissions = await askFromPermissions();

    if (!hasPermissions) {
      return;
    }
    const img = await ImagePicker.launchCameraAsync({
      quality: 1,
      allowsEditing: true,
      aspect: [5, 5],
    })

    axios
      .post('https://mighty-chamber-57023.herokuapp.com/user/profile', {
        _id: storedCredentials._id,
        url: img.uri,
      })
      .then((data) => {
        getProfileImg();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getProfileImg() {
    setIsLoading(true)
    axios
      .post('https://mighty-chamber-57023.herokuapp.com/user/get/profile', {
        _id: storedCredentials._id,
      })
      .then((data) => {
        setImg(data.data.data)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getProfileImg();
    () => {};
  }, []);

  return (
    <PhotoWrap onPress={() => onClick()}>
      {isLoading ? (
        <ActivityIndicator size={48} color="#0f0f0f" />
      ) : (
        <StyledImage source={{ uri: img }} />
      )}
    </PhotoWrap>
  );
};
