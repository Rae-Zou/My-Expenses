import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, 
         Button, TextInput,
         Alert, ScrollView, TouchableWithoutFeedback,
         TouchableOpacity,Keyboard, Image} from 'react-native';

import SelectList from 'react-native-dropdown-select-list'
import {getAllData, addNewData} from "../database/Database"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default function AddFoodExpense({ navigation }) {

  var  months = ["January", "February", "March", "April", "May",
                 "June", "July", "August", "September", "October",
                 "November", "December"];

  const current_date = new Date();
  const[date, setDate] = useState((current_date.getDate()) +
                                   " " + months[(current_date.getMonth())] + 
                                   " " + (current_date.getFullYear()
                                   )
                                 );
  const[itemName, setItemName] = useState(null);
  const[itemPrice, setItemPrice] = useState(null);
  const[recurrancy, setRecurrancy] = useState(null);                         

  var radio_props = [
    {label: 'None   ', value: 0},
    {label: 'Weekly   ', value: 1},
    {label: 'Monthly   ', value: 2}
    ];


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate((date.getDate()) + " " + months[(date.getMonth())] + " " + (date.getFullYear()));
    hideDatePicker();
  };

  const checkAdd = (itemName, itemPrice, date, recurrancy) => {
    if(itemName == null){
      alert("name is null");
    }
    else if(itemPrice == null){
      alert("Price is null");
    }
    else if(recurrancy == null){
      alert("recurrancy is null");
    }
    else{
      addNewData(itemName,"Food", itemPrice, date, recurrancy)
    }
  };

  return (
    
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View>
        
        <View style = {styles.container}>
          <Text style = {styles.title}>Name the expense:</Text>
          
          <TextInput 
            style = {styles.inputText}
            placeholder = "Enter item's name: "
            placeholderTextColor= "gray"
            onChangeText={(text) => setItemName(text)}
        
          />
        </View>
        
        <View style = {styles.container}>
          <Text style = {styles.title}>Amount:</Text>
          
          <TextInput 
            style = {styles.inputText}
            placeholder = "Enter item's price: "
            placeholderTextColor= "gray"
            keyboardType='numeric'
            onChangeText={(text) => setItemPrice(text)}
          />
        </View>

        <View style = {styles.container}>

          <Text style = {styles.title}>Periodicity</Text>

          <RadioForm
            radio_props={radio_props}
            formHorizontal={true}
            initial={-1}
            buttonColor={'#4BB377'}
            selectedButtonColor = {'#4BB377'}
            onPress={(value) => {setRecurrancy(value)}}
          />

        </View>
        
        <View style = {styles.container2}>
        
          <Text style = {styles.title}>Date of purchased</Text>

          <View style = {styles.viewstyle}>

            <Text style = {styles.comptext}>🗓 {date}</Text>

            <TouchableOpacity onPress={showDatePicker}>
              <Image
                source={require("../assets/edit.png")}
                style = {styles.image1Style}
              />
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            
          </View>

          <TouchableOpacity
            onPress={() => checkAdd(itemName, itemPrice, date, recurrancy)}
            style = {styles.button}
          >
            <Text style = {styles.buttonText}>Add expense</Text>
          </TouchableOpacity>

        </View>

        <StatusBar style="auto" />

      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    //justifyContent: 'center',
    margin: 6,
  },

  container2: {
    alignItems: 'flex-start',
    //justifyContent: 'center',
    margin: 6,
    top: 10,
  },

  title: {
    fontSize: 20, 
    fontWeight: 'bold',   
    margin: 10,
    left: -10,
    top: -10,
  },

  inputText: {
    height: '10%',
    width: '100%',
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'green',
    left: -10,
    padding: 13,
    top: -15,
    bottom: 10,
    
  },

  viewstyle: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  comptext: {
    fontSize: 17,
    margin: 5,
    bottom: 5,
  },

  image1Style: {
    height: 25,
    width:  25,
  },

  dropdownbox: {
    borderColor: 'green',
    top: -5,
    width: 400,
  },

  button: {
    top: 50,
    backgroundColor: '#4BB377',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

});
