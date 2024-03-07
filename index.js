// EXAMPLE 1 - Resolve a Promise after a Delay in JavaScript

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => {
  console.log('Promise resolved after 2 seconds');
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Resolve a Promise with a specific Value after a Delay

// function delay(ms, value) {
//   return new Promise(resolve =>
//     setTimeout(() => resolve(value), ms),
//   );
// }

// delay(2000, 'EXAMPLE VALUE').then(val => {
//   console.log('Promise resolved after 2 seconds: ', val);
// });

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using the `setTimeout` method to resolve a Promise after a Delay in Node.js

// import {setTimeout} from 'timers/promises';

// const result = await setTimeout(2000, 'EXAMPLE VALUE');

// console.log(result); // 👉️ EXAMPLE VALUE

// ------------------------------------------------------------------

// // EXAMPLE 4 - Resolving an existing Promise after a delay

// function delay(ms, value) {
//   return new Promise(resolve =>
//     setTimeout(() => resolve(value), ms),
//   );
// }

// const p = Promise.resolve('EXAMPLE VALUE');

// p.then(value => delay(2000, value)).then(value => {
//   console.log('The value is: ', value);
// });
