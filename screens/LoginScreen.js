import React, {useContext, useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import {View, ActivityIndicator, Linking} from 'react-native'
import {Formik} from 'formik'
import axios from 'axios'
// Icons...
import {Octicons, Ionicons} from '@expo/vector-icons'
// Styled Components...
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
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
    TextLinkContent, PageLogoWrapper
} from '../components/styles'
// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'
// Persist Login...
import AsyncStorage from '@react-native-async-storage/async-storage'
import {CredentialsContext} from '../components/CredentialsContext'

const LoginScreen = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)
    const [message, setMessage] = useState()
    const [messageType, setMessageType] = useState()

    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext)

    const handleLogin = (credentials, setSubmitting) => {
        handleMessage(null)
        const url = 'https://mighty-chamber-57023.herokuapp.com/user/signin'

        axios
            .post(url, credentials)
            .then((response) => {
                const result = response.data
                const {message, status, data} = result

                if (status !== 'SUCCESS') {
                    handleMessage(message, status)
                } else {
                    persistLogin({...data[0]}, message, status)
                }
                setSubmitting(false)
            })
            .catch((error => {
                console.log(JSON.stringify(error))
                setSubmitting(false)
                handleMessage('Произошла ошибка. Проверьте подключение к сети и попробуйте еще раз!')
        }))
    }

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message)
        setMessageType(type)
    }

    const persistLogin = (credentials, message, status) => {
        AsyncStorage.setItem('nevskiyCredentials', JSON.stringify(credentials))
            .then(() => {
                handleMessage(message, status)
                setStoredCredentials(credentials)
                navigation.navigate('Main')
            })
            .catch(error => {
                console.log(error)
                handleMessage('Не удалось сохранить вход в систему!')
            })
    }

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" backgroundColor={'#ffffff70'} />
                <InnerContainer>
                    <PageLogoWrapper onPress={() => Linking.openURL('https://ipsc-nevskiy.ru/')}>
                        <PageLogo resizeMode="cover" source={require('../assets/img/nevskiyLogo.png')} />
                    </PageLogoWrapper>
                    <SubTitle>Вход в аккаунт</SubTitle>

                    <Formik
                        initialValues={{email: '', password: ''}}
                        onSubmit={(values, {setSubmitting}) => {
                            if (values.email == '' || values.password == '') {
                                handleMessage('Пожалуйста, заполните все поля!')
                                setSubmitting(false)
                            } else {
                                handleLogin(values, setSubmitting)
                            }
                        }}
                    >
                        {
                            ({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (<StyledFromArea>
                                <MyTextInput
                                    label="Email"
                                    icon="mail"
                                    placeholder="andrei@gmail.com"
                                    placeholderTextColor={Colors.darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                    autoCompleteType="email"
                                    autoCapitalize="none"
                                />
                                <MyTextInput
                                    label="Пароль"
                                    icon="lock"
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
                                {!isSubmitting && <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Войти</ButtonText>
                                </StyledButton>}

                                {isSubmitting && <StyledButton disabled={true}>
                                    <ActivityIndicator size={25} color={'#ffffff'} />
                                </StyledButton>}

                                <Line />

                                <ExtraView>
                                    <ExtraText>Ещё нет учётной записи? </ExtraText>
                                    <TextLink onPress={() => navigation.navigate('SignupScreen')}>
                                        <TextLinkContent>Зарегистрироваться</TextLinkContent>
                                    </TextLink>
                                </ExtraView>
                            </StyledFromArea>)
                        }
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    )
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={Colors.brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={Colors.darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default  LoginScreen
