import React, {useState} from "react";
import {Text, View, StyleSheet} from 'react-native'
// Styled Components
import {
    CardWrap,
    TextWrap,
    Title,
    Subtitle,
    InfoWrap,
    InfoTextWrap,
    InfoPriceWrap,
    InfoText
} from './styles'
import axios from 'axios'
import { Colors } from "../../components/styles";
import ModalAlert from '../../components/ModalAlert'

const AppointmentCard = ({item, appointmentId}) => {
  const [showAlert, setShowAlert] = useState(false)
  const {date, time} = item

  async function onDelete() {
    setShowAlert(true)
    // await axios.post('https://mighty-chamber-57023.herokuapp.com/appointment/delete', {
    //     _id: appointmentId,
    //     trainingId: item.trainingId,
    //     date,
    //     time
    //   })
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(`Error: ${err}`))
  } 

  return (
    <CardWrap
      onLongPress={() => onDelete()}
      style={styles.shadow}
    >
      <ModalAlert
				changeVisibility={setShowAlert}
				showModal={showAlert}
				header="Подтверждение"
				text="Вы уверены, что хотите отменить тренеровку?"
				style={Colors.success}
        cancelBtn={true}
			/>
      <TextWrap>
        <Title>Тренировка: </Title>
        <Subtitle>{item.training}</Subtitle>
      </TextWrap>
      <InfoWrap>
        <InfoTextWrap>
          <InfoText>{item.date}</InfoText>
        </InfoTextWrap>
        <InfoTextWrap>
          <InfoText>{item.time}</InfoText>
        </InfoTextWrap>
        <InfoPriceWrap>
          <InfoText>{item.price}₽</InfoText>
        </InfoPriceWrap>
      </InfoWrap>
    </CardWrap>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})

export default AppointmentCard
