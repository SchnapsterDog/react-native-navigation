import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeNavigator from './HomeNavigator';
import CustomizeNavigator from './CustomizeNavigator';
import AccountNavigator from './AccountNavigator';

import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.white,
      activeTintColor: colors.primary,
      inactiveBackgroundColor: colors.white,
      inactiveTintColor: colors.secondary,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons 
            name="home" 
            size={size} 
            color={color}
          />
        )
      }}
    />
    <Tab.Screen
      name="Customize"
      component={CustomizeNavigator}
      options={({ navigation }) => ({
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            size={size}
            color={color}
          />
        )
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons 
            name="account" 
            size={size} 
            color={color}
          />
        )
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 5,
    height: 60,
    width: 60,
    bottom: 10
  }
})

export default AppNavigator;