import {StyleSheet} from 'react-native';
import { Sizes } from "../../constants/ratio";

const Styles = () => {
  return StyleSheet.create({
    container:{
      flex:1,

    },
    imageStyle:{
      width: '100%',
      height: 230,
    },

    logo:{
      width: 150,
      height:'100%'
    }
  });
};

export {Styles};
