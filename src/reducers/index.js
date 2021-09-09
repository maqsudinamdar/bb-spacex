import { combileReducers } from 'redux';

import launchReducer from './launchReducer';

export default combileReducers({
    launch: launchReducer
})