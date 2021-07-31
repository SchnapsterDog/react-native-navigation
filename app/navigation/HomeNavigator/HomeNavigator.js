import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../../config/colors";
import MainScreen from '../../screens/Home/MainScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    mode="modal"
    initialRouteName="Main"
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen 
      name="Main" 
      component={MainScreen}
      options={() => ({
        title: 'Home / Main Screen'
      })} 
      />
  </Stack.Navigator>
);

export default HomeNavigator;