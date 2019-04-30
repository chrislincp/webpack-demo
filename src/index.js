import './style.css'
import { cube } from './math'

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello Webpack',
    '5 cube is equal to' + cube(5)
  ].join('\n\n');

  return element;
}
let ele = component()
document.body.appendChild(ele);