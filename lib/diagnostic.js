// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs'); // jshint ignore: line


const sumLines = (filename, callback) => {
  let file = filename;
  fs.readFile(file, { encoding: 'utf8' }, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }

    let lineArray = file.split('\n');

    lineArray.forEach((line) => {
      if ("") {
        console.error(error);
        return;
      }

    });
  /* your response here */
  /* text file, one num per line */
  // add all numbers
  // send result to callback
  // skip blank lines
  // if not a number throw error
  callback();
};

module.exports = {
  sumLines,
};
