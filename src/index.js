import './styles/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  getDate, getLocation, initialValue,
} from './domelts';

// eslint-disable-next-line func-names
(function () {
  initialValue();
}());

getLocation();
getDate();
