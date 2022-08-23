import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MenuBarNavigator from "./MenuBarNavigator";
import OnboardingScreen from "../screens/OnboardingScreen";

const Stack = createStackNavigator();

function OnBoardingNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={OnboardingScreen}
        />
        <Stack.Screen
            name="AppStack"
            options={{ headerShown: false }}
            component={MenuBarNavigator}
        />
      </Stack.Navigator>
    );
};

export default OnBoardingNavigator;