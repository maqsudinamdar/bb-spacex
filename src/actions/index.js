import spacex,  { API_DEFAULT_PARAMS } from '../apis/spacex';

import {
    LIST_LAUNCHES,
    SUCCESS_LAUNCHES,
    FAILED_LAUNCHES,
    UPCOMING_LAUNCHES,
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

export const successLaunches = (offset = 0, launch_success = true) => async dispatch => {

    const response = await spacex.get('/launches', {
        params: {
            ... API_DEFAULT_PARAMS,
            offset: offset,
            launch_success: launch_success
        }
    })

    if(launch_success) {
        dispatch({
            type: SUCCESS_LAUNCHES,
            payload: response.data
        });
    }

    dispatch({
        type: FAILED_LAUNCHES,
        payload: response.data
    });

}

export const upcomingLaunches = (offset = 0) => async dispatch => {

    const response = await spacex.get('/launches/upcoming', {
        params: {
            ... API_DEFAULT_PARAMS,
            offset: offset
        }
    })

    dispatch({
        type: UPCOMING_LAUNCHES,
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