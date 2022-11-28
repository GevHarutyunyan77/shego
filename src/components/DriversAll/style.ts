import { StyleSheet } from "react-native";
import { Sizes } from "../../constants/ratio";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: Sizes(50),
    flexDirection: "row",
    alignItems:'center',
    marginTop:Sizes(5)
  },
  flagStyle: {
    width: Sizes(60),
    height: "100%",
    marginRight: 30
  },

  text:{
    color:'black',
    fontSize:Sizes(20)
  }

});
