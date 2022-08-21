import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from '../screens/SettingsScreen';
import DataStoragePrivacyScreen from '../screens/DataStoragePrivacyScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Stack = createStackNavigator();

function SettingsNavigator() {
    console.log("SettingsNavigator");
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
      />
      
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
      />

      <Stack.Screen 
        name="dataStoPriName" 
        component={DataStoragePrivacyScreen} 
      />
  
    </Stack.Navigator>
    console.log("SettingsNavigato endr");
};
  
export default SettingsNavigator;
