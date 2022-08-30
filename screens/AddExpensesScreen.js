import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, 
         Button, TextInput, SafeAreaView,
         Alert, ScrollView, TouchableWithoutFeedback,
         TouchableOpacity,
         Keyboard, Image } from 'react-native';

export default function AddExpenseScreen({ navigation }) {
  
  return (
 
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style = {styles.container}>

        <Text style = {styles.title}>Select Item Category</Text>
        <Text></Text>

        <TouchableOpacity style={styles.optionBox} onPress = {() => navigation.navigate("Rent Expense")}>
          <View style = {styles.subObtionBox}>
            <Text style = {styles.arrowText}>🏠</Text>
            <Text style = {styles.optionText}>Rent</Text>
          </View> 
          <Text style = {styles.arrowText}>❯</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBox} onPress = {() => navigation.navigate("Food Expense")}>
          <View style = {styles.subObtionBox}>
            <Text style = {styles.arrowText}>🍴</Text>
            <Text style = {styles.optionText}>Food</Text>
          </View>
          <Text style = {styles.arrowText}>❯</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBox} onPress = {() => navigation.navigate("Power Expense")}>
          <View style = {styles.subObtionBox}>
            <Text style = {styles.arrowText}>💡</Text>
            <Text style = {styles.optionText}>Power </Text>
          </View>
          <Text style = {styles.arrowText}>❯</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBox} onPress = {() => navigation.navigate("Transport Expense")}>
          <View style = {styles.subObtionBox}>
            <Text style = {styles.arrowText}>🚌</Text>
            <Text style = {styles.optionText}>Transport </Text>
          </View>
          <Text style = {styles.arrowText}>❯</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBox} onPress = {() => navigation.navigate("Other Expense")}>
          <View style = {styles.subObtionBox}>
            <Text style = {styles.arrowText}>🔧</Text>
            <Text style = {styles.optionText}>Other </Text>
          </View>
          <Text style = {styles.arrowText}>❯</Text>
        </TouchableOpacity>
        
        <StatusBar style="auto" />

      </SafeAreaView>

    </TouchableWithoutFeedback>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 25, 
    fontWeight: 'bold'
  },

  optionBox: {
    height: '10%',
    width: '80%',
    justifyContent: 'space-between',
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: '#EBF6EF',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
  },

  subObtionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },

  optionText: {
    tintColor: '#fff',
    left: 20,
    fontSize: 20,
  },

  arrowText: {
    fontSize: 30, 
    right: 10,
    color: '#4BB377'
  },

});


