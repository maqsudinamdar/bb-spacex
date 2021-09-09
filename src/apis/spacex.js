
import axios from 'axios';

export const API_DEFAULT_PARAMS = {
    limit: 10,
}

export default axios.create({
    baseURL: 'https://api.spacexdata.com/v3'
});