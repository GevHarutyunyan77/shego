import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image, SafeAreaView, View, Text} from "react-native";
import {Styles} from './style';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from '../home/index'
import DriversList from "../driversList";
// @ts-ignore
import topImage from '../../assets/images/f1-22.webp'
import {SCREEN_OPTIONS} from "../../constants/navigation";

const style = Styles()
const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <>
            <View>
                <Image source={topImage} style={style.imageStyle}/>
            </View>
            <NavigationContainer>
                <Tab.Navigator screenOptions={SCREEN_OPTIONS}>
                    <Tab.Screen
                      name={'driversList'}
                      component={DriversList}
                      options={{tabBarIcon: () => <Text style={{color: 'black', fontSize: 30}}>All</Text>}}
                    />
                    <Tab.Screen
                        name={'homeScreen'}
                        component={HomeScreen}
                        options={{tabBarIcon: () => <Text style={{color: 'black', fontSize: 30}}>TOPS</Text>}}
                    />

                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}

export default Navigation;
