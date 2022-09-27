import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Button, TextInput, StyleSheet } from "react-native";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => 
{
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1}}>
            <ImageBackground resizeMode="cover" style={{ flex: 1}} source = {{uri: "https://tinder.com/static/tinder.png"}}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={()=>navigation.navigate('Home')}>                
                    <Text style={styles.signIn}>Sign in and swipe</Text>
                    <TextInput style={styles.textInput}  placeholder='Username'/>
                    <TextInput  style={styles.textInput}  placeholder='Password'/>
                    <Button title="Go to Home" style={styles.button} onPress={()=>navigation.navigate('Home')}/>
                    </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    textInput:
    {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '50%',
      marginHorizontal: '25%',
      padding: 8,
      marginTop:10,
      borderRadius: 3,
    },
    signIn:
    {
        backgroundColor: 'black', 
        fontSize: 30, 
        color: 'white', 
        marginTop: 320, 
        marginBottom: 120,
        fontWeight: 'bold',
        borderRadius: 8,
        overflow: 'hidden',
        
    },
    button:
    {
        backgroundColor: 'black', 
        color: 'red',
    },
})