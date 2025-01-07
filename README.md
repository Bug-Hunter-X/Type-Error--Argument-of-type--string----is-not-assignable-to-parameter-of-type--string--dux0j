# Type Error: Argument of type 'string[]' is not assignable to parameter of type 'string'

This example demonstrates a common TypeScript error: passing an array to a function that expects a string.  The code attempts to greet a user represented by an array of strings, which causes a type error because the `greeter` function is expecting a single string argument.

The solution shows how to modify the code to handle arrays of strings correctly, by either iterating through the array and greeting each element individually or changing the function signature to accept an array.