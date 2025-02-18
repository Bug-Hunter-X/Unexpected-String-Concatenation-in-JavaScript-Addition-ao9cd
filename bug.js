function foo(a, b) {
  return a + b;
}

console.log(foo(5, "5")); // Output: "55"

//The bug is that the function foo does not check the type of its arguments before performing the addition operation. This can lead to unexpected results if the arguments are not of the same type. For example, if one argument is a number and the other is a string, the + operator will perform string concatenation instead of numerical addition.
//Solution: The solution is to check the type of the arguments before performing the addition operation. If the arguments are not of the same type, the function should either convert them to the same type or throw an error.