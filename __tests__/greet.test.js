
const greet = require('../lib/greet.js');
const faker = require('../node_modules/faker');


let randomName = faker.name.firstName();
let str = randomName; 

describe('greeting module', () => {

  it('concatenates input to hello to form a greeting', () => {
    expect(greet.hello(str)).toEqual(`hello ${str}`);
  });

  it('concatenates world to hello', () => { 
    expect(greet.hello(`world`)).toEqual(`hello world`);
  }); 
});