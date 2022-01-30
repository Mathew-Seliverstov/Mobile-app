import React, {useState} from 'react'
import {Modal, Text, View} from "react-native";
// Styled Components...
import {
    Container,
    StyledModal,
    Header,
    TextBlock,
    Title,
    BtnBlock,
    ConfirmBtn,
    BtnDeleteBlock,
    ConfirmDeleteBtn,
    BtnText
} from "./styles";
import {Colors} from '../styles';


const ModalAlert = (props) => {
  if (props.cancelBtn) {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={props.showModal}
            onRequestClose={() => props.changeVisibility(false)}
        >
            <Container onPress={() => props.changeVisibility(false)}>
                <StyledModal>
                    <Header color={props.style}>{props.header}</Header>
                    <TextBlock>
                      <Title>{props.text}</Title>
                    </TextBlock>
                    <BtnDeleteBlock>
                      <ConfirmDeleteBtn color={Colors.error} onPress={() => props.changeVisibility(false)}>
                        <BtnText>Отмена</BtnText>
                      </ConfirmDeleteBtn>
                      <ConfirmDeleteBtn color={props.style} onPress={() => props.changeVisibility(false)}>
                        <BtnText>ОК</BtnText>
                      </ConfirmDeleteBtn>
                    </BtnDeleteBlock>
                </StyledModal>
            </Container>
        </Modal>
    )
  } else {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={props.showModal}
            onRequestClose={() => props.changeVisibility(false)}
        >
            <Container onPress={() => props.changeVisibility(false)}>
                <StyledModal>
                    <Header color={props.style}>{props.header}</Header>
                    <TextBlock>
                      <Title>{props.text}</Title>
                    </TextBlock>
                    <BtnBlock>
                      <ConfirmBtn color={props.style} onPress={() => props.changeVisibility(false)}>
                        <BtnText>ОК</BtnText>
                      </ConfirmBtn>
                    </BtnBlock>
                </StyledModal>
            </Container>
        </Modal>
    )
  }
}

export default  ModalAlert