import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import MaterialTabPage from './Pages/MaterialTabPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer(){
  return (
    <Drawer.Navigator initialRouteName="FirstPage">
      <Drawer.Screen
        name="FirstPage"
        component={FirstPage}
        options={{ drawerLabel: 'First Page' }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ drawerLabel: 'Second Page' }}
      />
      <Drawer.Screen
        name="MaterialTabPage"
        component={MaterialTabPage}
        options={{ drawerLabel: 'MaterialTab Page' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer>
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen name="FirstPage" component={FirstPage} />
          <Stack.Screen name="SecondPage" component={SecondPage} />
          <Stack.Screen name="MaterialTabPage" component={MaterialTabPage} />
        </Stack.Navigator>
      </MyDrawer>
    </NavigationContainer>
  );
} 