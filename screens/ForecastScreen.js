import * as React from 'react';
import {LineChart} from "react-native-chart-kit";
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import ListItem  from "../components/ListItem";
import {getAllData} from "../database/Database";

export default function ForecastScreen({ navigation }) {
    const userdata = [];
    getAllData(userdata);
    console.log(userdata);
    var costDict = {"Other" : 0, "Transport" : 0, "Food" : 0, "Rent" : 0, "Power" : 0};
    var total_cost = 0;
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

    const data = {
      labels: ["Rent", "Food", "Power", "Transport", "Other"],
      datasets: [
        {
          data: [10,20,30,40],
          color: (opacity = 1) => `rgba(119, 180, 199, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      //legend: ["Peak Expenses"] // optional
    };
      
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
            <Text style={styles.forecastCost}>{("Total: 💲" + total_cost.toFixed(2))}</Text>

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