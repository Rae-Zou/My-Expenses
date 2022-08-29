import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddExpensesScreen from '../screens/AddExpensesScreen';
import AddFoodExpense from '../screens/AddFoodExpense';

const Stack = createStackNavigator();

function AddExpenseNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AddExpenses"
          options={{ headerShown: false }}
          component={AddExpensesScreen}
        />

        <Stack.Screen
          name="AddFoodExpense"          
          component={AddFoodExpense}
        />

      </Stack.Navigator>
    );
};

export default AddExpenseNavigator;