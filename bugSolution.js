function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

console.log(foo(5, 5)); // Output: 10
console.log(foo(5, "5")); // throws error
//This solution explicitly checks if both arguments are numbers using typeof. If not, it throws an error.  This prevents the unexpected concatenation.