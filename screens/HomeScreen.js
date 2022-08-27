import * as React from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, Image, Button } from 'react-native';
import AppButton  from "../components/AppButton";


export default function HomeScreen({ navigation }) {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.icontainer}>
                <Image style={styles.image} resizeMode="contain" source={require("../assets/expense.png")} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.header}>{("Hi there 👋")}</Text>
                <Text style={styles.paragraph}>{("Thanks for joining us!")}</Text>
                <Text style={styles.paragraph}>{("To start tracking your expenses, tap the button below" )}</Text>
            </View>
            <AppButton 
                title="Add my first expense" 
                size="sm" 
                backgroundColor="#007bff" 
                onPress={() =>navigation.navigate('AddExpenseScreen')}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: "white",
    },
    icontainer: {
        flex: 1,
    },
    image: {
        marginVertical: 8,
        alignSelf: "center",
        maxWidth: 320,
        width: "100%",
        height: Dimensions.get("window").width - 100,
    },
    textView: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#595D58",
        paddingVertical: 1,
    },
    paragraph: {
        flex: 1,
        textAlign: "center",
        paddingVertical: 4,
        fontSize: 15,
        color: "#595D58",
        marginTop: 5,
    },
    button: {
        marginVertical: 20,
    },

});