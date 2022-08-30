import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, 
         Button, TextInput,
         Alert, ScrollView, TouchableWithoutFeedback,
         TouchableOpacity,Keyboard, Image} from 'react-native';

import SelectList from 'react-native-dropdown-select-list'
import {getAllData, addNewData} from "../database/Database"
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function AddFoodExpense({ navigation }) {

  var  months = ["January", "February", "March", "April", "May",
                 "June", "July", "August", "September", "October",
                 "November", "December"];

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const current_date = new Date();
  const[date, setDate] = useState((current_date.getDate()) +
                                   " " + months[(current_date.getMonth())] + 
                                   " " + (current_date.getFullYear()
                                   )
                                 );

  const[category, setCategory] = useState([
                {key:'None',value:'None'},
                {key:'Weekly',value:'Weekly'},
                {key:'Monthly',value:'Monthly'}]);

  const[selected, setSelected] = useState(null);

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

  const[itemName, setItemName] = useState(null);
  const[itemPrice, setItemPrice] = useState(null);

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

          <SelectList 
            boxStyles = {styles.inputText}
            data = {category} 
            setSelected={setSelected}
            placeholder = "Select type of recurrancy:"
            dropdownStyles = {styles.dropdownbox}
            maxHeight={130}
            onSelect = {() => console.log(selected)}
          >
          </SelectList>

        </View>
        
        <View style = {styles.container}>
        
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

          <View>
            <TouchableOpacity 
              onPress={() => addNewData(itemName, itemPrice)}
              stype = {styles.button}>



            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => addNewData(itemName,"Food", itemPrice, date, selected)}
            style = {styles.button}
          >
          <Text style = {styles.buttonText}> Add expense</Text>
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

  title: {
    fontSize: 20, 
    fontWeight: 'bold',   
    margin: 10,
    left: -10,
    top: -10,
  },

  inputText: {
    height: 45,
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
