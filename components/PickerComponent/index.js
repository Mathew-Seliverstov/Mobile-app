import React, {useState} from 'react'
import { Picker } from '@react-native-community/picker'
import { Text, StyleSheet } from 'react-native'
import {
	Container,
	Label
} from './styles'

const PickerComponent = (props) => {
	const {setValue, options} = props
	const [text, setText] = useState(options[0].name)

	return (
		<Container style={styles.shadow}>
			<Label>Снаряжение</Label>
			<Picker
				enabled={true}
				selectedValue={text}
				mode="dropdown"
				onValueChange={value => {
					setValue(value)
					setText(value)
				}}
				style={{backgroundColor: '#f7f7f7', marginTop: 5}}
			>
				{
					options.map(item => {
						return (
							<Picker.Item label={item.name} value={item.name} key={item.id} />
						)
					})
				}
			</Picker>
		</Container>
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

module.exports = PickerComponent
