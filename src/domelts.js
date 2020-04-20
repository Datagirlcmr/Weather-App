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
            // if (name = '') {
            //     const errorMessage = document.querySelector('.error');
            //     errorMessage.textContent = "The Input entered is incorrect";
            // }
    });
}

async function getWeather(value='Bamenda') {
    const response = await fetch ("https://api.openweathermap.org/data/2.5/weather?q="+ value + "&APPID=a65bf913c63cc981687c4ea80470725d", {mode: 'cors'})
    const weatherdata = await response.json();

    //console.log(weatherdata);

    //const {lon, lat} = weatherdata.coord;
    const [weather] = weatherdata.weather;
    const {main, description} = weather;
    let {temp, feels_like, humidity} = weatherdata.main;
    const {speed, deg} = weatherdata.wind;
    const {country} = weatherdata.sys;
    const name = weatherdata.name;

    const ctryName = document.querySelector('#ctry');
    ctryName.textContent = name + ',  ' + country;
    
    const tempCelcius = (temp - 273).toFixed(2);
    const tempFahrenheit = ((tempCelcius * 1.8000) + 32).toFixed(2);

    const feelsCelcius = (feels_like - 273).toFixed(2);
    const feelsFahrenheit = ((feelsCelcius * 1.8000) + 32).toFixed(2);

    const temperature = document.querySelector('.temp');
    temperature.textContent = `${tempCelcius} °C`;

    const tempC = document.querySelector('#toggleC');
    tempC.addEventListener('click', ()=>{
        temperature.textContent = `${tempCelcius} °C`;
        feelsLike.textContent = `but it feels like ${feelsCelcius} °C`;
    })

    const tempF = document.querySelector('#toggleF');
    tempF.addEventListener('click', ()=>{
        temperature.textContent = `${tempFahrenheit} °F`;
        feelsLike.textContent = `but it feels like ${feelsFahrenheit} °F`;
    })

    const feelsLike = document.querySelector('.feels-like');
    feelsLike.textContent = ` but it feels like ${feelsCelcius} °C`;
    
    const getHumid = document.querySelector('#humid-w');
    getHumid.textContent = `${humidity} %`;
    
    const getDesc = document.querySelector('#main-desc');
    getDesc.textContent = `Mostly ${main}`;
    //console.log(getDesc);
    
    const getWind = document.querySelector('#wind-deg');
    getWind.textContent = `${speed} mph`;

}

export {getLocation, getWeather, getDate};