import './styles/card.scss';
import template from './components/card.html';

window.onload = function () {
  console.log('Hello world!!!');
  console.info('Its my first webpack :)');
  const hello = () => console.log('hell0o');
  hello();

  document.getElementById('app').innerHTML = template;
};
