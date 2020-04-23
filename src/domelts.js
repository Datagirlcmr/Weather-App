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

const initialValue = async () => {
  const newApi = new Apiquery();
  weatherResults = await newApi.getWeather('Bamenda');
  domElements();
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
  const errorM = document.querySelector('.error');
  searchIcon.addEventListener('click', async () => {
    setTimeout(async () => {
      try {
        const inputValue = getInput.value;
        const newApi = new Apiquery();
        weatherResults = await newApi.getWeather(inputValue);
        domElements();
        if (weatherResults.main === 'Rain') {
          document.body.style.backgroundImage = "url('5c61fd622b53642be5885c88b8019325.jpeg')";
        } else if (weatherResults.main === 'Thunderstorm') {
          document.body.style.backgroundImage = "url('ad616d95cf1667e56632b9985a9a9d35.jpeg')";
        } else if (weatherResults.main === 'Clouds') {
          document.body.style.backgroundImage = "url('2f73522a8306cf60bae5df4bc8d77f28.jpeg')";
        } else if (weatherResults.main === 'Clear') {
          document.body.style.backgroundImage = "url('4423a45de689733e377642e9c526ac6a.jpeg')";
        } else {
          document.body.style.backgroundImage = "url('0edfd485fe793ca1cfdc646b4d92fbf6.jpeg')";
        }
      } catch (error) {
        errorM.textContent = 'The Location you Entered is incorrect';
      }
    }, 1000);
    errorM.textContent = '';
  });
};

export {
  domElements, getDate, getLocation, initialValue,
};