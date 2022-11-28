import {GET_DATA_REQUEST, GET_TOP_DRIVERS_SUCCESS} from '../../actions/app';
import {InitData} from "./types";



const initialState: InitData = {
  status: 'no',
  topDriversData: [],
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        status: 'request',
      };
    }

    case GET_TOP_DRIVERS_SUCCESS: {
      return {
        ...state,
        status: 'ok',
        topDriversData: action.payload
      };
    }

    default: {
      return {...state};
    }
  }
}
