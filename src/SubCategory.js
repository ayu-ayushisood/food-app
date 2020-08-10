import React from 'react';
import {Text, View} from 'react-native'
import styles from '../common/styles'

export default function SubCategory(props) {
    return(
        <View style={styles.subcategoryBox}>
            <Text style={styles.subcategoryName}>{props.items.subCategoryname.toUpperCase()}</Text>
            
            {props.items.items.map((item) => {
                return(
                    <View style={styles.foodItems}>
                        <Text>{item}</Text>
                    </View>
                )
            })}
        </View>
    )
}