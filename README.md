# Unexpected String Concatenation in JavaScript Addition

This repository demonstrates a common JavaScript bug caused by type coercion in addition operations.  When adding a number and a string, JavaScript implicitly converts the number to a string and performs string concatenation instead of numerical addition. This can lead to unexpected results and hard-to-debug errors.

## Bug Description
The `foo` function in `bug.js` adds two arguments. If one is a number and the other a string, the result is unexpected string concatenation.

## Solution
The `bugSolution.js` file provides a corrected version that explicitly checks the types of arguments and handles them appropriately, either by converting to numbers or throwing an error.