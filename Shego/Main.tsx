import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/screens/home'
import Navigation from "./src/screens/navigation";

const Stack = createNativeStackNavigator()
function Main() {
  const {status} = useSelector((state:any)=> state.app)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'navigation'} component={Navigation} />
        {/*<Stack.Screen name={'homeScreen'} component={HomeScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
