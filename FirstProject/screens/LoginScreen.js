import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => 
{
    const {user} = useAuth()
    const navigation = useNavigation();

    console.log(user);
    return (
        <View style={{ flex: 1}}>
            <ImageBackground resizeMode="cover" style={{ flex: 1}} source = {{uri: "https://tinder.com/static/tinder.png"}}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', rounded: "2xl"}}>                
                    <Text style={{backgroundColor:'grey', fontSize: 30, marginTop:450}}>Sign in and swipe</Text>
                    </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen