import { inputHandler } from './inputHandler';

console.log('running ..');

document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    inputHandler();
  }
};
