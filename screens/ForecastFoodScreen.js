import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ForecastFoodScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text
                style={styles.paragraph}>
                    Based on Mobile AppSec Verification Standard: 
                    Data Storage and Privacy Requirements, 
                    we will not save your data on any server and therefore that no one but you can access it. 
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
      marginTop: 5,
      paddingVertical: 10,
      fontSize: 15,
      color: "#595D58",
      justifyContent: "space-between",
    },
  });