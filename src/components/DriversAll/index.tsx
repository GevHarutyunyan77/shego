import React from "react";
import { Image, Text, View } from "react-native";
import st from './style'
import flags from "../../constants/flags";

interface FLAGS{
  country:string,
  name: string
}


function DriversAll({country, name}:FLAGS) {



  return (
    <View style={st.container}>
      <Image source={{uri: flags[country]}} style={st.flagStyle}/>
      <Text style={st.text}>{name}</Text>
    </View>
  );
}

export default DriversAll;
