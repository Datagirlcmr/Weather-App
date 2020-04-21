import './styles/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { domElements, getDate, getLocation, initialValue } from './domelts';


(function (){
    console.log ('success');
    initialValue();

})();

getLocation();
domElements();
getDate();
