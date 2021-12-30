import axios from 'axios';
import { WEATHER_URL as url, WEATHER_KEY as key } from '../../../config';

export function byCityName(location) {
    return axios({
        method: 'GET',
        url: `${url}?q=${location}&units=metric&appid=${key}`,
    }).then(response => response.data)
}

export function byLatLonCoordinates(lat, lon) {
    return axios({
        method: 'GET',
        url: `${url}?lat=${lat}&lon=${lon}&units=metric&appid=${key}`,
    }).then(response => response.data)
}
