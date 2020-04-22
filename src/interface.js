import Apiquery from './apiCall';
import getLocation from './domelts';

const changeBg = async () => {
  const getInput = document.querySelector('#location').value;
  const newApi = new Apiquery();
  const weatherDesc = await newApi.getWeather(getInput);
  const weatherMain = weatherDesc.main;
  getLocation();
  if (weatherMain === 'Thunderstorm') {
    document.body.style.backgroundColor = 'green';
  }
};

export default changeBg();