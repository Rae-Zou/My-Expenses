import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginNavigator from "./LoginNavigator";
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
            name="MyLogin"
            options={{ headerShown: false }}
            component={LoginNavigator}
        />
      </Stack.Navigator>
    );
};

export default OnBoardingNavigator;