import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MenuBarNavigator from "./MenuBarNavigator";
import OnBoardingNavigator from "./OnBoardingNavigator";

const Stack = createStackNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AppStack"
            options={{ headerShown: false }}
            component={OnBoardingNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigator;