import React from 'react';
import { View, StyleSheet, Text} from "react-native";
import { TouchableWithoutFeedback, TouchableOpacity,Button } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


function AppButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("affirmationTitles")} >
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
          borderRadius: 25,
          padding: 15,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          width: '70%',
          height: "35%",
          
    },
    text: {
        color: "white",
        fontSize: 25,
        textTransform: "uppercase",
        fontWeight: 'bold',
    }
});



export default AppButton;