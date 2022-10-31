// Title: Quotes Library
// Description: Utility library getting all list of quotes
// Author: ABU SAYED
// Date: 10-30-22

// dependencies
const fs = require('fs');
const { dirname } = require('path');

// Module Scaffolding - object for quotes
const quotes = {};

// get all quotes from dirpath- quotes.txt
quotes.allQuotes = () => {
    // read the text fileContens
    const fileContens = fs.readFileSync(`${__dirname/quotes.txt}`,'utf8');

    // Turn the string into an array
    const arrayOfQuotes = fileContens.split(/\r?\n/);

    // return the arrayOfQuotes
    return arrayOfQuotes;

}

module.exports = quotes;

