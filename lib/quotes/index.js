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
    const fileContens = fs.readFileSync(`${dirname/quotes.txt}`,'utf-8');
}

