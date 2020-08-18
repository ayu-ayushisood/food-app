import React from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import styles from '../common/styles'
import ModalView from './Modal'
class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			modalVisible: false,
			foodData: []
		};
	}

	async loadFood(){
		this.setState({isLoading: true});
		const res = await fetch(
		'https://api.jsonbin.io/b/5f2c36626f8e4e3faf2cb42e',
		);
		const data = await res.json();
		this.setState({
		foodData: data.categories,
		isLoading: false,
		modalVisible: true,
		});
	}

	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	}

  	render() {
    	return (
      		<View style={styles.mainContainer}>
				<TouchableHighlight
				style={styles.openButton}
				onPress={() => {
					this.loadFood();
				}}>
				<Text>Launch</Text>
				</TouchableHighlight>
				<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.modalVisible}>
					<View>
						<ModalView
							foodData={this.state.foodData}
							setModalVisible={this.setModalVisible}
						/>
					</View>
				</Modal>
			</View>
    	);
  }
}

export default App

