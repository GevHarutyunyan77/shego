import {GET_TOP_DRIVERS_REQUEST, GET_TOP_DRIVERS_SUCCESS } from "../actions/app";
import {takeLatest, put, call} from 'redux-saga/effects'
import axios from "axios";

export default function* watcher(){
  yield takeLatest(GET_TOP_DRIVERS_REQUEST, handleGetData)
}

function *handleGetData(){
  try{
     const {data} = yield call( ()=> axios.get('https://ergast.com/api/f1/current/driverStandings.json'))

    yield put({
      type: GET_TOP_DRIVERS_SUCCESS,
      payload: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    })
  } catch (e){
    console.log(e);
  }
}
