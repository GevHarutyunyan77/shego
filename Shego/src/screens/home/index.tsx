import React, { useEffect } from "react";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import { Styles } from './style'
import hook from "./hook";
import Driver from "../../components/Driver";
import { getTopDrivers } from "../../store/actions/app";
import { useDispatch, useSelector } from "react-redux";
import {isEmpty, uniqueId }  from 'lodash'





function HomeScreen() {
  const {handlex} = hook()
  const style = Styles()
  const dispatch = useDispatch()
  const {topDriversData} = useSelector( (state:any) => state.app)
  console.log(777,topDriversData);


   useEffect( ()=>{
     dispatch(getTopDrivers())
  },[])

  const renderItem = ({item}:any)=>{
     return(
       <Driver name={item.Driver.givenName +' '+ item.Driver.familyName} position={item.position} country={item.Driver.nationality} team={item.Constructors[0].name}
               points={item.points} />
     )
  }





  return (
    <SafeAreaView style={style.container}>

      <View style={style.titlesView}>

        <View style={style.positionView}>
          <Text style={style.text}>#</Text>
        </View>
        <View style={style.nameView}>
        <Text style={style.text}>Name</Text>
        </View>
        <View style={style.nationalityView}>
          <Text style={style.text}>Nationality</Text>
        </View>

       <View style={style.pointsView}>
         <Text style={style.text}> Team</Text>
       </View>
        <View style={style.pointsView}>
          <Text style={style.text}>Points</Text>
        </View>
      </View>

      {

        !isEmpty(topDriversData) &&
        <FlatList
          data={topDriversData}
          renderItem={renderItem}
        keyExtractor={()=>uniqueId()}
        />









      }



    </SafeAreaView>

  );
}

export default HomeScreen;
