import {GET_DATA_REQUEST, GET_TOP_DRIVERS_SUCCESS} from '../../actions/app';
import {SET_PAGE} from "../../actions/pagination";



const initialState = {
    currentPage: 1,
    totalPages: 855,
    paginationOffset:0
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case GET_DATA_REQUEST: {
            return {
                ...state,
                status: 'request',
            };
        }

        case SET_PAGE: {
            return {
                ...state,
                currentPage:action.payload
            };
        }

        default: {
            return {...state};
        }
    }
}
