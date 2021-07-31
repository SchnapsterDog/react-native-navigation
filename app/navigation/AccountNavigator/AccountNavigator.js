import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from '../../screens/Account/MainScreen';
import colors from "../../config/colors";

const Stack = createStackNavigator();

const AccountNavigator = () => (
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
        title: 'Account / Main Screen'
      })} 
    />
  </Stack.Navigator>
);

export default AccountNavigator;