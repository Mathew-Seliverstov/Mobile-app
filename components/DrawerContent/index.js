import React, {useContext} from "react"
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import {
	Container,
	DrawerHeader,
	DrawerHeaderMain,
	ImgWrap,
	InfoWrap,
	InfoText,
	DrawerSection,
	EditBtn,
	EditBtnText
} from './styles'
import { View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../../components/CredentialsContext';
import { Ionicons } from "@expo/vector-icons"
import getColor from "../../utils/getColor";

export const DrawerContent = (props) => {
	const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
	const clearLogin = () => {
    AsyncStorage.removeItem('nevskiyCredentials')
      .then(() => setStoredCredentials(''))
      .catch((err) => console.log(err))
  }
	
	return (
		<View style={{flex: 1}}>
			<Container>
				<DrawerContentScrollView {...props}>
					<DrawerHeader>
						<DrawerHeaderMain>
							<ImgWrap>
								<Ionicons name="person-circle-sharp" size={70} color={getColor(storedCredentials.name)} />
							</ImgWrap>
							<InfoWrap>
								<InfoText style={{fontWeight: 'bold', color: '#0f0f0f'}}>{storedCredentials.name || 'Андрей Стрелков'}</InfoText>
								<InfoText>{storedCredentials.email || 'andrey@gmail.com'}</InfoText>
								<InfoText>{storedCredentials.phone || '+79998887766'}</InfoText>
							</InfoWrap>
						</DrawerHeaderMain>
						<EditBtn 
							color={getColor(storedCredentials.name)}
							onPress={() => props.navigation.navigate('EditProfile')}
						>
							<Ionicons name="ios-pencil-sharp" size={16} color="#fff" />
							<EditBtnText>Редактировать профиль</EditBtnText>
						</EditBtn>
					</DrawerHeader>
					
					<DrawerItem
						icon={({color, size}) => <Ionicons name="ios-home" size={size} color={color} />}
						label="Главная"
						onPress={() => props.navigation.navigate('Home')}
					/>
					<DrawerItem 
						icon={({color, size}) => <Ionicons name="ios-clipboard" size={size} color={color} />}
						label="Запись"
						onPress={() => props.navigation.navigate('Appointment')}
					/>
					<DrawerItem 
						icon={({color, size}) => <Ionicons name="ios-information-circle" size={size} color={color} />}
						label="Инфо"
						onPress={() => props.navigation.navigate('Info')}
					/>
				</DrawerContentScrollView>
				<DrawerSection>
					<DrawerItem 
						icon={({color, size}) => <Ionicons name="enter-outline" size={size} color={color} />}
						label="Выйти"
						onPress={() => clearLogin()}
					/>
				</DrawerSection>
			</Container>
		</View>
	)
}
