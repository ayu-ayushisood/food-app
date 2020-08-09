/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight, SectionList} from 'react-native';
import styles from '../common/styles';

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
        data: obj.category.subcategories[0].items,
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
          style={{backgroundColor: '#2196F3'}}
          onPress={() => {
            this.props.setModalVisible(false);
          }}>
          <Text style={styles.textStyle}>X</Text>
        </TouchableHighlight>
        <View>
          <SectionList
            sections={this.state.sectionsData}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <Text>{item}</Text>}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </View>
      </View>
    );
  }
}

export default ModalView;
