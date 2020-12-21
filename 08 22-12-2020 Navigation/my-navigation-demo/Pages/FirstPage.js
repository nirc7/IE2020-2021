import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class FirstPage extends Component {

  btnGo2SecondPage = () => {
    this.props.navigation.navigate('SecondPage');
  }

  btnGo2MaterialTabPage = () => {
    this.props.navigation.navigate('MaterialTabPage');
  }

  render() {
    return (
      <View>
        <Text>First Page</Text>
        <Button title="go 2 Second Page" onPress={this.btnGo2SecondPage} />
        <Text>______ material page _________</Text>
        <Button title="go 2 MaterialTabPage" onPress={this.btnGo2MaterialTabPage} />
      </View>
    )
  }
}
