import * as React from 'react';
import { View, Text, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import {BarChart} from "react-native-chart-kit";
import {getTotal, getDataOnDate} from "../database/Database";
import SelectList from 'react-native-dropdown-select-list'
import { FlatList } from 'react-native-gesture-handler';

export default function ExpensesScreen({ navigation }) {

  var rent_total= getTotal("Rent");
  var food_total = getTotal("Food");
  var pow_total =  getTotal("Power");
  var trans_total = getTotal("Transport");
  var other_total = getTotal("Other");

  const data = {
    labels: ["Rent", "Food", "Power", "Transport", "Other"],
    datasets: [
      {
        data: [rent_total, food_total, pow_total, trans_total, other_total]
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

  const [selected, setSelected] = React.useState("1 August 2022");

  //let expenses = getDataOnDate('2 August 2022');
  const [expenses, setExpenses] = React.useState([])
  
  const select_list_data = [
    {key:'1 August 2022',value:'1 August 2022 - Monday'},
    {key:'2 August 2022',value:'2 August 2022 - Tuesday'},
    {key:'3 August 2022',value:'3 August 2022 - Wednesday'},
    {key:'4 August 2022',value:'4 August 2022 - Thursday'},
    {key:'5 August 2022',value:'5 August 2022 - Friday'},
    {key:'6 August 2022',value:'6 August 2022 - Saturday'},
    {key:'7 August 2022',value:'7 August 2022 - Sunday'},
  ];

  const getDataOnDay = (date) =>{
    let expense_holder = getDataOnDate(date)
    expense_holder.map((expense) => updateCategory(expense));
    setExpenses(expense_holder);
  }

  const updateCategory = (object) => {
    if(object['categroy'] == 'Rent'){
      object['categroy'] = '🏠';
    }

    if(object['categroy'] == 'Food'){
      object['categroy'] = '🍴';
    }

    if(object['categroy'] == 'Power'){
      object['categroy'] = '💡';
    }

    if(object['categroy'] == 'Transport'){
      object['categroy'] = '🚌';
    }

    if(object['categroy'] == 'Other'){
      object['categroy'] = '🔧';
    }
  }
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

    return (
      <View>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          >
            <BarChart
              data={data}
              width={Dimensions.get("window").width}
              height={Dimensions.get("window").height/3}
              yAxisLabel="$"
              chartConfig={chartConfig}
            />
            </ScrollView>
         

            <Text></Text>

            <View style = {styles.container}>
              <View style = {styles.header}>
                <Text style = {styles.title}>Spending on this week:</Text>
                <Text 
                  style = {styles.underlineText}
                  onPress = {() => navigation.navigate("Expense Record")}
                >
                  More details
                </Text>
              </View>

              <SelectList 
                placeholder = "Select a date"
                boxStyles = {{marginHorizontal: 10,
                              borderColor: 'green',
                              borderWidth: 2,}}
                dropdownStyles = {{marginHorizontal: 10}}
                dropdownTextStyles = {{fontSize: 15}}
                inputStyles = {{fontSize: 15}}
                setSelected={setSelected} 
                data={select_list_data} 
                search = {false}
                onSelect={() => getDataOnDay(selected)}> 
              </SelectList>

              <View style = {styles.container2}>
                <View style = {styles.header}>
                  <Text style = {styles.title}>Item details: </Text>
                  <Text style = {styles.title}>Price: </Text>
                </View>

                <FlatList
                  data = {expenses}
                  renderItem = {({item}) => (
                    <View style = {styles.itemList}>
                      <Text style = {styles.itemListText}>
                        {item['categroy']}: {item['name']}
                      </Text>  

                      <Text style = {styles.itemListText}>
                        $ {item['price']}
                      </Text>  
                    </View>               
                  )}
                />

              </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: 'green',
    borderRadius: 10,
    height: '60%',
    width: '95%',
    
  },

  container2: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 15,
    margin: 15,
    height: '70%',
    width: '95%',
    padding: 10,
  },

  header: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
    
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#595D58',
  },

  underlineText: {
    textDecorationLine: 'underline',
    color: 'blue',
  }, 

  itemList: {
    margin: 7,
    fontSize: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'green',
  },

  itemListText: {
    margin: 7,
    fontSize: 17,
  },


});