'use strict';
const api_key='37d6969ec1ea1fccbdd3e283be1b6920';
/** 
 * Fetch data from server
 * @param {string} URL API url
 * @param {function} callback callback
*/
export const fetchData= function(URL,callback) {
fetch(`${URL}&appid=${api_key}`)
.then(res=> res.json())
.then(data=>callback(data))
}
export const url={
    currentWeather(lat, lon){
        return`https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat,lon){
        return`https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon){
        return`http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&units=metric`
    },
    reverseGeo(lat,lon){
        return`http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}5&limit=5`
    },
    /**
     * @param {string} query  Search query e.g.: "London", "New York"
     */
    geo(query){
        return`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}