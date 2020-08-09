import React from 'react';
import {Text} from 'react-native'
import styles from '../common/styles'

export default function Category(props) {
    let color = props.colorCode
    color = JSON.stringify(color).toLowerCase()
    console.log(color)
    return(
        <Text style={{color: `${color}`}}>{props.category}</Text>
    )
}