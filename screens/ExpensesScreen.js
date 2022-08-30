import * as React from 'react';
import { View, Text } from 'react-native';import { Dimensions } from "react-native";
import {BarChart} from "react-native-chart-kit";
import {getData} from "../database/Database";

export default function ExpensesScreen({ navigation }) {

  const RentData = [];
  getData("Rent", RentData);

  const FoodData = [];
  getData("Food", FoodData);

  const PowerData = [];
  getData("Power", PowerData);

  const TransportData = [];
  getData("Transport", TransportData);

  const OtherData = [];
  getData("Other", OtherData);

  function getTotal(data){
    
  }

  const data = {
    labels: ["Rent", "Food", "Power", "Transport", "Other"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99]
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "green",
    backgroundGradientToOpacity: 0.3,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const screenWidth = Dimensions.get("window").width;

    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <BarChart
              data={data}
              width={Dimensions.get("window").width}
              height={250}
              yAxisLabel="$"
              chartConfig={chartConfig}
            />
        </View>
    );
}