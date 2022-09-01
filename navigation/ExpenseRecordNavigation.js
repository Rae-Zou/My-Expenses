import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExpenseRecord from '../screens/ExpenseRecord';
import ExpenseRecordMoreDetails from "../screens/ExpenseRecordMoreDetails";

const Stack = createStackNavigator();

function ExpensesRecordNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Expense Record"
          component={ExpenseRecord}
        />

        <Stack.Screen
            name="More Detail"
            component={ExpenseRecordMoreDetails}
        />
      </Stack.Navigator>
    );
};

export default ExpensesRecordNavigator;