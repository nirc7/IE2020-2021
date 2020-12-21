import React, { Component } from 'react'
import {  Button, Text, View } from 'react-native'

export default class SecondPage extends Component {

  btnGo2FirstPage = () => {
    console.log(1);
    this.props.navigation.navigate('FirstPage');
  }

  render() {
    return (
      <View>
        <Text> Second Page </Text>
        <Button title="go 2 first page" onPress={this.btnGo2FirstPage} />
      </View>
    )
  }
}
