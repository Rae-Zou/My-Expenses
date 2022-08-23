import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Navigators
import SettingsNavigator from "./SettingsNavigator";
import ForecastNavigator from "./ForecastNavigator";
import AddExpenseNavigator from "./AddExpenseNavigator";
import ExpensesNavigator from "./ExpensesNavigator";
import HomeNavigator from "./HomeNavigator";

// Screens
import HomeScreen from '../screens/HomeScreen';
import ExpensesScreen from '../screens/ExpensesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ForecastScreen from '../screens/ForecastScreen';
import AddExpensesScreen from '../screens/AddExpensesScreen';


//Screen names
const homeName = "Home";
const expensesName = "Expenses";
const settingsName = "Settings";
const forecastName = "Forecast";
const addName = "Add";


const Tab = createBottomTabNavigator();


function MenuBarNavigator() {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === expensesName) {
              iconName = focused ? 'stats-chart' : 'md-stats-chart-outline';
            } else if (rn === addName) {
              iconName = focused ? 'md-add-circle' : 'md-add-circle-outline';
            } else if (rn === forecastName) {
              iconName = focused ? 'md-trending-up' : 'md-trending-up-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: [
            {
              "display": "flex"
            },
            null
          ],
          tabBarActiveTintColor: "tomato", //#FFC727
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            "paddingBottom": 10,
            "fontSize": 10
          },
        })}>

        <Tab.Screen name={homeName} component={HomeNavigator} />
        <Tab.Screen name={expensesName} component={ExpensesNavigator} />
        <Tab.Screen name={addName} component={AddExpenseNavigator} />
        <Tab.Screen name={forecastName} component={ForecastNavigator} />
        <Tab.Screen name={settingsName} component={SettingsNavigator} />


      </Tab.Navigator>

  );
}

export default MenuBarNavigator;