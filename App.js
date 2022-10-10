import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React, { Component} from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen"
import financial from "./app/screens/financialScreen"
import relational from "./app/screens/relationalScreen"
import mental from "./app/screens/mentalScreen"
import emotional from "./app/screens/emotionalScreen"
import spiritual from "./app/screens/spiritualScreen"
import physical from "./app/screens/physicalScreen"
import selfTalk from "./app/screens/selfTalkScreen"
import affirmationTitles from "./app/screens/affirmationTitlesScreen"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {StyleSheet, Button, Text, View, Image, TouchableOpacity,} 
from "react-native";
import { Audio } from 'expo-av';
import affirmationTab from "./app/Components/affirmationTab";
import AppButton from "./app/Components/AppButton"


function addAffirmations ({ navigation }) {
  return(
<View style={{
          backgroundColor: "white",
          flex:1
        }}></View>
  );
}

function addTitle ({ navigation }) {
  return(
<View style={{
          backgroundColor: "grey",
          flex:1
        }}>
        </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
          
        />
        <Stack.Screen
          name="affirmationTitles"
          component={affirmationTitles}
          options={{ title: "Affirmation Titles" }}
        />
        <Stack.Screen
          name="addAffirmations"
          component={addAffirmations}
          options={{ title: "Add Affirmation" }}
        />
         <Stack.Screen
          name="addTitle"
          component={addTitle}
          options={{ title: "Add Title" }}
        />
        <Stack.Screen
          name="financial"
          component={financial}
          options={{ title: "Financial" }}
        />
        <Stack.Screen
          name="relational"
          component={relational}
          options={{ title: "Relational" }}
        />
        <Stack.Screen
          name="mental"
          component={mental}
          options={{ title: "Mental" }}
        />
        <Stack.Screen
          name="emotional"
          component={emotional}
          options={{ title: "Emotional" }}
        />
         <Stack.Screen
          name="spiritual"
          component={spiritual}
          options={{ title: "Spiritual" }}
        />
        <Stack.Screen
          name="physical"
          component={physical}
          options={{ title: "Physical" }}
        />
         <Stack.Screen
          name="selfTalk"
          component={selfTalk}
          options={{ title: "Self Talk" }}
        />
         <Stack.Screen
          name="affirmationTab"
          component={affirmationTab}
          options={{ title: "Affirmation Tab" }}
        />
          <Stack.Screen
          name="AppButton"
          component={AppButton}
          options={{ title: "Affirmation Tab" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

//to render an image import image component up top
//justify content ad align items together allow image to center
// if you dont put anything between tags use self closing sentax to make code cleaner
