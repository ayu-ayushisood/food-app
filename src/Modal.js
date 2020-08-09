/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight, SectionList} from 'react-native';
import styles from '../common/styles';
import SubCategory from './SubCategory'
import Category from './Category'

class ModalView extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      sectionsData: []
    }
  }

  componentDidMount = () => {
    this.updateStateDataFromApi(this.props.foodData);
  };

  updateStateDataFromApi = (foodData) => {
    let sectionsData = foodData.map((obj) => {
      console.log("object", obj)
      return {
        title: obj.category.categoryName,
        data: obj.category.subcategories,
        categoryData: obj.category,
      };
    });

    this.setState({sectionsData});
  };

  render() {
    console.log(this.state.sectionsData)
    return (
      <View style={styles.modalView}>
        <TouchableHighlight
          onPress={() => {
            this.props.setModalVisible(false);
          }}>
          <Text style={{fontSize: 25}}>X</Text>
        </TouchableHighlight>
        <Text style={{fontSize: 25}}>Approved Foods List</Text>
        <View>
          <SectionList
            sections={this.state.sectionsData}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <SubCategory items={item} />}
            renderSectionHeader={({section: {title, categoryData}}) => (
              <TouchableHighlight style={styles.categoryContainer} onPress={()=>{this.setState({clicked: true})}}>
                <Category category={title} colorCode={categoryData.colorCode}/>
              </TouchableHighlight>
            )}
          />
        </View>
      </View>
    );
  }
}

export default ModalView;
