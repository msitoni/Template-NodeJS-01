'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(n1, n2) {
  return n1 + n2;
};
var sub = function sub(n1, n2) {
  return n1 - n2;
};
var mult = function mult(n1, n2) {
  return n1 * n2;
};
var div = function div(n1, n2) {
  return n2 === 0 ? 'Não é possivel dividir por zero' : n1 / n2;
};

exports.sum = sum;
exports.sub = sub;
exports.mult = mult;
exports.div = div;