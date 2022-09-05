import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {calcostDict, calForecastData} from '../database/ForecastData';

export default function ForecastFoodScreen({ navigation }) {
var costDict = calcostDict();
var total = calForecastData();
var prob = ((costDict["Food"]/(total))*100).toFixed(2);
    return (
        
        <View style={styles.container}>
            <Text
                style={styles.paragraph}>
                    Based on your spending habit: 🤗{'\n'}
       
                </Text>
            <Text
                style={styles.paragraph2}>
                    📊  {prob}% of your total spending will be on Food next month.
                </Text>
        </View>
    );
};

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white',

    },
    paragraph: {
      marginTop: 8,
      fontSize: 18,
      color: "#595D58",
      justifyContent: "space-between",
    },
    paragraph2: {
        marginTop: 2,
        fontSize: 17,
        color: "#595D58",
        justifyContent: "space-between",
      },
  });