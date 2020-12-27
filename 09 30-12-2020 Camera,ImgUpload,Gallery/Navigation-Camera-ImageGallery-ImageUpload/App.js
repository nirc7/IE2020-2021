import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './Pages/FirstPage.jsx';
import CameraPage from './Pages/CameraPage';
import ImageGallery from './Pages/ImageGallery';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="CameraPage" component={CameraPage} />
        <Stack.Screen name="ImageGallery" component={ImageGallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} export default App;