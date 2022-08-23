import * as React from 'react';
import { View, Text, StyleSheet, Layout } from 'react-native';

export default function DataStoragePrivacyScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text
                onPress={() => navigation.navigate('Home')}
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
      marginTop: 12,
      paddingVertical: 10,
      fontSize: 15,
      fontWeight: 'bold',
      color: "#595D58",
    },
    button: {
      marginTop: 20,
    },
  });