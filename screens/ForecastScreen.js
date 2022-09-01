import * as React from 'react';
import {LineChart} from "react-native-chart-kit";
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import ListItem  from "../components/ListItem";
import {getAllData, getData, getTotal} from "../database/Database";

export default function ForecastScreen({ navigation }) {
    var rent_total= getTotal("Rent");
    var food_total = getTotal("Food");
    var pow_total =  getTotal("Power");
    var trans_total = getTotal("Transport");
    var other_total = getTotal("Other");

    var costDict = {"Rent" : rent_total, 
                    "Food" : food_total,
                    "Power" : pow_total,
                    "Transport" : trans_total,
                    "Other" : other_total};
    var total_cost = rent_total+pow_total+trans_total+other_total;

    const now = new Date();
    const totalDays = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    var monthlyOccurances = {
      1: [15],
      2: [10, 20],
      3: [7, 14, 21]
    };

    var monthDays = [...Array(totalDays).keys()].map(i => i + 1);
    var total_cost = 0;
    var costs = []

    const recurringExpense = []
    var alldata = getAllData();

    for (const udata of alldata) {
      if (udata['recurring'] !=0){
        recurringExpense.push(udata);
      }
    }

    console.log(alldata);


    for( const day of monthDays ){
      // console.log(day); // 0,1,2...
      for (const udata of alldata) {
        var date = udata['date'].substring(0, udata['date'].indexOf(' '));
        //console.log(date);
        if (udata['recurring'] == 0){
          if (monthlyOccurances[date] == day) {
            const c = Math.round(udata['price'])
            total_cost += Math.round(c);
            //costDict[udata['title']] += c;
          }
        }
        if (udata['recurring'] == 1){
          const c = Math.round(udata['price'])
          total_cost += Math.round(c);
          //costDict[udata['title']] += c;
        }
        if (udata['recurring'] == 2){
          const c = Math.round(udata['price'])
          total_cost += Math.round(c);
          //costDict[udata['title']] += c;
        }
      }
      costs.push(total_cost);
    }
    console.log('total_cost: '+total_cost);

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

    monthDays = monthDays.filter(function(value, index, Arr) {
      return index % 6 == 0;
    });
    costs = costs.filter(function(value, index, Arr) {
      return index % 6 == 0;
    });
    const monthDaysStr = monthDays.map(String)

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
      labels: monthDaysStr,
      datasets: [
        {
          data: [rent_total,pow_total,pow_total,trans_total,other_total],
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