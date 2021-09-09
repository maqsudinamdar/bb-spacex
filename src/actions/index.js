import spacex,  { API_DEFAULT_PARAMS } from '../apis/spacex';

import {
    LIST_LAUNCHES,
    GET_LAUNCH
} from './types';

import history from '../history';


export const listLaunches = (offset = 0) => async dispatch => {

    const response = await spacex.get('/launches', {
        params: {
            ... API_DEFAULT_PARAMS,
            offset: offset
        }
    })

    dispatch({
        type: LIST_LAUNCHES,
        payload: response.data
    });
}

export const getLaunch = flight_number => async dispatch => {
    const response = await spacex.get('/launches', {
        params: {
            flight_number: flight_number,
        }
    })

    dispatch({
        type: GET_LAUNCH,
        payload: response.data
    })
}