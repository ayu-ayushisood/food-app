import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const loadFood = async function(){
	const res = await fetch('https://api.jsonbin.io/b/5f2c36626f8e4e3faf2cb42e');
	const data = await res.json();
	console.log(data)
}

const App = () => (
	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<TouchableOpacity onPress={ () => {loadFood()} }> 
			<Text>Launch</Text> 
		</TouchableOpacity>
  	</View>
)

export default App

