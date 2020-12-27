import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class FirstPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red', fontSize: 28, margin: 15 }}>First Page!</Text>
        <View style={{ margin: 20 }}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('CameraPage');
          }}>
            <Text style={{ color: 'blue', fontSize: 28, margin: 15, borderColor: "black", borderWidth: 2, borderRadius: 15, padding: 15, backgroundColor: "lightgrey" }} >
              Goto Camera Page!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('ImageGallery');
          }}>
            <Text style={{ color: 'blue', fontSize: 28, margin: 15, borderColor: "black", borderWidth: 2, borderRadius: 15, padding: 15, backgroundColor: "lightgrey" }} >
              Goto ImageGallery Page!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
