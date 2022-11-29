import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDriversList } from "../../store/actions/app";
import DriversAll from "../../components/DriversAll";
import Driver from "../../components/Driver";


function useContainer() {

  const dispatch = useDispatch()
  const { currentPage} = useSelector((state:any) => state.pagination)
  const {allDriversList} = useSelector((state:any)=>state.app)


  const renderItem = ({item}: any) => {
    const {givenName, familyName, nationality} = item
    return (
      <DriversAll
        name={`${givenName} ${familyName}`}
        country={nationality}
      />
    )
  };



  useEffect(()=>{

    dispatch(getAllDriversList(currentPage-1))
  },[currentPage])




  return {
    allDriversList,
    renderItem

  }

  ;
}

export default useContainer;
