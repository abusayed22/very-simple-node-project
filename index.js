/*
* Title =  Root of random app
* DescriPtion = simple random quote app && best practice trying
* author: Abu Sayed
* date: 10-31-22
*/ 

// dependences
const math = require('./lib/math');
const quotes = require('./lib/quotes');


// create scaffolding
const app = {};


// create timeSetup
app.confiq = {
    timeBetweenQuotes : 3000,
};



const rndInt = randomIntFromInterval(1, 6)