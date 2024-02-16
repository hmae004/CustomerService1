import React from "react";
import { View, Image, StyleSheet,Pressable,Text,SafeAreaView,ScrollView} from "react-native";
import MyTextInput from "../components/Textbox.js";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const SignUpScreen = () => {
    const navigation=useNavigation();

    const doNothing = () => {
        console.log("Hi");
    }

    const goHome = () =>{
        navigation.navigate("Main")
    }

    let name = '';

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#8CA9AD" }}>
        <ScrollView>
        <View style={styles.container}>
            
            <View style={styles.backbutton}>
            <Pressable
                onPress={() => {
                    navigation.navigate("Login")
                }}>    
               <Ionicons name="arrow-back-outline" size={32} color="black" />
            </Pressable>
            </View>




            <View style={styles.inputContainer}>
                <MyTextInput
                    value={name}
                    onChange={doNothing}
                    placeholder={"Fullname"}
                    style={styles.input}
                />
                <MyTextInput
                    value={name}
                    onChange={doNothing}
                    placeholder={"Phone Number"}
                    style={styles.input}
                />
                <MyTextInput
                    value={name}
                    onChange={doNothing}
                    placeholder={"Email"}
                    style={styles.input}
                />
                <MyTextInput
                    value={name}
                    onChange={doNothing}
                    placeholder={"Password"}
                    style={styles.input}
                    secureTextEntry={true}
                />
            </View>
            <Pressable
                style={styles.button}
                onPress={goHome}>
                <Text style={styles.buttonText}>SignUp</Text>
            </Pressable>
        </View>
        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', // Center horizontally
        marginHorizontal: 30, // Provide some spacing from screen edges
        marginTop:100,
        backgroundColor: '#8CA9AD',
      
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
        height: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    backbutton: {
        marginBottom:60,
        marginLeft:-250,
        backgroundColor: '#8CA9AD',
        borderRadius: 20,
        padding: 10,
    }
});

export default SignUpScreen;
