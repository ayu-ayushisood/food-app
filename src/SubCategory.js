import React from 'react';
import {Text, View} from 'react-native'

export default function SubCategory(props) {
    return(
        <View>
            <Text>{props.items.subCategoryname}</Text>
            <Text>{props.items.items}</Text>
        </View>
    )
}