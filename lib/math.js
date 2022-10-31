/*
* title: math library
* description : utility library for math-related functions
* author: Abu Sayed
* date: 10-31-22
*/

const { random } = require("lodash");


// create scaffolding
const math = {};

// get random integer between two integer
// Inspired by:https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const allQuotes = function randomIntFromInterval(min, max) { // min and max included 
    let min = minimum;
    let max = maximum;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + min)
  }
  
  
module.exports = math;