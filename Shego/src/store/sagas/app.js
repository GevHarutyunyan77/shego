import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_TOP_DRIVERS_REQUEST, GET_TOP_DRIVERS_SUCCESS } from "../actions/app";
import {takeLatest, put, call} from 'redux-saga/effects'
import axios from "axios";

export default function* watcher(){
  yield takeLatest(GET_TOP_DRIVERS_REQUEST, handleGetData)
}


function *handleGetData(){
  try{
     const response = yield call( ()=> axios.get('https://ergast.com/api/f1/current/driverStandings.json'))

    yield put({
      type: GET_TOP_DRIVERS_SUCCESS,
      payload: { response }
    })
  } catch (e){
    console.log(e);
  }
}
