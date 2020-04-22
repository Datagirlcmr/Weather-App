import './styles/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  getDate, getLocation, initialValue,
} from './domelts';
import changeBg from './interface';

// eslint-disable-next-line func-names
(function () {
  initialValue();
}());

getLocation();
getDate();
changeBg();