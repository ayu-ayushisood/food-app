import React from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import styles from '../common/styles'

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			modalVisible: false
		};
	}

	async loadFood(){
		const res = await fetch('https://api.jsonbin.io/b/5f2c36626f8e4e3faf2cb42e');
		const data = await res.json();
		this.setModalVisible(true);
	}

	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	}

	render(){
		return(
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<TouchableHighlight style={styles.openButton} onPress={ () => {this.loadFood()} }> 
				<Text>Launch</Text> 
			</TouchableHighlight>
			<Modal
				animationType="slide"
				transparent={true}
				visible={this.state.modalVisible}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<TouchableHighlight
							style={{ backgroundColor: "#2196F3" }}
							onPress={() => {
								this.setModalVisible(!this.state.modalVisible);
							}}
						>
							<Text style={styles.textStyle}>X</Text>
						</TouchableHighlight>
						<Text style={styles.modalText}>Hello World!</Text>
					</View>
				</View>
			</Modal>
		</View>
		)
	}
}

export default App

