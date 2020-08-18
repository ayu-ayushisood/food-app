/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight, SectionList, TouchableOpacity} from 'react-native';
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
        servingSize: obj.servingSize
      };
    });

    this.setState({sectionsData});
  };

  collapse(name){
    let stateObj = {};
    stateObj[`${name}`] = !this.state[`${name}`];
    this.setState(stateObj, ()=> {console.log("state::", this.state)})
    console.log("state obj", stateObj)
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
        <Text style={{fontSize: 25, marginBottom: 20, fontWeight: '600'}}>Approved Foods List</Text>
        <View>
          <SectionList
            sections={ this.state.sectionsData }
            keyExtractor={(item, index) => item + index }
            
            renderSectionHeader={ ({section: {title, categoryData}}) => (
              <TouchableOpacity style={styles.categoryContainer} onPress={ ()=> this.collapse(title)} >
                <Category category={title} colorCode={categoryData.colorCode} servingSize={categoryData.servingSize} />
              </TouchableOpacity>
            )}

            renderItem={ ({item, title, section}) => this.state[`${section.title}`] ? <SubCategory items={item}/> : null}
          />
        </View>
      </View>
    );
  }
}

export default ModalView;
