'use strict';
const person = { name: 'Mango' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 18));
console.log(sayHi.bind(person, 18));