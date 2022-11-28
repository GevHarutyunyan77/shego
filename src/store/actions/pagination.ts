export const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAIL = 'GET_DATA_FAIL'

export const SET_PAGE = 'SET_PAGE'






export function getData(offset:number, limit:number){
    return{
        type: GET_DATA_REQUEST,
        payload: {offset, limit}
    }
}

export function setCurrentPage(page:number){
    return{
        type: SET_PAGE,
        payload: page
    }
}

