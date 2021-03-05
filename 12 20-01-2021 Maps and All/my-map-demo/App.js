import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        onPress={(obj) => { console.log(obj.nativeEvent.coordinate); }}
        style={{ flex: 0.7, width: Dimensions.get('window').width - 30, }}
        region={{
          latitude: 32.157754,
          longitude: 34.844893,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }} >
        <Marker
          coordinate={{
            latitude: 32.15715,
            longitude: 34.847893
          }}
          title='my place:)'
          description='here i am'
        //image={require('../assets/icon.png')}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
