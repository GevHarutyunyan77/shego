import React from "react";
import { SafeAreaView } from "react-native";
import Pagination from "../../components/Pagination";
import { Styles } from "./style";




const style = Styles()

function DriversList() {
  return (
   <SafeAreaView style={style.container}>

       <Pagination/>


   </SafeAreaView>
  );
}

export default DriversList;
