import {GET_DATA_REQUEST, GET_TOP_DRIVERS_SUCCESS} from "../actions/app";


const initialState = {
  status:'no',
  topDriversData:[]
}

export default function(state=initialState, action:any){
  switch (action.type){
    case GET_DATA_REQUEST:{
      return{
        ...state,
        status: 'request'
      }
    }

    case GET_TOP_DRIVERS_SUCCESS:{

      return{
        ...state,
        status: 'ok',
        topDriversData: action.payload.response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      }
    }

    default: {
      return {...state}

    }


  }
}
