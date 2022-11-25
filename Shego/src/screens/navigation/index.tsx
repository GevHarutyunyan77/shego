import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Image, SafeAreaView, View, Text } from "react-native";
import {Styles} from './style';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from '../home/index'
import DriversList from "../driversList";
import CarSVG from "../../assets/svg/CarSVG";



const style = Styles()
const Tab = createBottomTabNavigator();

const screenOptionStyle ={
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle:{
    height:70,
  }
}






function Navigation() {
  return (
  <SafeAreaView style={style.container}>
    <View>
      <Image source={require('../../assets/images/f1-22.webp')} style={style.imageStyle}/>
    </View>






    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptionStyle}>
        <Tab.Screen name={'homeScreen'} component={HomeScreen} options={{tabBarIcon:()=> <Text style={{color:'black', fontSize:30}}>TOPS</Text>  }} />
        <Tab.Screen name={'driversList'} component={DriversList}/>
      </Tab.Navigator>
    </NavigationContainer>



  </SafeAreaView>
  );
}

export default Navigation;
