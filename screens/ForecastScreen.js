import * as React from 'react';
import {LineChart} from "react-native-chart-kit";
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import ListItem  from "./ListItem";

export default function ForecastScreen({ navigation }) {
    var costDict = {"Other" : 0, "Transport" : 0, "Food" : 0, "Rent" : 0, "Power" : 0};
    
    const rowItems = [
        {
          title: ("🏠 Rent  $" + costDict["Rent"] ),
          onPress: navigator.openRentData,
        },
        {
          title: ("🍴 Food  $" + costDict["Food"]),
          onPress: navigator.openFoodData,
        },
        {
          title: ("💡 Power  $" + costDict["Power"]),
          onPress: navigator.openPowerData,
        },
        {
          title: ("🚌 Transport  $" + costDict["Transport"]),
          onPress: navigator.openTransData,
        },
        {
          title: ("Other  $" + costDict["Other"]),
          onPress: navigator.openOtherData,
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
              width={Dimensions.get("window").width < 400 ? Dimensions.get("window").width  - 10 : 200}
              height={256}
              verticalLabelRotation={0}
              chartConfig={chartConfig}
              bezier
              fromZero ={ true}
              style={{
                marginVertical: 18,
                borderRadius: 16
              }}
            />
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
    backgroundColor: "white",},
});