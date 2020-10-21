import _ from 'lodash';
import printMe from './print.js';
import { cube } from './math.js';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}
let element=component();
document.body.appendChild(element);

function treeShaking(){
    let element=document.createElement('pre');
    element.innerHTML=[
        'Hello webpack!',
        '5 cubed is equal to'+cube(5)
    ].join('\n\n');
    return element;
}
let treeShakingComponent=treeShaking();
document.body.appendChild(treeShakingComponent);

 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     document.body.removeChild(element);
     element=component();
     document.body.appendChild(element);
   })
}