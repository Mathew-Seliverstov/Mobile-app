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

const ModalComponent = ({ visible, setVisible, setEquipment, setGroup, showEquipment, showGroup, data, cancel, setSelectedItem, equipmentValue, groupValue }) => {
  const onConfirm = () => {
    if (equipmentValue === '') {
      setEquipment('не требуется, есть свое')
    } 
    if (groupValue === '') {
      setGroup('групповая')
    }
    setVisible(false)
  }

  const onCancel = () => {
    setVisible(false)
    setSelectedItem('')
    setGroup('')
    setEquipment('')
    const newData = data.map(el => {
      return {
        ...el,
        selected: false
      }
    })
    cancel(newData)
  }

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Container activeOpacity={1} onPress={() => setVisible(false)}>
        <StyledModal>
          <Header>info</Header>
          {showEquipment && (
            <PickerComponent 
              setValue={setEquipment}
              options={[{name: 'не требуется, есть свое', id: 1}, {name: 'с арендой снаряжения', id: 2}]}
            />
          )}
          {!showGroup && (
            <PickerComponent 
              setValue={setGroup}
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