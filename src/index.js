import './styles/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'domElements' from 'domelts';

async function getWeather() {
    const response = await fetch ("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a65bf913c63cc981687c4ea80470725d", {mode: 'cors'})
    const weatherdata = await response.json();

    console.log(weatherdata);

    const {lon, lat} = weatherdata.coord;

    const {temp, feels_like} = weatherdata.main;

    const {speed, deg} = weatherdata.wind;

    const {country} = weatherdata.sys;

    const name = weatherdata.name;

    console.log(name);

}
   
domElements();