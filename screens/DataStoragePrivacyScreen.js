import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DataStoragePrivacyScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text
                style={styles.paragraph}>
                    Based on Mobile AppSec Verification Standard: 
                    Data Storage and Privacy Requirements, 
                    we will not save your sensitive data on any server. 
                </Text>
            <Text
                style={styles.paragraph}>
                    No sensitive data is written to application logs. 
                    No sensitive data is shared with third parties unless it is a necessary part of the architecture.
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
      lineHeight: 25,
      color: "#595D58",
      justifyContent: "space-between",
    },
  });