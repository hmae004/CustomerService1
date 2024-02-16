import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import MyTextInput from "../components/Textbox";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  const goSignUp = () => {
    navigation.navigate('SignUp');
  };

  const doNothing = () => {
    console.log("Hi");
  };

  const Login=()=>{
    navigation.navigate("Main");
  }

  let name = '';
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#8CA9AD" }}>
      <ScrollView>
            <View style={styles.centeredContainer}>
            <Image source={require('../assets/logo.png')} style={styles.image} />
            <View style={styles.inputContainer}>
              <MyTextInput value={name} placeholder={"Email"} onChange={doNothing} />
              <MyTextInput value={name} placeholder={"Password"} onChange={doNothing} />
            </View>
            <Pressable style={styles.button} onPress={Login}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={goSignUp}>
              <Text style={styles.signup}>SignUp</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    alignItems: 'center', // Center horizontally
    marginHorizontal: 30, // Provide some spacing from screen edges
    marginTop:100,
},
  image: {
    width: 200,
    height: 200,
    tintColor: 'rgba(0, 0, 0, 0.7)',
    marginBottom:30,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: -20,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 50,
  },
  signup: {
    color: '#040720',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 15, // Add some spacing above the signup text
  },
});
