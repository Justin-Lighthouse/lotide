const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const letterPosition = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  flatten,
  countOnly,
  letterPosition,
  findKeyByValue,
  eqObjects,
  eqArrays
};