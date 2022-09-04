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
        console.log(total);
        return total;
    };

    for(let i = 1; i < 31; i++){
		const day = i + " " + month + " " + 2022;
        days.push(day);
	}

    for(let i = 0; i < 30; i++){
		const expense_on_date = getDataOnDate(days[i]);
        var total = 0;
        for(const r of expense_on_date) {
            total += parseInt(r['price']);
        }
        console.log(total);
        totals.push(total);
	}

    return(
        <View>
            <View style = {styles.container}>
                <Text style = {styles.monthText} onPress = {() => PrevMonth()}>
                ❮
                </Text>

                <Text style = {styles.monthText}>{month}</Text>

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

                            <Text 
                                style = {styles.dateBoxText}
                                onPress = {() => navigation.navigate("More Detail", {date: item})}
                                >
                                ❯
                            </Text>  
                        </View>               
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {      
        alignItems: 'center',
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
        height: '92%',
        
    },

    monthText: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    dateBoxText: {
        fontSize: 18,
        margin: 10,
    },

    dateBox: {
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