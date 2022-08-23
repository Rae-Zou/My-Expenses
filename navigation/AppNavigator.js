import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MenuBarNavigator from "./MenuBarNavigator";
import OnBoardingNavigator from "./OnBoardingNavigator";

const AppStack = createStackNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen
            name="AppStack"
            options={{ headerShown: false }}
            component={OnBoardingNavigator}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigator;