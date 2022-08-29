import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, 
         Button, TextInput, SafeAreaView,
         Alert, ScrollView, TouchableWithoutFeedback,
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

        <View style={styles.optionBox}>
          <Text 
            style = {styles.optionText}
            >Rent</Text>
        </View>

        <Button
          title = "Click me"
          onPress = {() => navigation.navigate("AddFoodExpense")}></Button>

        <View style={styles.optionBox}>
          <Text 
            style = {styles.optionText}
            onPress={() => console.log("hahaha")}>Food</Text>
        </View>

        <View style={styles.optionBox}>
          <Image
            source={require("../assets/camera.png")}
            style = {styles.image1Style}/>
          <Text 
            style = {styles.optionText}
            onPress={() => console.log("hahaha")}>Power</Text>
        </View>

        <View style={styles.optionBox}>
          <Text 
            style = {styles.optionText}
            onPress={() => console.log("hahaha")}>Transport</Text>
        </View>

        <View style={styles.optionBox}>
          <Text 
            style = {styles.optionText}
            onPress={() => console.log("hahaha")}>Other</Text>
    
        </View>

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
    justifyContent: 'flex-start',
    borderColor: 'green',
    borderRadius: 15,
    borderWidth: 3,
    backgroundColor: '#4BB377',
    textAlign: 'center',
    margin: 10,
    flexDirection: 'row',
  },

  optionText: {
    tintColor: '#fff',
    left: 10,
    fontSize: 18, 
  },

  inputHeader: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 8,
    margin: 5,
    width: 300,
    height: 45,  
    backgroundColor: 'white', 
  },

  image1Style: {
    height: 40,
    width: 40,
  },

});


