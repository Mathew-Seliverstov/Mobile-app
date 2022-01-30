import React from 'react'
import { Modal, Text, StyleSheet } from "react-native";
import axios from 'axios'
// Styled Components...
import {
    Container,
    StyledModal,
    ContentWrap,
    OptionsWrap,
    MiniPriceWrap,
    MiniPrice,
    Item,
    Title,
    Subtitle,
    PriceWrap,
    TitlePrice,
    Price,
    ButtonsContiner,
    ButtonWrap,
    ButtonText
} from './styles'
// Colors
import { Colors } from '../styles'

const FinalModal = ({ _id, visible, setVisible, data, inventory, trainingType, itemData, trainingId, date, time, setAlertStyle, setAlertText, setAlertHeader, setShowAlert, setTrainingType, setDate, setDatePicker, setTime, setData, selectedItem }) => {
	function getPrice() {
		if (data.inventory === 'с арендой снаряжения' && data.isIndividual === 'индивидуальная') {
      if (data.onlyIndividual) {
        return parseInt(data.price) + 2000
      } else {
        return 2000 + parseInt(data.individualPrice)
      }
		} else if (data.inventory === 'с арендой снаряжения') {
			return parseInt(data.price) + 2000
		} else if (data.isIndividual === 'индивидуальная') {
      if (data.onlyIndividual) {
        return data.price
      } else {
        return data.individualPrice
      }
		} else {
      return data.price
    }
	}

  function showMiniPrice(type) {
    if (type === 'inventory') {
      if (data.inventory === 'с арендой снаряжения') {
        return (
          <MiniPriceWrap>
              <MiniPrice>
                {data.inventory === 'с арендой снаряжения' ? '+2000' : ''} 
              <Text style={{fontSize: 14}}>₽</Text>
            </MiniPrice>
          </MiniPriceWrap>
        )
      }
    } else if (data.isIndividual === 'индивидуальная' && !data.onlyIndividual) {
      return (
        <MiniPriceWrap>
            <MiniPrice>
              +{data.individualPrice - data.price}
            <Text style={{fontSize: 14}}>₽</Text>
          </MiniPrice>
        </MiniPriceWrap>
      )
    }
  }

  function showOptions() {
    if (data.isIndividual !== '' && data.inventory !== '') {
      return (
        <Item style={styles.shadow}>
          <Title>Снаряжение</Title>
          <OptionsWrap>
            <Subtitle>{data.inventory}</Subtitle>
            {showMiniPrice('inventory')}
          </OptionsWrap>
          <Title style={{marginTop: 5}}>Тип</Title>
          <OptionsWrap>
            <Subtitle>{data.isIndividual}</Subtitle>
            {showMiniPrice()}
          </OptionsWrap>
        </Item>
      )
    }
  }

  const createAppointment = () => {
    const appointment = {
      date,
      time,
      training: selectedItem,
      trainingId: trainingId,
      inventory,
      trainingType,
      price: getPrice()
    }
    axios
      .post('https://mighty-chamber-57023.herokuapp.com/appointment/create', {
        _id,
        appointments: [
          appointment
        ]
      })
      .then(res => {
        if (res.status === 200) {
          setAlertStyle(Colors.success)
					setAlertText('Запись прошла успешно!')
					setAlertHeader('Успешно')
          setShowAlert(true)
        } else if (res.status !== 200) {
          setAlertStyle(Colors.error)
					setAlertText(res.data.message)
					setAlertHeader('Ошибка')
          setShowAlert(true)
        }
      })
      .catch(err => console.log('Error: ', err))
      .finally(() => {})
  }

  const onConfirm = () => {
    setVisible(false)
    nullify()
    
    function nullify() {
			setTrainingType('')
			setDate('Выберите дату')
			setDatePicker(new Date())
			setTime('Выберите время')
			const newData = itemData.map(el => {
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
          createAppointment()
				}
			})
			.catch(err => console.log('Error: ', err))
  }

  const onCancel = () => {
    setVisible(false)
  }

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Container>
        <StyledModal>
          <Text style={{fontSize: 20, fontWeight: 'bold', width: '100%', padding: 8, textAlign: 'left'}}>Вы уверены что хотите записаться?</Text>
          <ContentWrap>
            <Item style={styles.shadow}>
              <Title>Тренировка</Title>
              <Subtitle>{data.training}</Subtitle>
              <Title>Дата</Title>
              <Subtitle>{data.date}</Subtitle>
              <Title>Время</Title>
              <Subtitle>{data.time}</Subtitle>
            </Item>
            {showOptions()}
            <PriceWrap style={styles.shadow}>
              <TitlePrice>Итог:</TitlePrice>
              <Price>{getPrice()}<Text style={{fontSize: 18}}>₽</Text></Price>
            </PriceWrap>
          </ContentWrap>
          <ButtonsContiner>
            <ButtonWrap 
              type="cancel"
              onPress={() => onCancel()}
            >
            <ButtonText>Отмена</ButtonText>
          </ButtonWrap>
          <ButtonWrap
            onPress={() => onConfirm()}
          >
            <ButtonText>Ок</ButtonText>
          </ButtonWrap>
          </ButtonsContiner>
          
        </StyledModal>
      </Container>
    </Modal>
  )
}

const styles = StyleSheet.create({
	shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  }
})

export default  FinalModal