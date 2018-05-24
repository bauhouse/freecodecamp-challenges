
// =================================================================================
// Functional JS with ES6 — Recursive Patterns
// by Casey Morris
// =================================================================================
// Fibonacci
// ---------------------------------------------------------------------------------
// Returns the Fibonacci number at the given place.
// https://medium.com/dailyjs/functional-js-with-es6-recursive-patterns-b7d0813ef9e3
// ---------------------------------------------------------------------------------

const fib = x => x > 2 ? fib(x - 1) + fib(x - 2) : 1;

console.log(fib(15));
