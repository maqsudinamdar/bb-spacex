import _ from 'lodash';
import {
    LIST_LAUNCHES,
    GET_LAUNCH,
    SUCCESS_LAUNCHES,
    FAILED_LAUNCHES,
    UPCOMING_LAUNCHES
} from '../actions/types';


const INITIAL_STATE = {
    data: {},
    dataCount: null
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type){

        case LIST_LAUNCHES:
            return { ...state, data: _.mapKeys(action.payload.data, 'flight_number'), dataCount: action.payload.headers['spacex-api-count'] };
        
        case SUCCESS_LAUNCHES:
            return { ...state, data: _.mapKeys(action.payload.data, 'flight_number'), dataCount: action.payload.headers['spacex-api-count'] };
                
        case FAILED_LAUNCHES:
            return { ...state, data: _.mapKeys(action.payload.data, 'flight_number'), dataCount: action.payload.headers['spacex-api-count'] };
        
        case UPCOMING_LAUNCHES:
            return { ...state, data: _.mapKeys(action.payload.data, 'flight_number'), dataCount: action.payload.headers['spacex-api-count'] };
            
        case GET_LAUNCH:
            return { ...state,  ... _.mapKeys(action.payload, 'flight_number') };

        default:
            return state;
    }
}