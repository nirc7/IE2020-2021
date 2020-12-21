import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TabbedAlternatePage from './TabbedAlternatePage';
import TabbedSecondAlternatePage from './TabbedSecondAlternatePage';

const Tab = createMaterialBottomTabNavigator();

export default class MaterialTabPage extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="TabbedSecondAlternatePage"
        activeColor="#55ff00"
        inactiveColor='black'
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen
          name="TabbedAlternatePage"
          component={TabbedAlternatePage}
          options={{
            tabBarLabel: 'bell',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="TabbedSecondAlternatePage"
          component={TabbedSecondAlternatePage}
          options={{
            tabBarLabel: 'ball',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="soccer" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }
}
