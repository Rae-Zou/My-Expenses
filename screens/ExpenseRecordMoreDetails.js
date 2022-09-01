import * as React from 'react';
import { View, Text, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import {getTotal, getDataOnDate} from "../database/Database";
import { FlatList } from 'react-native-gesture-handler';


export default function ExpenseRecordMoreDetails({ navigation }) {
    return(
        <View style = {styles.container}>
            <Text>Record more details</Text>
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
        height: '90%',
        
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