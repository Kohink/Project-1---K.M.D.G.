import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = () => 
{
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the home screen </Text>
            <Button title="Go to Chat" onPress={()=>navigation.navigate('Chat')}/>
        </View>
    )
}

export default HomeScreen