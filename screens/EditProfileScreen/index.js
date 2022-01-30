import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import axios from 'axios';
// Icons
import { Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';
// StyledComponents
import {
  StyledContainer,
  InnerContainer,
  SubTitle,
  StyledFromArea,
  StyledTextInput,
  StyledInputLabel,
  LeftIcon,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from '../../components/styles';
// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
// PersistLogin
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../../components/CredentialsContext';

const EditProfileScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const handleSignup = async (credentials, { setSubmitting }) => {
    handleMessage(null);
    const url = 'https://mighty-chamber-57023.herokuapp.com/user/edit';

    await axios
      .post(url, { ...credentials, _id: storedCredentials._id })
      .then((response) => {
        const result = response.data;
        const { status, message } = result;

        if (status !== 'SUCCESS') {
          handleMessage(message, status);
        } else {
          const newData = {
            ...storedCredentials,
          };
          newData.name = credentials.name;
          newData.phone = credentials.phone;

          AsyncStorage.setItem('nevskiyCredentials', JSON.stringify(newData))
            .then(async () => {
              handleMessage(message, status);
              setStoredCredentials(newData);
              navigation.navigate('Profile');
            })
            .catch((error) => {
              handleMessage('Не удалось обновить данные!');
              console.log(error);
            });
        }
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitting(false);
        handleMessage('Произошла ошибка. Проверьте подключение к сети и попробуйте еще раз!');
        console.log(error.toJSON());
      });
  };

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <InnerContainer>
          <Formik
            initialValues={{
              name: storedCredentials.name,
              phone: storedCredentials.phone,
              password: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.password == '' || values.fullName == '' || values.phone == '') {
                handleMessage('Пожалуйста, заполните все поля!');
                setSubmitting(false);
              } else {
                handleSignup(values, { setSubmitting });
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <StyledFromArea>
                <MyTextInput
                  label="Ф.И.О."
                  icon={<Octicons name="person" size={30} color={Colors.brand} />}
                  placeholder="Андрей Андреевич"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                <MyTextInput
                  label="Тел.:"
                  icon={<FontAwesome name="phone" size={30} color={Colors.brand} />}
                  placeholder="+7 (999) 999 99-99"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                />
                <Line />
                <MyTextInput
                  label="Пароль"
                  icon={<Octicons name="lock" size={30} color={Colors.brand} />}
                  placeholder="*********"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Сохранить изменения</ButtonText>
                  </StyledButton>
                )}

                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size={25} color={'#ffffff'} />
                  </StyledButton>
                )}
              </StyledFromArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>{icon}</LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={Colors.darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default EditProfileScreen;
