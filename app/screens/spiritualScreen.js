import React from "react";
import { Button,Text, View, ImageBackground,Image, StyleSheet, TouchableOpacity } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function spiritual ({ navigation}) {
    return (
      <View style={{
        backgroundColor: "orange",
        flex: 1,
        alignItems: "center", // align to secoundry axis
      }}>
  
  
  <TouchableOpacity onPress={() => navigation.navigate("addAffirmations")}>
        <MaterialCommunityIcons 
        name="plus" 
        size={40} 
        color={"black"} 
        style={{
          marginLeft: 300,
        }}
        />
        </TouchableOpacity>

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
                uri: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
              }}
              // style={{
              //   marginTop: 0,
              //   marginLeft: 0,
              // }}
            />
          
            <Text style={{ 
              fontSize:20, 
              marginLeft: 10, 
              marginTop: 10, 
              fontWeight: "bold", 
              textAlign: "left",
              }}></Text>
            
          </View>
      </View>
    );
  }


export default spiritual;