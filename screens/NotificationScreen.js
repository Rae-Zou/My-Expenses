import * as React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
// import { useDispatch, useSelector } from "react-redux";

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
    // const dispatch = useDispatch();
    // const notificationEnabled = useSelector(state => state.notification.enabled);
    // const notification = useSelector(state => state.notification.notification);
    const [isEnabled, setEnabled] = React.useState(true);
    // const [notificationState, setNotificationState] = React.useState(notification);
    return (
        <View style={styles.container}>
            <Text style={styles.intro}>
                  Receive a notification every night at 9 p.m to remind you to add your daily expenses.
                </Text>
            <View style={styles.rowContainer}>
              <Text style={styles.text}> Activated </Text>
              <Switch value={isEnabled} onValueChange={(value) => setEnabled(value)}  />
            </View>
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
        paddingTop: 10,
        fontSize: 16,
    },
    rowContainer: {
        flexDirection: "row",
        marginTop: 22,
        justifyContent: "space-between",
        alignItems: "center",
    },
    text:{
      fontWeight: "bold",
    }
  });