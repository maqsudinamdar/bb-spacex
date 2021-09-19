import _ from 'lodash';
import {
    LIST_LAUNCHES,
    GET_LAUNCH,
    SUCCESS_LAUNCHES,
    FAILED_LAUNCHES,
    UPCOMING_LAUNCHES
} from '../actions/types';


export default (state = {}, action) => {

    switch (action.type){

        case LIST_LAUNCHES:
            return { ...state, launches: _.mapKeys(action.payload, 'flight_number') };
        
        case SUCCESS_LAUNCHES:
            return { ...state, launches: _.mapKeys(action.payload, 'flight_number') };
                
        case FAILED_LAUNCHES:
            return { ...state, launches: _.mapKeys(action.payload, 'flight_number') };
        
        case UPCOMING_LAUNCHES:
            return { ...state, launches: _.mapKeys(action.payload, 'flight_number') };
            
        case GET_LAUNCH:
            return { ...state,  ... _.mapKeys(action.payload, 'flight_number') };

        default:
            return state;
    }
}