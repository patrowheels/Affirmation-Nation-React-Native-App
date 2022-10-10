import React, { createElement, useState } from "react";

import { TouchableOpacity, Button,Text,TextInput, View, ImageBackground, StyleSheet, Image, } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AffirmationTab from "../Components/affirmationTab";
import { render } from "react-dom";
import affirmationTab from "../Components/affirmationTab";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";



function financial({navigation}) {

  const [ count, setCount] = useState(4)
  const [ theme, setTheme] = useState( ()=> {return <AffirmationTab/>})

  function decrementCount() {
    // setCount( prevcount => prevcount - 1 )
  }

  function addCount() {
    // setCount( prevcount => prevcount + 1 )
  }

  function addTheme(){
    setTheme( prevtheme => [prevtheme, prevtheme  ])
  }

  // const styles=StyleSheet.create({
  //   newTitle: {
  //     marginTop: 20,
  //   } 
  // })
    
  return ( 
      
      
 
   <View
      style={{
        backgroundColor: "dodgerblue",
        flex: 1,
        //  flexDirection: "row",  // main axis horizontal
        // justifyContent: "center", // align to main axis
        alignItems: "center", // align to secoundry axis
        // alignContent: "center",
        // flexWrap: "wrap",
        // justifyContent: "flex-start",
        // flexShrink: 1,
      }}
    >
   
   {/* navigation.navigate("addAffirmations") */}
    <TouchableOpacity onPress={addTheme}>
      <MaterialCommunityIcons 
        name="plus" 
        size={40} 
        color={"black"} 
        style={{
          marginLeft: 275,
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


  
  <Swipeable renderRightActions={() => 
  <View style={{
    backgroundColor: "red",
    width: 70,
    height: 75,
    marginTop: 5,
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
                    marginTop: 5,
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3} ,
                    shadowOpacity: 1,
                    
                  }}>
                    <MaterialCommunityIcons 
                      name="pen" 
                      size={35} 
                      color={"white"}
                      style={{
                        alignSelf: "center",
                        marginTop: 20,
                      }}
                      />
                  </View>}>
    
      
          
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
                uri: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
              }}>Money Comes easily and frequently !</TextInput>
            
          </View>
       
        <View style={{marginTop: 5,}}></View>
        </Swipeable>
  
  

        <Swipeable renderRightActions={() => 
  <View style={{
    backgroundColor: "red",
    width: 70,
    height: 75,
    marginTop: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3} ,
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
                    marginTop: 10,
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3} ,
                    shadowOpacity: 1,
                    
                  }}>
                    <MaterialCommunityIcons 
                      name="pen" 
                      size={35} 
                      color={"white"}
                      style={{
                        alignSelf: "center",
                        marginTop: 20,
                      }}
                      />
                  </View>}>
        
          <View // Line 2
            style={{
              backgroundColor: "grey",
              width: 350,
              height: 75,
              flexDirection: "row",
              marginTop: 10,
              // alignSelf: "flex-start",
              shadowColor: "black",
              shadowOffset: { width: 3, height: 3} ,
              shadowOpacity: 1,
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
            <Text 
            style={{ 
              fontSize: 20, 
              marginLeft: 10, 
              marginTop: 10, 
              fontWeight: "bold", 
              flex: 1,
              }}>I can see many big deposits in my bank and it feels amazing! !</Text>
            
          </View>
        <View style={{marginTop: 5,}}></View>
        </Swipeable>
  
  
        <Swipeable renderRightActions={() => 
  <View style={{
    backgroundColor: "red",
    width: 70,
    height: 75,
    marginTop: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3} ,
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
                    marginTop: 10,
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3} ,
                    shadowOpacity: 1,
                    
                  }}>
                    <MaterialCommunityIcons 
                      name="pen" 
                      size={35} 
                      color={"white"}
                      style={{
                        alignSelf: "center",
                        marginTop: 20,
                      }}
                      />
                  </View>}>
        
          <View // Line 3
            style={{
              backgroundColor: "grey",
              width: 350,
              height: 75,
              // alignContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              flexShrink: 1,
              marginTop: 10,
              shadowColor: "black",
              shadowOffset: { width: 3, height: 3} ,
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
              style={{
                // marginTop: 20,
                // marginLeft: 10,
                // flexWrap: "wrap",
                // flexDirection: "row",
                // alignItems: "center",
                // alignContent: "center",
  
              }}
            />
           
          
            <Text style={{ fontSize: 20, marginLeft: 30, marginTop: 10, fontWeight: "bold", }}>Money comes alot and in many ways!</Text>
            
          </View>
       
        <View style={{marginTop: 5,}}></View>
        </Swipeable>
  

  

     <Swipeable renderRightActions={() => 
  <View style={{
    backgroundColor: "red",
    width: 70,
    height: 75,
    marginTop: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3} ,
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
                    marginTop: 10,
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3} ,
                    shadowOpacity: 1,
                    
                  }}>
                    <MaterialCommunityIcons 
                      name="pen" 
                      size={35} 
                      color={"white"}
                      style={{
                        alignSelf: "center",
                        marginTop: 20,
                      }}
                      />
                  </View>}>
        
          
          <View // Line 4
          
            style={{
              backgroundColor: "grey",
              width: 350,
              height: 75,
              flexWrap: "wrap",
              // alignSelf: "flex-start",
              marginTop: 10,
              // alignContent: "center",
              alignItems: "center",
              // flexWrap: "wrap",
              flexShrink: 1,
              shadowColor: "black",
              shadowOffset: { width: 3, height: 3} ,
              shadowOpacity: 1,
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
            <Text style={{ fontSize: 20, marginLeft: 30, marginTop: 10, fontWeight: "bold", textAlign: "left", }}>Abundance is key to who Iam definitly !</Text>
            
          </View>
          <View style={{marginTop: 5,}}></View>
        </Swipeable>


        {/* <AffirmationTab/> */}
{/* <TouchableWithoutFeedback style={{flexDirection: "row"}}>
  <View style={{ width: 50, height: 50, backgroundColor: "silver", }}>
    <TouchableWithoutFeedback onPress={decrementCount}>
    <Text style={{fontSize:40, alignSelf: "center"}} >-</Text>
    </TouchableWithoutFeedback>
    </View>
  <Text style={{fontSize: 30, padding: 10}}>{count}</Text>
  <View style={{ width: 50, height: 50, backgroundColor: "silver",}}>
  <TouchableWithoutFeedback onPress={addCount}>
  <Text style={{fontSize:40, alignSelf: "center"}} >+</Text>
  </TouchableWithoutFeedback>
  </View>
  </TouchableWithoutFeedback> */}

  <View><Text>{theme}</Text></View>
    </View>
    );
  }
 
  export default financial;
  