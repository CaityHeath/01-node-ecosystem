'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('../node_modules/faker');

let randomNum = faker.random.number();
let a = randomNum;
let b = randomNum;

describe('adder module', () => {
  
  it('can add 2 numbers', () => {
    let sum = arithmetic.add(a, b);
    expect(sum).toEqual(a + b);
  });
});

describe('subtracter module', () => {

  it('can subtract 2 ', () => {
    let difference = arithmetic.subtract(a, b);
    expect(difference).toEqual(a - b);
  });
});

describe('multiplier module', () => {
  
  it('can multiply 2 numbers', () => {
    let product = arithmetic.multiply(a,b);
    expect(product).toEqual(a * b);
  });
});

describe('can divide 2 numbers', () => {
 
  it('can divide 2 numbers', () => {
    let quotient = arithmetic.divide(a, b);
    expect(quotient).toEqual(a / b);
  });
});