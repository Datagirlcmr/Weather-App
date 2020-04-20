const getDate = () => {
  const currentDate = document.querySelector('#date');
  currentDate.textContent = new Date().toUTCString();
};

async function getWeather(value = 'Bamenda') {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=a65bf913c63cc981687c4ea80470725d`, { mode: 'cors' });
  const weatherdata = await response.json();

  const [weather] = weatherdata.weather;
  const { main } = weather;
  const { temp, feelLike, humidity } = weatherdata.main;
  const { speed } = weatherdata.wind;
  const { country } = weatherdata.sys;
  const { name } = weatherdata;

  const ctryName = document.querySelector('#ctry');
  ctryName.textContent = `${name},  ${country}`;

  const tempCelcius = (temp - 273).toFixed(2);
  const tempFahrenheit = ((tempCelcius * 1.8000) + 32).toFixed(2);

  const feelsCelcius = (feelLike - 273).toFixed(2);
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
  getHumid.textContent = `${humidity} %`;

  const getDesc = document.querySelector('#main-desc');
  getDesc.textContent = `Mostly ${main}`;

  const getWind = document.querySelector('#wind-deg');
  getWind.textContent = `${speed} mph`;
}

const getLocation = () => {
  const searchIcon = document.querySelector('.search-icon');
  const getInput = document.querySelector('#location');


  getInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchIcon.click();
    }
  });

  searchIcon.addEventListener('click', () => {
    const inputValue = getInput.value;
    getWeather(inputValue);
  });
};

export { getLocation, getWeather, getDate };