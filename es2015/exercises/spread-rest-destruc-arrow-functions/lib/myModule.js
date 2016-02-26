'use strict';
var myModule = {

  // it should receive infinite number of params and return the sum
  sum: function(...n) {
    return n.reduce( (prev, curr) => prev + curr, 0);
    // hint: use rest params
  },

  // it should receive an array of numbers and return the sum of all the values
  sumArray: function(arr=[]) {
    return this.sum(...arr);
  },

  // it should receive an array of array of integers and return the sum of all the values
  sumArrayOfArrays: function(...arr) {
    return arr.reduce( (prev, curr) => {
      console.log(prev, curr);
      return prev + this.sumArray(curr);
    }, 0);
  },

  // the method pluck is a variant of the "map" array method
  // but it assumes the array contains only objects and receives a second
  // parameter to extract
  // pluck([{ a:1, b:2}, {a: 'hi', b:'hello'}, {a: 3, b:4}], 'a') =====> [1,'hi',3]
  pluck: function(arr) {
    // hint1: use computed property names (enhanced object literals)
    // to destructure dynamic keys
    // hint2: if you want to destructure parameters of an arrow
    // function, you will need to use parenthesis. example:
    // var fn = ({someKey: variableName}) => variableName;
  }
};

module.exports = myModule;