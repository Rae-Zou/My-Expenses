import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, 
         Button, TextInput, SafeAreaView,
         Alert, ScrollView, TouchableWithoutFeedback,
         Keyboard, Image } from 'react-native';

import {db} from '../firebase'

export default function AddFoodExpense({ navigation }) {

  const[data, setData] = useState([]);
  const[itemName, setItemName] = useState("");
  const[itemPrice, setItemPrice] = useState(null);

  function addNewData(name, price) {
    db.ref('users/').push().set({
      Name: name,
      price: price
    }, function (error) {
      if (error) {
        // The write failed...
        alert('Lỗi')
      } else {
        // Data saved successfully!
        alert('Thành Công !!!')
      }
    });

  }

  function getAllData(){
    db.ref('users/').on('value', function (snapshot) {

      let array = [];
      snapshot.forEach(function (childSnapshot) {
        let children = childSnapshot.val();
        array.push({
          id: children.key,
          name: children.Name,
          price: children.price,
        });
      });
      console.log(array)
      setData(array)

    });
  }

  const [isSelected, setSelection] = useState(false);

  return (
    
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style = {styles.container}>
        <View>
          <Button 
            //style = {[justifyContent = 'flex-start']}
            title = "Back" 
            onPress={() => navigation.goBack()}/>
        </View>

        <Text style = {styles.title}>Category: Food</Text>
        
        <TextInput 
          style = {styles.inputText}
          placeholder = "Enter item's name: "
          placeholderTextColor= "gray"
          onChangeText={(text) => setItemName(text)}
      
        />
        
        
        <Text style = {styles.title}>Price of expense:</Text>
        
        <TextInput 
          style = {styles.inputText}
          placeholder = "Enter item's price: "
          placeholderTextColor= "gray"
          keyboardType='numeric'
          onChangeText={(text) => setItemPrice(text)}
        />

        <Text style = {styles.title}>Date of purchased</Text>

        <Text style = {styles.title}>Periodicity</Text>
        <View>

          {/* <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          /> */}

          <Button
            title='Add'
            onPress={() => addNewData(itemName, itemPrice)}></Button>

          <Button
            title='View Data'
            onPress={() => getAllData()}></Button>

        </View>



        <StatusBar style="auto" />

      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    //justifyContent: 'center',
    margin: 10,
  },

  title: {
    fontSize: 18, 
    fontWeight: 'bold'
  },

  inputText: {
    height: '5%',
    width: '70%',
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'green',
    left: -10,
    padding: 10,
  },
});