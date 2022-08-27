import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import MenuBarNavigator from "./MenuBarNavigator";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

function LoginNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
            name="AppStack"
            options={{ headerShown: false }}
            component={MenuBarNavigator}
        />

      </Stack.Navigator>
    );
};

export default LoginNavigator;