import * as React from 'react';
import {LineChart} from "react-native-chart-kit";
import {RefreshControl, SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import ListItem  from "../components/ListItem";
import {calForecastData, calcosts, calmonthDays, calcostDict} from "../database/ForecastData";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

// total cost of each category input data
var costDict = calcostDict();
var total_forecast_cost = calForecastData()                              // total forecast cost of all input data
var costs = calcosts()                                                   // predicted cost for each period
var monthDays = calmonthDays()

//console.log('total_forecast_cost: '+total_forecast_cost);

monthDays = monthDays.filter(function(value, index, Arr) {
  return index % 3 == 0;
});
costs = costs.filter(function(value, index, Arr) {
  return index % 3 == 0;
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
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
                                              setRefreshing(true);
                                              wait(2000).then(() => setRefreshing(false));
                                            }, []);
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
        <ScrollView style={styles.container} refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>

            <LineChart
              data={data}
              width={Dimensions.get("window").width-20}
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