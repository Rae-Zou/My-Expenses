import * as React from 'react';
import {LineChart} from "react-native-chart-kit";
import {RefreshControl, SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import ListItem  from "../components/ListItem";
import {getAllData} from "../database/Database";

export default function ForecastScreen({ navigation }) {
  // total cost of each category input data
  var total_cost = 0;
  var costs = [];
  const now = new Date();
  const totalDays = new Date(now.getFullYear(), Number(now.getMonth())+1, 0).getDate();
  const current_day = new Date(now.getFullYear(), Number(now.getMonth())+1, 0);
  const recurringExpense = []
  var monthDays = [...Array(totalDays).keys()].map(i => i + 1);
  var alldata = getAllData();
  var costDict = {"Rent" : 0, "Food" : 0,"Power" : 0,"Transport" : 0,"Other" : 0};
  
  for (const udata of alldata) {
      if (udata['recurring'] !=0){
          recurringExpense.push(udata);
      }
  }
  
  for( const day of monthDays ){
      const plot_Date = new Date(current_day.getFullYear(), current_day.getMonth(), day)
      for (const udata of alldata) {
          const t_date = new Date(udata['date']);
          if (udata['recurring'] == 0){
              if ( t_date == plot_Date) {
                  const c = Math.round(udata['price'])
                  total_cost += Math.round(c);
                  costDict[udata['category']] += c;
              }
          } else{
              var t_recurring = 7;
              if (udata['recurring'] == 2){
                  t_recurring = 14;
              }
              const diffTime = Math.abs(plot_Date - t_date);
              const day_diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
              if (day_diff >= 0 && (day_diff)%t_recurring == 0){
                  const c = Math.round(udata['price'])
                  total_cost += Math.round(c);
                  costDict[udata['category']] += c;
              }
          }
      }
      costs.push(total_cost);
  }

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
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }  
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
                                              setRefreshing(true);
                                              wait(100).then(() => setRefreshing(false));
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