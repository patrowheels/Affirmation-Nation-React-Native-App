import React, { Component } from "react";
import { Button,Text, View,Alert, ImageBackground, StyleSheet, TouchableOpacity, Image } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import affirmationTab from "../Components/affirmationTab";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


function affirmationTitles({ navigation }) {
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          //  flexDirection: "row",  // main axis horizontal
          justifyContent: "center", // align to main axis
          alignItems: "center", // align to secoundry axis
          // alignContent: "center",
          // flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        
        <TouchableOpacity onPress={() => navigation.navigate("addTitle")}>
        <MaterialCommunityIcons 
        name="plus" 
        size={40} 
        color={"dodgerblue"} 
        style={{
          marginLeft: 275,
        }}
        />
        </TouchableOpacity>

      
        <Swipeable renderRightActions={() => 
  <View style={{
    backgroundColor: "red",
    width: 70,
    height: 75,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3} ,
    shadowOpacity: 1,
    
  }}>
    <MaterialCommunityIcons 
        name="delete" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
  </View>} renderLeftActions={() => 
    <View style={{
      backgroundColor: "blue",
      width: 70,
      height: 75,
      shadowColor: "black",
      shadowOffset: { width: 3, height: 3} ,
      shadowOpacity: 1,
      
    }}>
      <MaterialCommunityIcons onPress={() => Alert.prompt("Create new title", "(this will replace the current title)", (text) => console.log(text))}
        name="pen" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
    </View>}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("financial")}>
          
          <View
            style={{
              backgroundColor: "dodgerblue",
              width: 350,
              height: 75,
              marginBottom: 7,
              flexDirection: "row",
              shadowColor: "black",
              shadowOffset: { width: 0, height: 3} ,
              shadowOpacity: 1,
              // alignSelf: "flex-start",
            }}
          >
            <Image
              source={{
                width: 75,
                height: 75,
                uri: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              }}
              // style={{
              //   marginTop: 0,
              //   marginLeft: 0,
              // }}
            />
           
            
  
            {/* this is how to get the image from local source or macbook
            <Image 
              source={require("./pics/sphere.png")}
              style={{
                marginTop: 35,
                marginLeft: 280,
              }}
            /> */}
            <Text style={{ fontSize: 30, marginLeft: 30, marginTop: 20, fontWeight: "bold",}}>Financial</Text>
            
          </View>
        </TouchableWithoutFeedback>
        </Swipeable>
  

        <Swipeable renderRightActions={() => 
  <View style={{
    backgroundColor: "red",
    width: 70,
    height: 75,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3} ,
    shadowOpacity: 1,
    
  }}>
    <MaterialCommunityIcons 
        name="delete" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
  </View>} renderLeftActions={() => 
    <View style={{
      backgroundColor: "blue",
      width: 70,
      height: 75,
      shadowColor: "black",
      shadowOffset: { width: 3, height: 3} ,
      shadowOpacity: 1,
      
    }}>
      <MaterialCommunityIcons onPress={() => Alert.prompt("Create new title", "(this will replace the current title)", text => console.log(text))}
        name="pen" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
    </View>}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("relational")}>
          <View
            style={{
              backgroundColor: "gold",
              width: 350,
              height: 75,
              marginBottom: 7,
              flexDirection: "row",
              shadowColor: "black",
              shadowOffset: { width: 0, height: 3} ,
              shadowOpacity: 1,
            }}
          >
            <Image
              source={{
                width: 75,
                height: 75,
                uri: "https://images.unsplash.com/photo-1614278016630-017112643d7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              }}
              
            />
            <Text style={{ fontSize: 30, marginLeft: 30, marginTop: 20, fontWeight: "bold",}}>Relational</Text>
          </View>
        </TouchableWithoutFeedback>
        </Swipeable>
  

        <Swipeable renderRightActions={() => 
  <View style={{
    backgroundColor: "red",
    width: 70,
    height: 75,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3} ,
    shadowOpacity: 1,
    
  }}>
    <MaterialCommunityIcons  
        name="delete" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
  </View>} renderLeftActions={() => 
    <View  style={{
      backgroundColor: "blue",
      width: 70,
      height: 75,
      shadowColor: "black",
      shadowOffset: { width: 3, height: 3} ,
      shadowOpacity: 1,
      
    }}>
      <MaterialCommunityIcons onPress={() => Alert.prompt("Create new title", "(this will replace the current title)", text => console.log(text))}
        name="pen" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
    </View>}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("mental")}>
          <View
            style={{
              backgroundColor: "green",
              width: 350,
              height: 75,
              flexDirection: "row",
              marginBottom: 7,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 3} ,
              shadowOpacity: 1,
            }}
          >
            <Image
              source={{
                width: 75,
                height: 75,
                uri: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              }}
              
            />
            <Text style={{ fontSize: 30, marginLeft: 30, marginTop: 20, fontWeight: "bold",}}>Mental</Text>
          </View>
        </TouchableWithoutFeedback>
        </Swipeable>
  

        <Swipeable renderRightActions={() => 
  <View style={{
    backgroundColor: "red",
    width: 70,
    height: 75,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3} ,
    shadowOpacity: 1,
    
  }}>
    <MaterialCommunityIcons 
        name="delete" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
  </View>} renderLeftActions={() => 
    <View style={{
      backgroundColor: "blue",
      width: 70,
      height: 75,
      shadowColor: "black",
      shadowOffset: { width: 3, height: 3} ,
      shadowOpacity: 1,
      
    }}>
      <MaterialCommunityIcons onPress={() => Alert.prompt("Create new title", "(this will replace the current title)", text => console.log(text))}
        name="pen" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
    </View>}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("emotional")}>
          <View
            style={{
              backgroundColor: "tan",
              width: 350,
              height: 75,
              flexDirection: "row",
              marginBottom: 7,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 3} ,
              shadowOpacity: 1,
            }}
          >
            <Image
              source={{
                width: 75,
                height: 75,
                uri: "https://images.unsplash.com/photo-1585507252242-11fe632c26e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
              }}
              
            />
            <Text style={{ fontSize: 30, marginLeft: 30, marginTop: 20, fontWeight: "bold",}}>Emotional</Text>
          </View>
        </TouchableWithoutFeedback>
        </Swipeable>
  
        <Swipeable renderRightActions={() => 
  <View style={{
    backgroundColor: "red",
    width: 70,
    height: 75,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3} ,
    shadowOpacity: 1,
    
  }}>
    <MaterialCommunityIcons 
        name="delete" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
  </View>} renderLeftActions={() => 
    <View style={{
      backgroundColor: "blue",
      width: 70,
      height: 75,
      shadowColor: "black",
      shadowOffset: { width: 3, height: 3} ,
      shadowOpacity: 1,
      
    }}>
      <MaterialCommunityIcons onPress={() => Alert.prompt("Create new title", "(this will replace the current title)", text => console.log(text))} 
        name="pen" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
    </View>}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("spiritual")}> 
        {/* onPress={() => console.log(" green pressed")} */}
          <View
            style={{
              backgroundColor: "orange",
              width: 350,
              height: 75,
              flexDirection: "row",
              marginBottom: 7,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 3} ,
              shadowOpacity: 1,
            }}
          >
            <Image
              source={{
                width: 75,
                height: 75,
                uri: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
              }}
             
            />
            <Text style={{fontSize: 30, marginLeft: 30, marginTop: 20, fontWeight: "bold",}}>Spiritual</Text>
          </View>
        </TouchableWithoutFeedback>
        </Swipeable>
  
        <Swipeable renderRightActions={() => 
  <View style={{
    backgroundColor: "red",
    width: 70,
    height: 75,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3} ,
    shadowOpacity: 1,
    
  }}>
    <MaterialCommunityIcons 
        name="delete" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
  </View>} renderLeftActions={() => 
    <View style={{
      backgroundColor: "blue",
      width: 70,
      height: 75,
      shadowColor: "black",
      shadowOffset: { width: 3, height: 3} ,
      shadowOpacity: 1,
      
    }}>
      <MaterialCommunityIcons onPress={() => Alert.prompt("Create new title", "(this will replace the current title)", text => console.log(text))}
        name="pen" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
    </View>}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("physical")}>
          <View
            style={{
              backgroundColor: "purple",
              width: 350,
              height: 75,
              flexDirection: "row",
              marginBottom: 7,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 3} ,
              shadowOpacity: 1,
            }}
          >
            <Image
              source={{
                width: 75,
                height: 75,
                uri: "https://images.unsplash.com/photo-1516826771201-5f85cb4a3133?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              }}
              
            />
            <Text style={{ fontSize: 30, marginLeft: 30, marginTop: 20, fontWeight: "bold",}}>Physical</Text>
          </View>
        </TouchableWithoutFeedback>
        </Swipeable>
  
        <Swipeable renderRightActions={() => 
  <View style={{
    backgroundColor: "red",
    width: 70,
    height: 75,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3} ,
    shadowOpacity: 1,
    
  }}>
    <MaterialCommunityIcons 
        name="delete" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
  </View>} renderLeftActions={() => 
    <View style={{
      backgroundColor: "blue",
      width: 70,
      height: 75,
      shadowColor: "black",
      shadowOffset: { width: 3, height: 3} ,
      shadowOpacity: 1,
      
    }}>
      <MaterialCommunityIcons onPress={() => Alert.prompt("Create new title", "(this will replace the current title)", text => console.log(text))}
        name="pen" 
        size={35} 
        color={"white"}
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        />
    </View>}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("selfTalk")}>
          <View
            style={{
              backgroundColor: "pink",
              width: 350,
              height: 75,
              flexDirection: "row",
              marginBottom: 7,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 3} ,
              shadowOpacity: 1,
            }}
          >
            <Image
              source={{
                width: 75,
                height: 75,
                uri: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              }}
             
            />
            <Text style={{ fontSize: 30, marginLeft: 30, marginTop: 20, fontWeight: "bold",}}>Self Talk</Text>
          </View>
        </TouchableWithoutFeedback>
        </Swipeable>
        
      </View>
    );
  }

  export default affirmationTitles;