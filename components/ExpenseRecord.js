import * as React from 'react';
import { View, Text, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import {getTotal, getDataOnDate} from "../database/Database";
import { FlatList } from 'react-native-gesture-handler';


export default function ExpenseRecord({ navigation }) {

    var  months = ["January", "February", "March", "April", "May",
                 "June", "July", "August", "September", "October",
                 "November", "December"];

    const [monthIndex, setMonthIndex] = React.useState(0);
    const [month, setMonth] = React.useState(months[monthIndex]);

    const NextMonth = () => {
        setMonthIndex(monthIndex+1);
        setMonth(months[monthIndex]);
    };

    const PrevMonth = () => {
        setMonthIndex(monthIndex-1);
        setMonth(months[monthIndex]);
    };

    let days = [];
    let totals = [];

    const calculateTotal = (date) => {
        const expense_on_date = getDataOnDate(date);
        var total = 0;
        for(const r of expense_on_date) {
            total += parseInt(r['price']);
        }
        
        return total;
    };

    for(let i = 1; i < 31; i++){
		const day = i + " " + month + " " + 2022;
        days.push(day);
	}

    return(
        <View style = {{backgroundColor: 'white'}}>
            <View style = {styles.container}>
                <Text style = {styles.monthText} onPress = {() => PrevMonth()}>
                ❮
                </Text>

                <Text style = {{fontSize: 23, fontWeight: 'bold',}}>{month}</Text>

                <Text style = {styles.monthText} onPress = {() => NextMonth()}>
                ❯
                </Text>

            </View>

            <View style = {styles.scrollView}>
                <FlatList
                    data = {days}
                    
                    renderItem = {({item}) => (
                        
                        <View style = {styles.dateBox}>
                            
                            <Text style = {styles.dateBoxText}>
                                🗓 {item}
                            </Text> 

                            {}
                            <View style = {{flexDirection:'row', alignItems: 'center'}}>
                                <View style = {{alignItems: 'center'}}>
                                    <Text style={{fontSize: 16}}>Total</Text>
                                    <Text style={{fontSize: 16}}>{calculateTotal(item)}</Text>
                                </View>
                                <Text 
                                    style = {styles.dateBoxText}
                                    onPress = {() => navigation.navigate("More Detail", {date: item})}
                                    >
                                    ❯
                                </Text>  
                            </View>
                        </View>               
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        top: 15,     
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around', 
    },

    scrollView: {
        top: 20,
        flexDirection: 'row',
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 15,
        width: '100%',
        height: '92%',
        
    },

    monthText: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    dateBoxText: {
        fontSize: 18,
        margin: 10,
        //marginHorizontal: 20,
    },

    dateBox: {
        marginHorizontal: 30,
        margin: 10,
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between' 
        
    },
  
  });