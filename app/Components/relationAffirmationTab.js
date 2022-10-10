import React from 'react';
import { View,TouchableOpacity, StyleSheet,TextInput,Text, Image,} from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from "@expo/vector-icons";


function relationalAffirmationTab({navigation}) {
    return (
        
            
            // <TouchableOpacity style={styles.tab}>
            // <Text style={styles.text}>this is the tab component I want user to create and customize when user hits +</Text>
            // </TouchableOpacity>


            <Swipeable renderRightActions={() => 
                <View style={{
                  backgroundColor: "red",
                  width: 70,
                  marginTop: 10,
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
            <View // Line 1
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
              }}>add text here</TextInput>
            
          </View>
          <View style={{marginTop: 5,}}></View>
          </Swipeable>
        
    );
}

const styles = StyleSheet.create({
    tab: {
        width: "80%",
        height: 100,
        marginTop: 30,
        backgroundColor: "grey",
        borderColor: "black",
        borderWidth: 5,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    container: {
        backgroundColor: "grey",
        flex: 1
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    }

})

export default relationalAffirmationTab;

