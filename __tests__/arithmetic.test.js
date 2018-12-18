'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('../node_modules/faker');

let randomNum = faker.random.number();
let a = randomNum;
let b = randomNum;

describe('adder module', () => {
  
  it('can add 2 numbers', () => {
    expect(arithmetic.add(a, b)).toEqual(a + b);
  });
});

describe('subtracter module', () => {

  it('can subtract 2 ', () => {
    expect(arithmetic.subtract(a, b)).toEqual(a - b);
  });
});

describe('multiplier module', () => {
  
  it('can multiply 2 numbers', () => {
    expect(arithmetic.multiply(a,b)).toEqual(a * b);
  });
});

describe('can divide 2 numbers', () => {
 
  it('can divide 2 numbers', () => {
    expect(arithmetic.divide(a, b)).toEqual(a / b);
  });
});