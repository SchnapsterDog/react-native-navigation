import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from '../../screens/Customize/MainScreen';

const Stack = createStackNavigator();

const CustomizeNavigator = () => (
  <Stack.Navigator
    mode="modal"
    initialRouteName="Main"
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen 
      name="Main" 
      component={MainScreen}
      options={() => ({
        title: 'Customize / Main Screen',
      })} 
    />
  </Stack.Navigator>
);

export default CustomizeNavigator;