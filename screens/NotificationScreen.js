import * as React from 'react';
import { View, Text, StyleSheet, Layout } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

const notification = {
    content: {
      title: ("Daliy Expenses"),
      body: ("Here is a kindly reminder to add your expense for this week."),
    },
    trigger: {
      weekday: 1,
      hour: 21,
      minute: 0,
      repeats: true,
    },
  };

export default function NotificationScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Notification Screen</Text>
        </View>
    );
};

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white',

    },
    intro: {
        paddingTop: 30,
    },
    rowContainer: {
        flexDirection: "row",
        marginTop: 22,
        justifyContent: "space-between",
        alignItems: "center",
    },
  });