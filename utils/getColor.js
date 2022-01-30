export default function getColor(str = 'А') {
		const charCode = str.charCodeAt()
		if (charCode >= 1040 && charCode <= 1042) {
			return '#FF6433'
		} else if (charCode >= 1043 && charCode <= 1045 || charCode === 1025) {
			return '#FFC433'
		} else if (charCode >= 1046 && charCode <= 1049) {
			return '#FFF033'
		} else if (charCode >= 1050 && charCode <= 1052) {
			return '#32A217'
		} else if (charCode >= 1053 && charCode <= 1055) {
			return '#0B9ADD'
		} else if (charCode >= 1056 && charCode <= 1058) {
			return '#3355FF'
		} else if (charCode >= 1059 && charCode <= 1062) {
			return '#6A0BDD'
		} else if (charCode >= 1063) {
			return '#DD0B0B'
		}
	}
