import React from 'react';
import {Text, View, Image} from 'react-native'
import styles from '../common/styles'

export default function Category(props) {
    const [url, updateUrl] = React.useState("")
    React.useEffect(()=>{
        if(props.category === 'Lean Protein')
            updateUrl("../common/images/LeanProtein.png")
        else if(props.category === 'Sea Food')
            updateUrl("../common/images/Seafood.png")
        else if(props.category === 'Vegetables')
            updateUrl("../common/images/Vegetables.png")
        else if(props.category === 'Fruits')
            updateUrl("../common/images/Fruits.png")
        else if(props.category === 'Sauces and Seasonings')
            updateUrl("../common/images/Sauces.png")
        else updateUrl("../common/images/Alternatives.png")
    })


    let uri = "../common/images/Sauces.png"
    return(
        <View style={styles.categoryBox}>
            <Image source={require(uri)} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{props.category} </Text>
            {props.servingSize && <Text>({props.servingSize})</Text>}
        </View>
        
    )
}