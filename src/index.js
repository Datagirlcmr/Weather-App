import './styles/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  getDate, getLocation, initialValue,
} from './domelts';

// const img = document.querySelector('.giphy');

// async function getWeather() {
//   const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=a9P79clVr5JTnTdj5MH3nIC0XTLg7fjj&s=weather', { mode: 'cors' });
//   const weatherData = await response.json();
//   img.src = weatherData.data.images.original.url;
// }

// getWeather();


// eslint-disable-next-line func-names
(function () {
  initialValue();
}());

getLocation();
getDate();
