import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ExpensesScreen from '../screens/ExpensesScreen';

const Stack = createStackNavigator();

function ExpensesNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ExpensesScreen"
          options={{ headerShown: false }}
          component={ExpensesScreen}
        />
      </Stack.Navigator>
    );
};

export default ExpensesNavigator;