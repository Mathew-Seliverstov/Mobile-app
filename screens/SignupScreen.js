import React, {useContext, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native'
import {Formik} from 'formik'
import axios from 'axios'
// Icons
import {Octicons, Ionicons, FontAwesome} from '@expo/vector-icons'
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
    TextLinkContent
} from '../components/styles'
// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'
// PersistLogin
import AsyncStorage from '@react-native-async-storage/async-storage'
import {CredentialsContext} from '../components/CredentialsContext'

const SignupScreen = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)
    const [message, setMessage] = useState()
    const [messageType, setMessageType] = useState()

    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext)

    const handleSignup = async (credentials, {setSubmitting}) => {
        handleMessage(null)
        const url = 'https://mighty-chamber-57023.herokuapp.com/user/signup'

        await axios
            .post(url, credentials)
            .then((response) => {
                const result = response.data
                const { status, message, data} = result

                if (status !== 'SUCCESS') {
                    handleMessage(message, status)
                } else {
                    persistLogin({...data}, message, status)
                }
                setSubmitting(false)
            })
            .catch((error) => {
                setSubmitting(false)
                handleMessage('Произошла ошибка. Проверьте подключение к сети и попробуйте еще раз!')
                console.log(error.toJSON())
            })
    }

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message)
        setMessageType(type)
    }

    const persistLogin = (credentials, message, status) => {
        AsyncStorage.setItem('fortunaCredentials', JSON.stringify(credentials))
            .then(() => {
                handleMessage(message, status)
                setStoredCredentials(credentials)
            })
            .catch(error => {
                handleMessage('Не удалось сохранить вход в систему!')
                console.log(error)
            })
    }

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" backgroundColor={'#ffffff70'} />
                <InnerContainer>
                    <SubTitle>Регистрация</SubTitle>

                    <Formik
                        initialValues={{name: '', phone: '', email: '', password: '', confirmPassword: ''}}
                        onSubmit={(values, {setSubmitting}) => {

                            if (values.email == '' || values.password == '' || values.fullName == '' || values.phone == '' || values.confirmPassword == '') {
                                handleMessage('Пожалуйста, заполните все поля!')
                                setSubmitting(false)
                            } else if (values.password !== values.confirmPassword) {
                                handleMessage('Пароли не совпадают!')
                                setSubmitting(false)
                            } else {
                                handleSignup(values, {setSubmitting})
                            }
                        }}
                    >
                        {
                            ({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (<StyledFromArea>
                                <MyTextInput
                                    label="Ф.И."
                                    icon={<Octicons name="person" size={30} color={Colors.brand}/>}
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
                                <MyTextInput
                                    label="Email"
                                    icon={<Octicons name="lock" size={30} color={Colors.brand}/>}
                                    placeholder="andrei@gmail.com"
                                    placeholderTextColor={Colors.darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                />
                                <MyTextInput
                                    label="Пароль"
                                    icon={<Octicons name="lock" size={30} color={Colors.brand}/>}
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
                                <MyTextInput
                                    label="Подтвердите пароль"
                                    icon={<Octicons name="lock" size={30} color={Colors.brand}/>}
                                    placeholder="*********"
                                    placeholderTextColor={Colors.darkLight}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MsgBox type={messageType}>{message}</MsgBox>
                                {!isSubmitting && <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Зарегистрироваться</ButtonText>
                                </StyledButton>}

                                {isSubmitting && <StyledButton disabled={true}>
                                    <ActivityIndicator size={25} color={'#ffffff'} />
                                </StyledButton>}

                                <Line />
                                <ExtraView>
                                    <ExtraText>Уже есть аккаунт? </ExtraText>
                                    <TextLink onPress={() => navigation.navigate('LoginScreen')}>
                                        <TextLinkContent>Войти</TextLinkContent>
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

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (
        <View>
            <LeftIcon>
                {icon}
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props} />
            </TouchableOpacity>}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={Colors.darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default  SignupScreen
