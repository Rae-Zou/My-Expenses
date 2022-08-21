import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === expensesName) {
              iconName = focused ? 'list' : 'md-stats-chart-outline';
            } else if (rn === addName) {
              iconName = focused ? 'add' : 'md-add-circle';
            } else if (rn === forecastName) {
              iconName = focused ? 'forecast' : 'md-trending-up-outline';
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
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            "paddingBottom": 10,
            "fontSize": 10
          },
        })}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={expensesName} component={ExpensesScreen} />
        <Tab.Screen name={addName} component={AddExpensesScreen} />
        <Tab.Screen name={forecastName} component={ForecastScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;