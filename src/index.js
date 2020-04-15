import './styles/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const domElements = () => {

    const formSubmit = document.querySelector('#imgsubmit');  
    

    const ctryName = document.querySelector('#ctry');
    const toggler = document.querySelector('#toggle');
    const currentDate = document.querySelector('#date');
    
    currentDate.textContent = new Date().toUTCString();
}

const getLocation = () => {
    const searchIcon = document.querySelector('.search-icon');
    const getInput = document.querySelector('#location');
    searchIcon.addEventListener('click', () => {
        const inputValue = getInput.value;
        getWeather(inputValue);
    })
   
}


async function getWeather(value) {
    const response = await fetch ("https://api.openweathermap.org/data/2.5/weather?q="+ value + "&APPID=a65bf913c63cc981687c4ea80470725d", {mode: 'cors'})
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
getLocation();