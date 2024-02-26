# Simple Swap

Simple Swap is a minimalistic template engine for string interpolation in JavaScript, inspired by swap.js. It allows you to easily inject values into a string template.

## Features

- Simple and lightweight
- No external dependencies
- Easy to integrate and use in any JavaScript project

## Installation

Since this is a basic project example, you can integrate it directly by copying the `index.js` file into your project.


## Usage

Here is a quick example of how to use Simple Swap:

```javascript
const simpleSwap = require('./index');

const template = '{name} is {age} years old.';
const data = { name: 'Alex', age: '30' };
console.log(simpleSwap(template, data));
// Output: Alex is 30 years old.
```

## Running Tests

Ensure you have Node.js installed, then run the following command to execute the tests:

```bash
npm install
npm test
```
## NPM badge 


[![npm version](https://badge.fury.io/js/simple-swap-d.svg)](https://npmjs.com/package/simple-swap-d)

