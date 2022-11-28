import React from "react";
import { SafeAreaView } from "react-native";
import Pagination from "../../components/Pagination";
import { Styles } from "./style";
import DriversAll from "../../components/DriversAll";




const style = Styles()

function DriversList() {


  return (
   <SafeAreaView style={style.container}>

       <Pagination/>
     <DriversAll country='Portugal' name='Max Verstappen'/>
     <DriversAll country='Brazil' name='Marcos Alonso'/>
     <DriversAll country='Germany' name='Micael Schumaher'/>
     <DriversAll country='Austria' name='Micael Schumaher'/>


   </SafeAreaView>
  );
}

export default DriversList;
