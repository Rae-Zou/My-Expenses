import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from '../screens/SettingsScreen';
import DataStoragePrivacyScreen from '../screens/DataStoragePrivacyScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Stack = createStackNavigator();

function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsStack"
        options={{ headerShown: false }}
        component={SettingsScreen}
      />
      
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
      />

      <Stack.Screen 
        name="Data Storage and Privacy" 
        component={DataStoragePrivacyScreen} 
      />
  
    </Stack.Navigator>
 );
};
  
export default SettingsNavigator;
