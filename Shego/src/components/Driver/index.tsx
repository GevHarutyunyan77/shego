import React, { FC } from "react";
import { Text, View } from "react-native";
import {Styles} from "./style";
const style = Styles()



interface driver {
  name:string,
  position: string,
  country: string
  team:string,
  points: string
}


function Driver({position, name, country, team, points }:driver) {
  return (
   <View style={style.container}>
     <View style={style.positionView}>
       <Text style={style.text}>{position}</Text>
     </View>

     <View style={style.nameView}>
       <Text style={style.text}>{name}</Text>
     </View>

     <View style={style.nationalityView}>
       <Text style={style.text}>{country}</Text>
     </View>

     <View style={style.pointsView}>
       <Text style={style.text}>{team}</Text>
     </View>

     <View style={style.pointsView}>
       <Text style={style.text}>{points}</Text>
     </View>

   </View>
  );
}

export default Driver;
