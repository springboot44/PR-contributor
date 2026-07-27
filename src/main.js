import './style.css';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>This is a website</h1>
    <button id="counter"></button>
  </div>
`;

setupCounter(document.querySelector('#counter'));
