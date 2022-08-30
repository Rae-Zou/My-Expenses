import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddExpensesScreen from '../screens/AddExpensesScreen';
import AddFoodExpense from '../screens/AddFoodExpense';
import AddOtherExpense from "../screens/AddOtherExpense";
import AddPowerExpense from "../screens/AddPowerExpense";
import AddRentExpense from "../screens/AddRentExpense";
import AddTransportExpense from "../screens/AddTransportExpense";

const Stack = createStackNavigator();

function AddExpenseNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Add"
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