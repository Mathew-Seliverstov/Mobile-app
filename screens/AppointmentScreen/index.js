import React, { useEffect, useState } from 'react'
import {
	Container,
	Header,
	ItemWrap,
	StyledImage,
	TextContainer,
	ItemText,
	Label,
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

const AppointmentScreen = () => {
	const [isLoading, setIsLoading] = useState(true)
	// Select training
	const [data, setData] = useState([])
	const [selectedItem, setSelectedItem] = useState('')
	const [trainingId, setTrainingId] = useState('')
	const [visible, setVisible] = useState(false)
	const [equipment, setEquipment] = useState(false)
	const [group, setGroup] = useState(true)
	const [equipmentValue, setEquipmentValue] = useState('')
	const [groupValue, setGroupValue] = useState('')

	const onClickItem = (item) => {
		setSelectedItem(item.title)
		setTrainingId(item.id)
		const newData = data.map(el => {
			if (item.id === el.id) {
				if (el.selected) {
					setSelectedItem('')
					setTrainingId('')
					setEquipmentValue('')
					setGroupValue('')
					setDate('Выберите дату')
					setTime('Выберите время')
				} else if (el.equipment && el.group) {
					setVisible(true)
					setEquipment(true)
					setGroup(false)
				} else if (el.equipment) {
					setVisible(true)
					setEquipment(true)
				} else if (!el.group) {
					setVisible(true)
					setGroup(false)
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
	// const [training, setTraining] = useState('')
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
			setShowAlert(true)
			setAlertText('Выберите дату')
		} else {
			getTime()
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
			function nullify() {
				setTraining('')
				setDate('Выберите дату')
				setDatePicker(new Date())
				setTime('Выберите время')
				const newData = data.map(el => {
					return {
						...el,
						selected: false
					}
				})
				setData(newData)
			}
			// axios...
			axios
				.put('https://mighty-chamber-57023.herokuapp.com/training/update', {
					_id: trainingId,
					date,
					time
				})
				.then(res => {
					if (res.data.status === 400) {
						setAlertStyle(Colors.error)
						setAlertText(res.data.message)
						setAlertHeader('Ошибка')
						setShowAlert(true)
					} else if (res.data.status === 200) {
						nullify()
					}
				})
				.catch(err => console.log('Error: ', err))
			
			// console.log({
			// 	training: selectedItem,
			// 	date,
			// 	time,
			// 	inventory: equipmentValue,
			// 	group: groupValue
			// })
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
				style={styles.shadow}
			>
					<StyledImage 
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
			<StatusBar barStyle={showModal || showAlert || visible ? 'light-content' : 'dark-content'} backgroundColor={showModal || showAlert || visible ? '#00000050' : '#fff'}/>
			<Header>Выберите тренировку</Header>
			{isLoading && <ActivityIndicator size={64} color={'#0f0f0f'} />}
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
				setEquipment={setEquipmentValue}
				equipmentValue={equipmentValue}
				showGroup={group}
				setGroup={setGroupValue}
				groupValue={groupValue}
				data={data}
				cancel={setData}
				setSelectedItem={setSelectedItem}
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
				<ButtonText>записаться</ButtonText>
			</ButtonWrap>
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
