import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddExpensesScreen from '../screens/AddExpensesScreen';
import AddFoodExpense from '../screens/AddFoodScreen';
import AddOtherExpense from "../screens/AddOtherScreen";
import AddPowerExpense from "../screens/AddPowerScreen";
import AddRentExpense from "../screens/AddRentScreen";
import AddTransportExpense from "../screens/AddTransScreen";

const Stack = createStackNavigator();

function AddExpenseNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AddStack"
          options={{ headerShown: false }}
          component={AddExpensesScreen}
        />

        <Stack.Screen
          name="Food Expense"                
          component={AddFoodExpense}
        />

        <Stack.Screen
          name="Power Expense"                
          component={AddPowerExpense}
        />

        <Stack.Screen
          name="Transport Expense"                
          component={AddTransportExpense}
        />

        <Stack.Screen
          name="Rent Expense"                
          component={AddRentExpense}
        />

        <Stack.Screen
          name="Other Expense"                
          component={AddOtherExpense}
        />

      </Stack.Navigator>
    );
};

export default AddExpenseNavigator;