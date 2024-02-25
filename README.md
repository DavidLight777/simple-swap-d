# Simple Swap

A simple template swap function for string interpolation.

## Usage

```javascript
const simpleSwap = require('./index');

const template = '{name} is {age} years old.';
const data = { name: 'Alex', age: '30' };
console.log(simpleSwap(template, data));
// Output: Alex is 30 years old.
