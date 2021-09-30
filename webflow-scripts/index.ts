import { helloWorld } from './helloWorld';

helloWorld();
if (module.hot) {
  module.hot.accept('./helloWorld.ts', function () {
    console.log('Accepting the updated hello module!');
    helloWorld();
  });
}
