import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ExpensesScreen from '../screens/ExpensesScreen';
import ExpenseRecord from '../components/ExpenseRecord';
import ExpensesRecordNavigator from "./ExpenseRecordNavigation";

const Stack = createStackNavigator();

function ExpensesNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ExpensesScreen"
          options={{ headerShown: false }}
          component={ExpensesScreen}
        />

      <Stack.Screen
          name="Expense Record"
          component={ExpensesRecordNavigator}
      />

      </Stack.Navigator>

      
    );
};

export default ExpensesNavigator;