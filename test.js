const assert = require('assert');
const simpleSwap = require('./index');

// Тест 1: Проверяем базовую функциональность интерполяции
const template1 = '{name} is {age} years old.';
const data1 = { name: 'Alex', age: '30' };
const expected1 = 'Alex is 30 years old.';
assert.strictEqual(simpleSwap(template1, data1), expected1, 'Basic interpolation fails');

// Тест 2: Проверяем поведение с несуществующими ключами
const template2 = '{name} lives in {city}.';
const data2 = { name: 'Sam' };
const expected2 = '{name} lives in {city}.';
assert.strictEqual(simpleSwap(template2, data2), expected2, 'Non-existing keys handling fails');

console.log('All tests passed!');
