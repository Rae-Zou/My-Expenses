import React from 'react';
import * as WebBrowser from "expo-web-browser";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ListItem  from "./ListItem";

export default function SettingsScreen({ navigation }) {
    const rowItems = [
        {
          name: ("Data Storage and Privacy"),   //security controls - V2: Data Storage and Privacy Requirements
          onPress: () =>navigation.navigate('Data Storage and Privacy'),                    
        },

        {
          name: ("Notifications"),
          onPress: () =>navigation.navigate('Notifications'),  
        },
    
        {
          name: ("Terms of use"),             //security controls - V1: Architecture, Design and Threat Modeling Requirements
          onPress: () => WebBrowser.openBrowserAsync("https://docs.google.com/document/d/18TYJovKBJr3s1_jrHjKgsGaeAwqKzUsR6yNgPV2sxOs/edit?usp=sharing"),
        },

        {
          name: ("Log out"),             //security controls - V1: Architecture, Design and Threat Modeling Requirements
          onPress: () =>navigation.navigate('Logout'),  
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

            {rowItems.map((item, index) => (
                <ListItem
                  key={index}
                  showBottomLine={index !== rowItems.length - 1}
                  onPress={item.onPress}
                  title={item.name}
                />
            ))}

            
              <View style={styles.logoContainer}>
                <Image style={styles.logo} resizeMode="contain" source={require("../assets/icon.png")} />
              </View>
            

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
      paddingHorizontal: 16,
      backgroundColor: 'white',
      
    },
    soContainer: {
      flexDirection: "row",
      justifyContent: "center",
      flex: 5,

    },
    logoContainer: {
      flex: 2,
      alignItems: "center",
      paddingVertical: 16,
    },
    box: {
      flex: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      maxWidth: 200,
      paddingBottom: 10,
    },
    logo: {
      width: "50%",
    },

  });