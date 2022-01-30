import React, { useEffect, useState, useContext } from 'react'
import {
	Container,
	Header,
	ItemWrap,
	PriceWrap,
	PriceTitle,
	StyledImage,
	TextContainer,
	ItemText,
	SelectItemWrap,
	SelectItemText,
	SelectItemIcon,
	ButtonWrap,
	ButtonText
} from './styles'
import { FlatList, ActivityIndicator, Text, StyleSheet, StatusBar, View, ScrollView } from 'react-native'
import DateTimePicker from "@react-native-community/datetimepicker";
import ModalTimePicker from '../../components/ModalTimePicker';
import ModalAlert from '../../components/ModalAlert'
import {Colors} from '../../components/styles'
import axios from 'axios'

import ModalComponent from '../../components/ModalComponent'
import FinalModal from '../../components/FinalModal'
import {CredentialsContext} from '../../components/CredentialsContext'

const AppointmentScreen = () => {
	// User Credentials
	const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext)
	const [isLoading, setIsLoading] = useState(true)
	// Select training
	const [data, setData] = useState([])
	const [selectedItem, setSelectedItem] = useState('')
	const [trainingId, setTrainingId] = useState('')
	const [onlyIndividual, setOnlyIndividual] = useState(false)
	const [price, setPrice] = useState('')
	const [individualPrice, setIndividualPrice] = useState('')
	const [visible, setVisible] = useState(false)
	const [equipment, setEquipment] = useState(false)
	const [isIndividual, setIsIndividual] = useState(false)
	const [equipmentValue, setEquipmentValue] = useState('')
	const [trainingType, setTrainingType] = useState('')

	const onClickItem = (item) => {
		setSelectedItem(item.title)
		setTrainingId(item.id)
		setPrice(item.price)
		setIndividualPrice(item.individualPrice)
		setOnlyIndividual(item.onlyIndividual)
		const newData = data.map(el => {
			if (item.id === el.id) {
				if (el.selected) {
					setSelectedItem('')
					setTrainingId('')
					setEquipmentValue('')
					setTrainingType('')
					setDate('Выберите дату')
					setTime('Выберите время')
				} else {
					setDate('Выберите дату')
					setTime('Выберите время')
					if (el.equipment && el.isIndividual) {
						setEquipment(true)
						setIsIndividual(true)
						setVisible(true)
					} else {
						if (el.equipment) {
							setEquipment(true)
							setVisible(true)
						} else if (el.isIndividual) {
							setIsIndividual(true)
							setVisible(true)
						}
					}
					if (!el.equipment) {
						setEquipment(false)
					}
					if (!el.isIndividual) {
						setIsIndividual(false)
					}
				}
				return {
					...el,
					selected: !el.selected
				}
			} 
			return {
				...el,
				selected: false
			}
		})
		setData(newData)
		// set_id
	}
	// Buttons values
	const [date, setDate] = useState('Выберите дату')
	// Choose time
	const [time, setTime] = useState('Выберите время')
	const [timeList, setTimeList] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [isTimeLoading, setIsTimeLoading] = useState(true)
			// Alert 
	const [showAlert, setShowAlert] = useState(false)
	const [alertHeader, setAlertHeader] = useState('Предупреждение')
	const [alertText, setAlertText] = useState('')
	const [alertStyle, setAlertStyle] = useState(Colors.warn)
	const onClickTime = () => {
		if (date === 'Выберите дату') {
			setAlertStyle(Colors.warn)
			setAlertHeader('Предупреждение')
			setAlertText('Выберите дату')
			setShowAlert(true)
		} else {
			getTime()
			setIsTimeLoading(true)
			setShowModal(true)
		}
	}
	// Date picker
	const [datePicker, setDatePicker] = useState(new Date())
  const [show, setShow] = useState(false)
	const onChange = (event, selectDate) => {
		let fDate = () => {
			let tempDate = new Date(selectDate)
			return tempDate.getDate() + '.' + (tempDate.getMonth() + 1) + '.' + tempDate.getFullYear()
		} 
    
		if (event.type === 'dismissed') {
			setShow(false)
		} else if (event.type === 'set') {
    	setShow(false)
    	setDatePicker(selectDate)
			setDate(fDate())
		}
  }
  function getLimitDate(num) {
        return new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            ( new Date().getDate() + num),
            new Date().getHours(),
            new Date().getMinutes(),
            new Date().getSeconds(),
            new Date().getMilliseconds()
        )
  }
	// Create an appointment
	const [showFinalModal, setShowFinalModal] = useState(false)
	const [finalData, setFinalData] = useState({})

	function finish() {
		if (trainingId === '') {
			setAlertStyle(Colors.warn)
			setAlertHeader('Предупреждение')
			setAlertText('Выберите тренировку')
			setShowAlert(true)
		} else if (date === 'Выберите дату') {
			setAlertHeader('Предупреждение')
			setAlertStyle(Colors.warn)
			setAlertText('Выберите дату')
			setShowAlert(true)
		} else if (time === 'Выберите время') {
			setAlertHeader('Предупреждение')
			setAlertStyle(Colors.warn)
			setAlertText('Выберите время')
			setShowAlert(true)
		} else {
			setFinalData({
				training: selectedItem,
				date,
				time,
				price,
				inventory: equipmentValue,
				isIndividual: trainingType,
				onlyIndividual,
				individualPrice
			})
			setShowFinalModal(true)
		}
	}

	useEffect(() => {
		getAllTrainings()
		return () => {}
	}, [])
	// CRUD 
	const getAllTrainings = () => {
		axios
			.get('https://mighty-chamber-57023.herokuapp.com/training/all')
			.then(res => setData(res.data.data))
			.catch((err) => console.log('Error: ', err))
			.finally(() => setIsLoading(false))
	}
	const getTime = async () => {
		await axios.post(`https://mighty-chamber-57023.herokuapp.com/training/times`, {
			_id: trainingId,
			date
		})
			.then(res => setTimeList(res.data.data))
			.catch((err) => console.log('Error: ', err))
			.finally(() => setIsTimeLoading(false))
	}

	const renderItem = ({ item }) => {
		return (
			<ItemWrap
				onPress={() => onClickItem(item)} 
				bg={item.selected ? '#0f0f0f' : '#fff'}
				style={[styles.shadow, {justifyContent: 'space-between'}]}
			>
				<PriceWrap>
					<PriceTitle>{item.price}₽</PriceTitle>
				</PriceWrap>
				
					<StyledImage 
						style={{position: 'absolute'}}
						source={{uri: item.url}}
						rezieMode="contain"
					/>
				<TextContainer>
					<ItemText color={item.selected ? '#fff' : '#0f0f0f'}>{item.title}</ItemText>
				</TextContainer>
			</ItemWrap>
		)
	}

	return (
		<Container>
			<StatusBar barStyle={showModal || showAlert || visible || showFinalModal ? 'light-content' : 'dark-content'} backgroundColor={showModal || showAlert || visible || showFinalModal  ? '#0f0f0f70' : '#ffffff'}/>
			<Header>Выберите тренировку</Header>
			{isLoading && <ActivityIndicator style={{margin: 40}} size={64 || 'large'} color="#0f0f0f" />}
			{!isLoading && <FlatList 
					data={data}
					renderItem={renderItem}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={item => item.id}
				/>}

			<SelectItemWrap 
				onPress={() => {
					if (trainingId === '') {
						setAlertText('Выберите тренировку')
						setAlertStyle(Colors.warn)
						setAlertHeader('Предупреждение')
						setShowAlert(true)
					} else {
						setShow(true)
					}
				}}
				style={styles.itemShadow}
			>
				<SelectItemIcon source={require('../../assets/img/emptyDate.png')}/>
				<SelectItemText>{date}</SelectItemText>
				<Text style={{width: 26}}></Text>
			</SelectItemWrap>
			{show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={datePicker}
          mode={'date'}
          display="default"
          onChange={onChange}
          minimumDate={getLimitDate(1)}
          maximumDate={getLimitDate(7)}
        />
      )}
			{/* Options Picker */}
			<ModalComponent
        setVisible={setVisible}
				visible={visible}
				showEquipment={equipment}
				setEquipmentValue={setEquipmentValue}
				equipmentValue={equipmentValue}
				isIndividual={isIndividual}
				onlyIndividual={onlyIndividual}
				setTrainingType={setTrainingType}
				trainingType={trainingType}
				setTrainingId={setTrainingId}
				data={data}
				cancel={setData}
				setSelectedItem={setSelectedItem}
				setDate={setDate}
				setTime={setTime}
      />
			{/* Time Picker */}
			<SelectItemWrap
				onPress={() => onClickTime()} 
				style={styles.itemShadow}
			>
				<SelectItemIcon source={require('../../assets/img/timeIcon.png')}/>
				<SelectItemText>{time}</SelectItemText>
				<Text style={{width: 26}}></Text>
			</SelectItemWrap>
			{/* Modal */}
			<ModalTimePicker
        changeModalVisibility={setShowModal}
        changeData={setTime}
        showModal={showModal}
        options={timeList}
				isLoading={isTimeLoading}
      />
			{/* Alert */}
			<ModalAlert
				changeVisibility={setShowAlert}
				showModal={showAlert}
				header={alertHeader}
				text={alertText}
				style={alertStyle}
			/>
			
			<ButtonWrap 
				onPress={() => finish()}
				style={styles.itemShadow}
			>
				<ButtonText>Записаться</ButtonText>
			</ButtonWrap>

			{/* Final Modal */}
			<FinalModal 
				visible={showFinalModal}
				setVisible={setShowFinalModal}
				data={finalData}
				itemData={data}
				trainingId={trainingId}
				date={date}
				time={time}
				setAlertStyle={setAlertStyle}
				setAlertText={setAlertText}
				setAlertHeader={setAlertHeader}
				setShowAlert={setShowAlert}
				selectedItem={selectedItem}
				setTrainingType={setTrainingType}
				setDate={setDate}
				setDatePicker={setDatePicker}
				setTime={setTime}
				setData={setData}
				trainingType={trainingType}
				inventory={equipmentValue}
				_id={storedCredentials.appointments}
			/>
		</Container>
	)
}

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,

		elevation: 11,
	},
	itemShadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	}
})

export default AppointmentScreen
