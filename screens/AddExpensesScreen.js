import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, 
         Button, TextInput, SafeAreaView,
         Alert, ScrollView, TouchableWithoutFeedback,
         Keyboard, Image } from 'react-native';
import SelectList from 'react-native-dropdown-select-list'

let ind = 6;

const Inputbox = () => {

  const[category, setCategory] = useState([
    {key:'1',value:'Add new category'},
    {key:'2',value:'food'},
    {key:'3',value:'drinks'},
    {key:'4',value:'rent'},
    {key:'5',value:'house'},
    {key:'6',value:'bus'}]
    );

  const[selected, setSelected] = useState("Select a category");

  const dosome = (index) => {
    if(index == 1){
      ind = ind + 1;
      Alert.prompt("Add a new category","Enter category",
      (text) => setCategory([...category, {key:ind,value:text}]))  
      console.log(category);  
    }
  }

  return (
    <View>
      <Text style = {styles.inputHeader}>Item number 1:</Text>

      <Text>Item's category</Text>
      <SelectList 
        boxStyles = {styles.input}
        data = {category} 
        setSelected={setSelected}
        placeholder = "Select a category"
        onSelect = {() => dosome(selected)}
      >
      </SelectList>

      <Text>Item's name:</Text>
      <TextInput 
        style = {styles.input} 
        placeholder = "   E.g: chicken thigh"
      /> 

      <Text>Item's price:</Text>
      <TextInput
        keyboardAppearance= 'dark'
        keyboardType='numeric'
        style = {styles.input} 
        placeholder = "   E.g: $10"
        
      />

      <Text></Text>

    </View>
  );
}



export default function AddExpenseScreen() {
  
  const[inputBox, setInputBox] = useState(['item 1']);

  const[texts, setTexts] = useState(['chicken', 'chips', 'chorizo']);

  return (
    
    
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style = {styles.container}>

        <View style = {styles.iconArea}>
          <Image
           source={require("../assets/camera.png")}
           style = {styles.image1Style}
           />

          <Image
           source={require("../assets/book.png")}
           style = {styles.image2Style}
           />

          <Image
           source={require("../assets/pen.png")}
           style = {styles.image1Style}
           />
        </View>

        <ScrollView style = {styles.scrollview}>
          <Text></Text>
          {inputBox.map((inputBox, i) => (<Inputbox key ={i}/>))} 
        </ScrollView>

        <View style = {styles.buttonArea}>

        <Button style = {styles.button} title = 'Save Items'/>
  
        <Button title = 'Add another item' onPress={() => setInputBox([...inputBox, "new Item"])}/>

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
    justifyContent: 'center',
  },

  iconArea: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0.2,
  },

  scrollview: {
    flex: 0.5, 
    backgroundColor: 'orange',
    borderRadius: 10,
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
    top: 30,
  },

  image2Style: {
    top: 3,
    height: 70,
    width: 70,
  },

  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 0.2,
    alignItems: 'center'
  },

});


