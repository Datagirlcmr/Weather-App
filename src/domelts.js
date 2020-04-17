const getDate = () => {
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

const getTemp = () => {
    

}

async function getWeather(value) {
    const response = await fetch ("https://api.openweathermap.org/data/2.5/weather?q="+ value + "&APPID=a65bf913c63cc981687c4ea80470725d", {mode: 'cors'})
    const weatherdata = await response.json();

    console.log(weatherdata);

    //const {lon, lat} = weatherdata.coord;
    const [weather] = weatherdata.weather;
    const {main, description} = weather;
    const {temp, feels_like, humidity} = weatherdata.main;
    const {speed, deg} = weatherdata.wind;
    const {country} = weatherdata.sys;
    const name = weatherdata.name;
    const ctryName = document.querySelector('#ctry');
    ctryName.textContent = name + ',  ' + country;

    const temperature = document.querySelector('.temp');
    temperature.textContent = `${temp} °C`;

    const feelsLike = document.querySelector('.feels-like');
    feelsLike.textContent = feels_like;
    
    const getHumid = document.querySelector('#humid-w');
    getHumid.textContent = `${humidity} %`;
    
    const getDesc = document.querySelector('#main-desc');
    getDesc.textContent = `Mostly ${main}`;
    console.log(getDesc);
    
    const getWind = document.querySelector('#wind-deg');
    getWind.textContent = `${speed} mph`;
}

export {getLocation, getWeather, getDate};