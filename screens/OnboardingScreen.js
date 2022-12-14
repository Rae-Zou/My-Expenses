import React from "react";
import { SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Text, Dimensions } from "react-native";
import * as WebBrowser from "expo-web-browser";

import AppButton  from "../components/AppButton";

export default function OnboardingScreen({ navigation }) {


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageView}>
                <Image style={styles.image} resizeMode="contain" source={require("../assets/onboarding.png")} />
            </View>
            <View style={styles.termsOfUseView}>
                <Text style={styles.header}>{("Welcome to My.Expenses")}</Text>
                <Text style={styles.text}>
                    {("By proceeding, you are agreeing to our terms of use.")}
                </Text>
                <TouchableOpacity
                    onPress={() => WebBrowser.openBrowserAsync("https://docs.google.com/document/d/18TYJovKBJr3s1_jrHjKgsGaeAwqKzUsR6yNgPV2sxOs/edit?usp=sharing")}
                >
                    <Text style={styles.read}>{("Read Terms of Use")}</Text>
                </TouchableOpacity>
                <View style={styles.buttonView}>
                    <AppButton 
                        title="I agree" 
                        size="sm" 
                        onPress={() =>navigation.navigate('MyLogin')}
                    />
                </View>
            </View>
      </SafeAreaView>
    );
};

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        justifyContent: "space-between",
    },
    termsOfUseView: {
        paddingHorizontal: 16,
        alignItems: "center",
        flex: 2,
    },
    header: {
        paddingVertical: 16,
        textAlign: "center",
        paddingVertical: 10,
        color: "#595D58",
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        paddingVertical: 16,
        textAlign: "center",
        paddingVertical: 10,
        color: "#595D58",
        marginTop: 10
    },
    buttonView: {
        position: "absolute",
        bottom: Dimensions.get("window").width - 150,
        right: 0,
        left: 0,
        marginHorizontal: 16,
    },
    imageView: {
        flex: 1,
    },
    image: {
        marginVertical: 8,
        alignSelf: "center",
        maxWidth: 320,
        width: "100%",
        height: Dimensions.get("window").width - 50,
        marginTop: 20
    },
    read: { 
        textAlign: "center",
        paddingVertical: 10,
        color: "#4BB377",
    },
  });