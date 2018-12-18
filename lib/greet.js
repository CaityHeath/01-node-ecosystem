'use strict';

let greet = module.exports = {};

greet.hello = function(str){
  if(typeof str !== 'string'){ return null; }
  return `hello ${str}`;
};