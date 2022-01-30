import React, {useState} from 'react'
import {Image, Modal, ScrollView, TouchableOpacity, ActivityIndicator} from "react-native";
// Styled Components...
import {
    Container,
    Header,
    Title,
    CloseButton,
    CloseIcon,
    StyledModal,
    Option,
    OptionText
} from "./styles"

const ModalTimePicker = (props) => {
  const onPressItem = (option) => {
    if (option.disabled === false) {
      props.changeModalVisibility(false)
      props.changeData(option.time)
    }
  }

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={props.showModal}
      onRequestClose={() => props.changeModalVisibility(false)}
    >
      <Container>
        <StyledModal>
          {props.isLoading && <>
              <CloseButton onPress={() => props.changeModalVisibility(false)}>
                <CloseIcon source={require('../../assets/img/closeModal.png')}/>
              </CloseButton>
            <ActivityIndicator style={{margin: 20}} size={36 || 'large'} color="#0f0f0f" />
            </>
          }
          {!props.isLoading && <>
            <Header>
              <Title>Выберите время:</Title>
              <CloseButton onPress={() => props.changeModalVisibility(false)}>
                <CloseIcon source={require('../../assets/img/closeModal.png')}/>
              </CloseButton>
            </Header>
            
            <ScrollView>
              {props.options.map((item) => (
                <Option 
                  disabled={item.disabled}
                  key={item.time}
                  activeOpacity={item.disabled ? 1 : 0.2}
                  onPress={() => onPressItem(item)}
                >
                  <OptionText disabled={item.disabled}>{item.time}</OptionText>
                </Option>
              ))}
            </ScrollView>
          </>}
        </StyledModal>
      </Container>
    </Modal>
  )
}

export default  ModalTimePicker