import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ForecastScreen from '../screens/ForecastScreen';
import ForecastRentScreen from "../screens/ForecastRentScreen";
import ForecastFoodScreen from "../screens/ForecastFoodScreen";
import ForecastPowerScreen from "../screens/ForecastPowerScreen";
import ForecastTransScreen from "../screens/ForecastTransScreen";
import ForecastOtherScreen from "../screens/ForecastOtherScreen";

const Stack = createStackNavigator();

function ForecastNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ForecastScreen"
          options={{ headerShown: false }}
          component={ForecastScreen}
        />
        <Stack.Screen
          name="Expense for Rent"
          component={ForecastRentScreen}
        />
        <Stack.Screen
          name="Expense for Food"
          component={ForecastFoodScreen}
        />
        <Stack.Screen
          name="Expense for Power"
          component={ForecastPowerScreen}
        />
        <Stack.Screen
          name="Expense for Transport"
          component={ForecastTransScreen}
        />
        <Stack.Screen
          name="Expense for Other"
          component={ForecastOtherScreen}
        />
      </Stack.Navigator>
    );
};

export default ForecastNavigator;