import * as React from 'react';
import {LineChart} from "react-native-chart-kit";
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import ListItem  from "../components/ListItem";
import {getAllData, getData, getTotal} from "../database/Database";
import {calForecastData, calcosts, calmonthDays} from "../database/ForecastData";

var rent_total= getTotal("Rent");
var food_total = getTotal("Food");
var pow_total =  getTotal("Power");
var trans_total = getTotal("Transport");
var other_total = getTotal("Other");

// total cost of each category input data
var costDict = {"Rent" : rent_total, 
                "Food" : food_total,
                "Power" : pow_total,
                "Transport" : trans_total,
                "Other" : other_total};

var total_cost = rent_total+pow_total+trans_total+other_total;  // total cost of all input data

var total_forecast_cost = calForecastData()                              // total forecast cost of all input data
var costs = calcosts()                                                   // predicted cost for each period
var monthDays = calmonthDays()
console.log('total_forecast_cost: '+total_forecast_cost);

monthDays = monthDays.filter(function(value, index, Arr) {
  return index % 6 == 0;
});
costs = costs.filter(function(value, index, Arr) {
  return index % 6 == 0;
});
const monthDaysStr = monthDays.map(String)


// line char configuration 
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#77B4C7",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

// line char data 
const data = {
  labels: monthDaysStr,
  datasets: [
  {
    data: costs,  // predicted cost
    color: (opacity = 1) => `rgba(119, 180, 199, ${opacity})`, // optional
    strokeWidth: 2 // optional
  }
],
//legend: ["Peak Expenses"] // optional
};


export default function ForecastScreen({ navigation }) {
  const rowItems = [
    {
    title: ("🏠 Rent  $" + costDict["Rent"] ),
    onPress: () =>navigation.navigate('Expense for Rent'), 
    },
    {
    title: ("🍴 Food  $" + costDict["Food"]),
    onPress: () =>navigation.navigate('Expense for Food'),
    },
    {
    title: ("💡 Power  $" + costDict["Power"]),
    onPress: () =>navigation.navigate('Expense for Power'),
    },
    {
    title: ("🚌 Transport  $" + costDict["Transport"]),
    onPress: () =>navigation.navigate('Expense for Transport'),
    },
    {
    title: ("Other  $" + costDict["Other"]),
    onPress: () =>navigation.navigate('Expense for Other'),
    },
    
    ];

    return (
        <ScrollView style={styles.container}>
            <LineChart
              data={data}
              width={Dimensions.get("window").width}
              height={256}
              verticalLabelRotation={0}
              chartConfig={chartConfig}
              bezier
              fromZero ={true}
              style={{
                marginVertical: 18,
                borderRadius: 16
              }}
            />

            <Text style={styles.forecastCost}>{("Your forecast cost for next month")}</Text>
            <Text style={styles.forecastCost}>{("Total: 💲" + total_forecast_cost.toFixed(2))}</Text>

            {rowItems.map((item, index) => (
                <ListItem
                key={index}
                showBottomLine={index !== rowItems.length - 1}
                onPress={item.onPress}
                title={item.title}
                />
            ))}
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: "white",
    },
    forecastCost: {
      textAlign: "center",
      marginBottom: 10,
      color: "#595D58",
      fontSize: 18,
      fontWeight: "bold",
    }, 
});