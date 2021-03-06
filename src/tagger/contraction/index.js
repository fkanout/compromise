'use strict';
const irregulars = require('./01-irregulars');
const isWasHas = require('./02-isWasHas');
const easyOnes = require('./03-easyOnes');
const numberRange = require('./04-numberRange');

//find and pull-apart contractions
const interpret = function(ts) {
  //check irregulars
  ts = irregulars(ts);
  //guess-at ambiguous "'s" one
  ts = isWasHas(ts);
  //check easy ones
  ts = easyOnes(ts);
  //5-7
  ts = numberRange(ts);
  return ts;
};

module.exports = interpret;
