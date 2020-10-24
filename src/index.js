import _ from 'lodash';
import './style.css';


function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['lostbug','HomePage'], ' ');

  return element;
}
let element=component();
document.body.appendChild(element);

