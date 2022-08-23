import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ForecastScreen from '../screens/ForecastScreen';

const Stack = createStackNavigator();

function ForecastNavigator (){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ForecastScreen"
          options={{ headerShown: false }}
          component={ForecastScreen}
        />
      </Stack.Navigator>
    );
};

export default ForecastNavigator;