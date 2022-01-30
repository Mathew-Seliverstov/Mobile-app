import React, {useState} from 'react'
import { Modal } from "react-native";
// Styled Components...
import {
    Container,
    StyledModal,
    Header,
    ButtonsContiner,
    ButtonWrap,
    ButtonText
} from './styles'
import PickerComponent from '../PickerComponent'

const ModalComponent = ({ visible, setVisible, setEquipmentValue, setTrainingType, showEquipment, isIndividual, data, cancel, setSelectedItem, equipmentValue, trainingType, setDate, setTime, onlyIndividual, setTrainingId }) => {
  const onConfirm = () => {
    if (equipmentValue === '') {
      setEquipmentValue('не требуется, есть свое')
    } 
    if (trainingType === '' && !onlyIndividual) {
      setTrainingType('групповая')
    } else if (onlyIndividual) {
      setTrainingType('индивидуальная')
    }
    setVisible(false)
  }

  const onCancel = () => {
    setVisible(false)
    setSelectedItem('')
		setTrainingId('')
    setTrainingType('')
    setEquipmentValue('')
    const newData = data.map(el => {
      return {
        ...el,
        selected: false
      }
    })
    cancel(newData)
    setDate('Выберите дату')
    setTime('Выберите время')
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
          {showEquipment && (
            <PickerComponent 
              setValue={setEquipmentValue}
              label="Снаряжение"
              options={[{name: 'не требуется, есть свое', id: 1}, {name: 'с арендой снаряжения', id: 2}]}
            />
          )}
          {isIndividual && (
            <PickerComponent 
              setValue={setTrainingType}
              label="Тип"
              options={[{name: 'групповая', id: 1}, {name: 'индивидуальная', id: 2}]}
            />
          )}
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

export default  ModalComponent