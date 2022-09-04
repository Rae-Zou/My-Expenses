import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExpenseRecord from '../components/ExpenseRecord';
import ExpenseRecordMoreDetails from "../screens/ExpenseRecordMoreDetails";

const Stack = createStackNavigator();

function ExpensesRecordNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Expense Record 2"
          options={{ headerShown: false }}
          component={ExpenseRecord}
        />

        <Stack.Screen
            name="More Detail"
            options={{ headerShown: false }}
            component={ExpenseRecordMoreDetails}
        />
      </Stack.Navigator>
    );
};

export default ExpensesRecordNavigator;