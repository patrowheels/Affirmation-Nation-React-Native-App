
import React, { useState } from "react";
import { Button,Text,View,Image,TextInput, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import RelationAffirmationTab from "../Components/relationAffirmationTab";

function relational ({ navigation}) {

  const [ theme, setTheme] = useState( ()=> {return <RelationAffirmationTab/>})

  function addTheme(){
    setTheme( prevtheme => [prevtheme, prevtheme,])
  }

    return (
      <View style={{
        backgroundColor: "gold",
        flex: 1,
        alignItems: "center", // align to secoundry axis
        }}>
  
        <TouchableOpacity onPress={addTheme}>
        <MaterialCommunityIcons 
        name="plus" 
        size={40} 
        color={"black"} 
        style={{
          marginLeft: 300,
        }}
        />
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => navigation.navigate("affirmationTab")}>
        <MaterialCommunityIcons 
        name="pen" 
        size={90} 
        color={"black"} 
        style={{
          marginLeft: 275,
          
        }}
        />
        </TouchableOpacity> */}

            <View // Line 1
            style={{
              backgroundColor: "grey",
              width: 350,
              height: 75,
              flexDirection: "row",
              marginTop: 5,
              // alignSelf: "flex-start",
              shadowColor: "black",
              shadowOffset: { width: 3, height: 3} ,
              shadowOpacity: 1,
              // shawdowRadius: 1,
            }}
          >
            <Image
              source={{
                width: 75,
                height: 75,
                uri: "https://images.unsplash.com/photo-1614278016630-017112643d7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              }}
              // style={{
              //   marginTop: 0,
              //   marginLeft: 0,
              // }}
            />
          
            <TextInput style={{ 
              fontSize:20, 
              marginLeft: 10, 
              marginTop: 10, 
              fontWeight: "bold", 
              textAlign: "left",
              }}>add text</TextInput>
            
          </View>
          <View><Text>{theme}</Text></View>
     </View>
    );
  }

  export default relational;