/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight, SectionList, TouchableOpacity, TextInput} from 'react-native';
import styles from '../common/styles';
import SubCategory from './SubCategory'
import Category from './Category'

class ModalView extends React.Component {
  constructor(props){
    super(props);
    this.state= {
			sectionsData: [],
			matchedItemsArray: []
    }
  }

  componentDidMount = () => {
    this.updateStateDataFromApi(this.props.foodData);
  };

  updateStateDataFromApi = (foodData) => {
    let sectionsData = foodData.map((obj) => {
      return {
        title: obj.category.categoryName,
        data: obj.category.subcategories,
        categoryData: obj.category,
        servingSize: obj.servingSize
      };
    });

    this.setState({sectionsData, matchedItemsArray: sectionsData});
  };

  collapse = (name) => {
    let stateObj = {};
    stateObj[`${name}`] = !this.state[`${name}`];
    this.setState(stateObj)
  }

  searchFood = (searchQuery) => {
    let sectionsData = this.state.sectionsData
		let matchedItemsArray = [];
		
    searchQuery == '' ? 
      this.setState({matchedItemsArray: sectionsData})
    :
      this.setState({matchedItemsArray: sectionsData}, () => {
        sectionsData.map((item) => {
					console.log(item)
          if(item.title.includes(searchQuery)){
            matchedItemsArray.push(item)
          }
        })
        this.setState({matchedItemsArray})
      })
  }

  render() {
    return (
      <View style={styles.modalView}>
        <TouchableHighlight
					onPress={ () => {
						this.props.setModalVisible(false);
				}}>
				<Text style={{fontSize: 25, marginTop: 20}}>X</Text>
        </TouchableHighlight>
        <Text style={styles.headline}>Approved Foods List</Text>
        <TextInput 
					onChangeText={(item) => {this.searchFood(item)}} 
					placeholder="Try searching fat, sauces, names..."
					style={styles.searchInput}
          />   
        <View>
			<SectionList
				sections={ this.state.matchedItemsArray }
				keyExtractor={(item, index) => item + index }
				
				renderSectionHeader={ ({section: {title, categoryData}}) => (
					<TouchableOpacity style={styles.categoryContainer} onPress={ ()=> this.collapse(title)} >
						<Category category={title} colorCode={categoryData.colorCode} servingSize={categoryData.servingSize} />
					</TouchableOpacity>
				)}

				renderItem={ ({item, section}) => this.state[`${section.title}`] ? <SubCategory items={item}/> : null}
			/>
        </View>
      </View>
    );
  }
}

export default ModalView;
