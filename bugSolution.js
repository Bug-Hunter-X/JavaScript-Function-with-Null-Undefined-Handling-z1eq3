function foo(a, b) {
  // Check if a or b is null or undefined
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Or throw an error, depending on your requirements
  }

  // Type check for numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo('abc', 5)); // Output: NaN