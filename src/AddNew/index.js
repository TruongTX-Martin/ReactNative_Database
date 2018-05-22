import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import db_service from '../Database/service';
export default class index extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: ''
    };
  }

  onCancel() {
    this.props.navigation.goBack();
  }

  onSave() {
    if (this.state.name && this.state.address) {
      db_service.savePerson({
        'name': this.state.name,
        'address': this.state.address
      })
    }
  }
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#000000', fontWeight: 'bold' }}>Add New</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingHorizontal: 40 }}>
          <Text>Name</Text>
          <TextInput
            style={{ width: 200, height: 40, marginLeft: 10, paddingLeft: 5, borderWidth: 1, borderColor: '#cacaca', borderRadius: 5 }}
            placeholder={'Type name'}
            value={this.state.value}
            onChangeText={name => this.setState({ name })}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingHorizontal: 40 }}>
          <Text>Address</Text>
          <TextInput
            style={{ width: 200, height: 40, marginLeft: 10, paddingLeft: 5, borderWidth: 1, borderColor: '#cacaca', borderRadius: 5 }}
            placeholder={'Type address'}
            value={this.state.address}
            onChangeText={address => this.setState({ address })}
          />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={this.onCancel.bind(this)}>
            <Text style={{ marginLeft: 50 }} >Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onSave.bind(this)} >
            <Text style={{ marginRight: 50 }} >Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}