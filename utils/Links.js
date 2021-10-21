import React from 'react'
import {Linking} from 'react-native'

export default function openUrl(link, type) {
    Linking.openURL( type === 'email' ? `mailto:${link}` : type === 'phone' ? `tel:${link}` : link)
}
