import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import useAuth from "./hooks/useAuth";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    //const { user } = useAuth();
    return (
        <Stack.Navigator>

            {/*             Checks if user has value to go to home page or login page first
            {/{user ? (
                <>
                    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown:false}}/>
                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )} } */}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;