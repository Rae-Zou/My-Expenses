import React, { Component } from 'react';
import * as WebBrowser from "expo-web-browser";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { ListItem, } from 'react-native-elements';

export default function SettingsScreen({ navigation }) {
    const rowItems = [
        {
          name: ("Data Storage and Privacy"),   //security controls - V2: Data Storage and Privacy Requirements
          onPress: () =>navigation.navigate('Expenses'),   //TODO: update the navigator                 
        },

        {
          name: ("Notifications"),
          onPress: () =>navigation.navigate('Expenses'),  //TODO: update the navigator
        },
    
        {
          name: ("Terms of use"),             //security controls - V1: Architecture, Design and Threat Modeling Requirements
          onPress: () => WebBrowser.openBrowserAsync("https://docs.google.com/document/d/18TYJovKBJr3s1_jrHjKgsGaeAwqKzUsR6yNgPV2sxOs/edit?usp=sharing"),
        },

        {
          name: ("Log out"),             //security controls - V1: Architecture, Design and Threat Modeling Requirements
          onPress: () =>navigation.navigate('Expenses'),  //TODO: update the navigator,
        },
      ];

    const socialMedia = [
        {
            iconName: "github",
            url: "https://github.com/Rae-Zou", //TODO: update the url 
        },
        {
            iconName: "figma",
            url: "https://www.figma.com/file/wU2oRN47Y64dNosORn3NTw/swen303-P1?node-id=0%3A1",
        },
        {
            iconName: "facebook",
            url: "https://www.facebook.com/",
        },
        ];




    return (
      
        <View style={styles.mainContainer}>

            {rowItems.map((l, i) => (
                <ListItem key={i} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem onPress={l.onPress}></ListItem>
            
                </ListItem>
                
          ))}

            <TouchableWithoutFeedback onPress={() => setSteps(steps + 1)}>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} resizeMode="contain" source={require("../assets/icon.png")} />
              </View>
            </TouchableWithoutFeedback>

            <View style={styles.soContainer}>
              <View style={styles.box}>
                {socialMedia.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => WebBrowser.openBrowserAsync(item.url)}>
                    <FontAwesome5 name={item.iconName} size={32} color={"#595D58"} />
                    </TouchableOpacity>
                ))}
              </View>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      paddingHorizontal: 4,
      backgroundColor: 'white',
    },
    soContainer: {
      flexDirection: "row",
      justifyContent: "center",
      flex: 3,

    },
    logoContainer: {
      flex: 1,
      alignItems: "center",
      paddingVertical: 8,
    },
    box: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      maxWidth: 200,
      paddingBottom: 50,
    },
    logo: {
      width: "50%",
    },

  });