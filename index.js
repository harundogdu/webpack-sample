import _ from 'lodash';
import './src/style.css';
import './src/style.scss';

const root = document.querySelector('#root');

function renderElement() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.classList.add('hello');
  root.appendChild(element);
}

function renderHeader() {
  const element = document.createElement('header');
  element.innerHTML = '<p class="hello">Selamlar</p>';
  root.appendChild(element);
}

function renderRootElement() {
  renderElement();
  renderHeader();
}

renderRootElement();
