import Apiquery from './apiCall';

const getDate = () => {
  const currentDate = document.querySelector('#date');
  currentDate.textContent = new Date().toUTCString();
};

let weatherResults = null;

const domElements = () => {
  const ctryName = document.querySelector('#ctry');
  ctryName.textContent = `${weatherResults.name},  ${weatherResults.country}`;

  const tempCelcius = (weatherResults.temp - 273).toFixed(2);
  const tempFahrenheit = ((tempCelcius * 1.8000) + 32).toFixed(2);

  const feelsCelcius = (weatherResults.feels_like - 273).toFixed(2);
  const feelsFahrenheit = ((feelsCelcius * 1.8000) + 32).toFixed(2);

  const temperature = document.querySelector('.temp');
  temperature.textContent = `${tempCelcius} °C`;

  const feelsLike = document.querySelector('.feels-like');
  feelsLike.textContent = ` but it feels like ${feelsCelcius} °C`;

  const tempC = document.querySelector('#toggleC');
  tempC.addEventListener('click', () => {
    temperature.textContent = `${tempCelcius} °C`;
    feelsLike.textContent = `but it feels like ${feelsCelcius} °C`;
  });

  const tempF = document.querySelector('#toggleF');
  tempF.addEventListener('click', () => {
    temperature.textContent = `${tempFahrenheit} °F`;
    feelsLike.textContent = `but it feels like ${feelsFahrenheit} °F`;
  });

  const getHumid = document.querySelector('#humid-w');
  getHumid.textContent = `${weatherResults.humidity} %`;

  const getDesc = document.querySelector('#main-desc');
  getDesc.textContent = `Mostly ${weatherResults.main}`;

  const getWind = document.querySelector('#wind-deg');
  getWind.textContent = `${weatherResults.speed} mph`;
};

const getLocation = () => {
  const searchIcon = document.querySelector('.search-icon');
  const getInput = document.querySelector('#location');

  getInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchIcon.click();
    }
  });

  searchIcon.addEventListener('click', async () => {
    try {
      const inputValue = getInput.value;
      const newApi = new Apiquery();
      weatherResults = await newApi.getWeather(inputValue);
      domElements();
    } catch (error) {
      const errorM = document.querySelector('.error');
      errorM.textContent = 'The Location you Entered is incorrect';
    }
  });
};

const initialValue = async () => {
  const newApi = new Apiquery();
  weatherResults = await newApi.getWeather('Bamenda');
  domElements();
};


export {
  domElements, getDate, getLocation, initialValue,
};