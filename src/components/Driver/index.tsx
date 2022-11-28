import React from "react";
import { Text, View } from "react-native";
import st from "./style";

interface DriverProps {
  name:string,
  position: string,
  country: string
  team:string,
  points: string
}

function Driver({position, name, country, team, points }:DriverProps) {
  return (
   <View style={st.container}>
     <View style={st.positionView}>
       <Text style={st.text}>{position}</Text>
     </View>
     <View style={st.nameView}>
       <Text style={st.text}>{name}</Text>
     </View>
     <View style={st.nationalityView}>
       <Text style={st.text}>{country}</Text>
     </View>
     <View style={st.pointsView}>
       <Text style={st.text}>{team}</Text>
     </View>
     <View style={st.pointsView}>
       <Text style={st.text}>{points}</Text>
     </View>
   </View>
  );
}
export default Driver;
