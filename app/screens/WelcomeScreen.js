import React from "react";
import { Button,Text, View, ImageBackground, StyleSheet, } from "react-native";
import AppButton from "../Components/AppButton";


function WelcomeScreen({navigation}) {
  return (

    
    <ImageBackground
      style={styles.background}
      source={require("../assets/sunflower.jpg")}
    >

<Text
        style={{
          fontWeight: "bold",
          fontSize: 35,
          marginTop: 35,
          marginBottom: 5,
          textAlign: "center"
        }}
      >
        Affirmation Nation!
      </Text>

<Text style={{marginTop:"110%"}}></Text>
<AppButton 
title="Login" 
onPress={() => navigation.navigate("affirmationTitles")}
/>
      
    </ImageBackground>
    
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default WelcomeScreen;
