import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text, Button, SafeAreaView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swiper from "react-native-deck-swiper"

const DummyData = [
    {
        firstName: "Kohin",
        lastName: "Khandwalla",
        occupation: "S.W.E.",
        photoURL: "temp",
        age: 23,
        id: 1
    },
    {
        firstName: "Gary",
        lastName: "Bowen",
        occupation: "Janitor",
        photoURL: "temp",
        age: 24,
        id: 2
    },
    {
        firstName: "Dante",
        lastName: "Coupe",
        occupation: "Slave",
        photoURL: "temp",
        age: 25,
        id: 3
    },

];


const HomeScreen = () => {

    useLayoutEffect(() => {
        // navigation.setOptions(
        // {
        //     headerShown: false,
        // });
    }, []);

    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {/* Profile Pic placed here */}
                <TouchableOpacity>
                    <Image source={{ uri: "https://tinder.com/static/tinder.png" }} />
                    <MaterialCommunityIcons name="face-woman-profile" size={30} color="black" />
                </TouchableOpacity>
                {/* Logo placed here */}
                <TouchableOpacity style={{}}>
                    <Image source={{ uri: "https://tinder.com/static/tinder.png" }} />
                    <FontAwesome5 name="dog" size={30} color="black" />
                </TouchableOpacity>
                {/* Chat tab placed here */}
                <TouchableOpacity style={{}} onPress={() => navigation.navigate('Chat')}>
                    <Ionicons name="md-chatbubble-ellipses-sharp" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <View>
                <Button title="Who wants me" onPress={() => navigation.navigate('Chat')} />
            </View>

            <View style={{ flex: 1}}>
                <Swiper
                    containerStyle={{ backgroundColor: 'transparent' }}
                    cards={DummyData}
                    renderCard={card =>
                    (
                        <View key={card.id} style={{ backgroundColor: 'pink' , height: 400, borderRadius: 6 }}>
                            <Text>{card.firstName}</Text>
                            <Text>{card.lastName}</Text>
                            <Text>{card.occupation}</Text>
                            <Text>{card.age}</Text>
                        </View>
                    )}
                />
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    topMiddle:
    {
    },
})