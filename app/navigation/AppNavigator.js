import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import HomeNavigator from './HomeNavigator';
import CustomizeNavigator from './CustomizeNavigator';
import AccountNavigator from './AccountNavigator';

import colors from '../config/colors';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    animationEnabled={true}
    tabBarOptions={{
      activeTintColor: colors.white,
      inactiveTintColor: colors.white,
      indicatorStyle: {
        backgroundColor: colors.secondary,
        height: 70
      },
      labelStyle: { fontSize: 10 },
      pressOpacity: 0,
      showIcon: true,
      scrollEnabled: false,
      style: {
        backgroundColor: colors.tertiary,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        height: 70
      },
      tabStyle: {
        borderRightWidth: 1,
        borderRightColor: colors.light
      }
    }}
    tabBarPosition={"bottom"}
  >
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" size={25} color={color} />
        )
      }}
    />
    <Tab.Screen
      name="Customize"
      component={CustomizeNavigator}
      options={({ navigation }) => ({
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="plus-circle" size={25} color={color} />
        )
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" size={25} color={color} />
        )
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  
})

export default AppNavigator;