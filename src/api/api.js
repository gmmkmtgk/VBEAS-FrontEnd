import axios from 'axios';
import { SERVER_LINK } from '../Utils/constants';


// const hostLink = 'https://bookfest-cli.herokuapp.com/api/publisher/list/'
// const hostLink = 'https://vbes-cli.herokuapp.com/api/';
// const link = 'http://localhost:8000/api/';

export default axios.create({
    baseURL: `${SERVER_LINK}/api/`,
    headers: { 'Content-Type': 'application/json' },
});