import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddExpensesScreen from '../screens/AddExpensesScreen';

const Stack = createStackNavigator();

function AddExpenseNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AddExpenses"
          options={{ headerShown: false }}
          component={AddExpensesScreen}
        />
      </Stack.Navigator>
    );
};

export default AddExpenseNavigator;