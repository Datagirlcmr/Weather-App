import './styles/style.css';

async function getWeather() {
    const response = await fetch ("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a65bf913c63cc981687c4ea80470725d", {mode: 'cors'})
    const weatherdata = await response.json();
    console.log (weatherdata);
}
   
getWeather();