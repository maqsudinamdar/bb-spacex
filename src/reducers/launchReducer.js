import _ from 'lodash';
import {
    LIST_LAUNCHES,
    GET_LAUNCH
} from '../actions/types';


export default (state = {}, action) => {

    switch (action.type){

        case LIST_LAUNCHES:
            return { ...state, launches: _.mapKeys(action.payload, 'flight_number') };

        case GET_LAUNCH:
            return { ...state,  ... _.mapKeys(action.payload, 'flight_number') };

        default:
            return state;
    }
}