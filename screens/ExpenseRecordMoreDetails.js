import * as React from 'react';
import { View, Text, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import {getTotal, getDataOnDate} from "../database/Database";
import { FlatList } from 'react-native-gesture-handler';

export default function ExpenseRecordMoreDetails({route, navigation }) {

    const { date } = route.params;   
    var expenses = getDataOnDate(date);

    var rent_expense = [];
    var food_expense = [];
    var power_expense = [];
    var transport_expense = [];
    var other_expense = [];

    const updateCategory = (object) => {
        if(object['categroy'] == 'Rent'){
          object['categroy'] = '🏠';
          rent_expense.push(object);
        }
    
        if(object['categroy'] == 'Food'){
          object['categroy'] = '🍴';
          food_expense.push(object);
        }
    
        if(object['categroy'] == 'Power'){
          object['categroy'] = '💡';
          power_expense.push(object);
        }
    
        if(object['categroy'] == 'Transport'){
          object['categroy'] = '🚌';
          transport_expense.push(object);
        }
    
        if(object['categroy'] == 'Other'){
          object['categroy'] = '🔧';
          other_expense.push(object);
        }
    }

    const getTotal = (list_data) =>{
        var total = 0;
        for(const r of list_data) {
            total += parseInt(r['price']);
            //console.log(total);
        }
        return total;
    }

    const getFlatList = (category, list_data, total_value) =>{
        return (
            <View style = {styles.HeaderItemText}>
                <Text style = {styles.HeaderText2}>Expenses on {category} category:</Text>

                <FlatList
                  data = {list_data}
                  renderItem = {({item}) => (
                    <View style = {styles.ItemArea}>
                      <Text style = {styles.Text}>{item['categroy']}: {item['name']}</Text>  
                      <Text style = {styles.Text}>$ {item['price']}</Text>  
                    </View>               
                  )}
                />
                
                <View style = {styles.ItemArea}>
                    <Text style = {styles.Text}> Total spent on rent expenses:</Text>
                    <Text style = {styles.Text}> $ {total_value}</Text>
                </View>

            </View>
        )
    }

    expenses.map((expense) => updateCategory(expense));

    var rent_total = getTotal(rent_expense);
    var food_total = getTotal(food_expense);
    var power_total = getTotal(power_expense);
    var transport_total = getTotal(transport_expense);
    var other_total = getTotal(other_expense);



    return(
        <View>
            <Text style = {styles.HeaderText}>Spending on {date}:</Text>

            {getFlatList('rent' , rent_expense, rent_total)}

            {getFlatList('food', food_expense, food_total)}

            {getFlatList('power', power_expense, power_total)}

            {getFlatList('transport', transport_expense, transport_total)}

            {getFlatList('other', other_expense, other_total)}

            <View>
                
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {      
        borderWidth: 3,
        borderColor: 'green',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around', 
    },

    scrollView: {
        top: 20,
        flexDirection: 'row',
        borderColor: 'green',
        borderWidth: 3,
        borderRadius: 15,
        width: '100%',
        height: '90%',
        
    },

    HeaderText: {
        margin: 10,
        top: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
    },

    HeaderText2: {
        fontSize: 17,
        fontWeight: 'bold',
    },

    Text: {
        fontSize: 15,
        margin: 10,
    },

    HeaderItemText: {
        margin: 10,
        top: 15,
        borderBottomColor: 'green',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    ItemArea: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


  
  });