import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from "../screens/AddExpensesScreen";
import AddExpenseNavigator from "./AddExpenseNavigator";

const Stack = createStackNavigator();

function HomeNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="AddExpenseNavigator"
          options={{ headerShown: false }}
          component={AddExpenseNavigator}
        />
      </Stack.Navigator>
    );
};

export default HomeNavigator;