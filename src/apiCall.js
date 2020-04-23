
class ApiQuery {
  // eslint-disable-next-line class-methods-use-this
  async getWeather(value = 'Bamenda') {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=a65bf913c63cc981687c4ea80470725d`, { mode: 'cors' });
    const weatherdata = await response.json();

    const [weather] = weatherdata.weather;
    const { main } = weather;
    // eslint-disable-next-line camelcase
    const { temp, feels_like, humidity } = weatherdata.main;
    const { speed } = weatherdata.wind;
    const { country } = weatherdata.sys;
    const { name } = weatherdata;

    return {
      main, temp, feels_like, humidity, speed, country, name,
    };
  }
}

export default ApiQuery;