import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import db_service from '../Database/service';
export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrData: []
    };
  }

  goToAddNew() {
    this.props.navigation.navigate('AddNewScreen');
  }

  componentWillMount() {
    const result = db_service.getPerson();
    console.log('Result:', JSON.stringify(result));
    const arrData = Object.keys(result).map(e => result[e]);
    this.setState({ arrData });
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#000000', fontWeight: 'bold' }}>Home Page</Text>
        <TouchableOpacity onPress={this.goToAddNew.bind(this)}>
          <Text style={{ color: 'green' }}> New Person</Text>
        </TouchableOpacity>

        {
          this.state.arrData && this.state.arrData.map(item => (
            <ItemPerson key={item.address.length} item={item} />
          ))
        }

      </View>
    );
  }
}

const ItemPerson = ({ item }) => {
  return (
    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
      <Text> {item.name}</Text>
      <Text>{item.address}</Text>
    </View>
  );
}