const tempConversion = (temp) => {
  const celcius = (temp - 273).toFixed(2);
  const fahrenheight = ((celcius * 1.8000) + 32).toFixed(2);
  return (celcius, fahrenheight);
};

async function getWeather(value = 'Bamenda') {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=a65bf913c63cc981687c4ea80470725d`, { mode: 'cors' });
  const weatherdata = await response.json();

  const [weather] = weatherdata.weather;
  const { main } = weather;
  const { temp, feels_like, humidity } = weatherdata.main;
  tempConversion(temp);
  tempConversion(feels_like);
  const { speed } = weatherdata.wind;
  const { country } = weatherdata.sys;
  const { name } = weatherdata;

  return (main, temp, feels_like, humidity, speed, country, name);
}

async function getFahrenheight(value = 'Bamenda') {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=a65bf913c63cc981687c4ea80470725d`, { mode: 'cors' });
  const weatherdata = await response.json();

  const [weather] = weatherdata.weather;
  const { main } = weather;
  const { temp, feels_like, humidity } = weatherdata.main;
  tempConversion(temp);
  tempConversion(feels_like);
  const { speed } = weatherdata.wind;
  const { country } = weatherdata.sys;
  const { name } = weatherdata;

  return (main, temp, feels_like, humidity, speed, country, name);
}

export { getWeather, getFahrenheight };