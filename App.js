import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatPage from './ChatPage';
import CommunityPage from './CommunityPage'; 
import SignUpScreen from './auth/SignUpScreen';
import Voice from './Voice';
import ElderPage from './Elder';
import LoginScreen from './auth/Login';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Main" options={{headerShown:false}}>
            {()=>(
            <Tab.Navigator  
                        screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                          if (route.name === 'Chat') {
                            return <Ionicons name="chatbox-outline" size={24}/>
                          } else if (route.name === 'Community') {
                            return <Ionicons name="people-outline" size={24}/>
                          }else if(route.name==="Elder"){
                            return <Ionicons name="clipboard-outline" size={32} color="black" />
                          }else if(route.name==="Voice"){
                            return <Ionicons name="mic-outline" size={32} color="black" />
                          }
          
                        },

                        tabBarActiveTintColor: 'blue',
                        tabBarInactiveTintColor: 'gray',
                      })}>
              <Tab.Screen name="Chat" component={ChatPage} options={{ headerShown: false }} />
              <Tab.Screen name="Community" component={CommunityPage} options={{ headerShown: false }}/>
              <Tab.Screen name="Voice" component={Voice} options={{ headerShown: false }}/>
              <Tab.Screen name="Elder" component={ElderPage} options={{ headerShown: false }}/>
            </Tab.Navigator> 
            )}  
          </Stack.Screen>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20, // Consider removing this if it interferes with navigation styling
  },
});

export default App;
