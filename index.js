'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
const http = require('http');
require('dotenv').config();

console.log(greet.hello('JOHN'));
console.log(math.add(1,3)); // 4
console.log(math.subtract(1,3)); // -2

const requestHandler = (req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.write( 'hello world' );
  res.end();
};

const app = http.createServer(requestHandler);
app.listen(process.env.PORT, () => console.log('server up') );

