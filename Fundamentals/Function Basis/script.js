/*                 Function Basis
A function is a reusable block of code that performs a specific task. Functions help to organize code, make it more readable, and allow for code reuse. In JavaScript, functions can be defined in several ways, including function declarations, function expressions, and arrow functions. Functions can take parameters (inputs) and can return a value (output). They can also be assigned to variables, passed as arguments to other functions, and returned from other functions, making them first-class citizens in JavaScript.
*/

/*                    Function Declaration
A function declaration defines a named function using the "function" keyword, followed by the function name, parentheses for parameters, and curly braces for the function body. Function declarations are hoisted, meaning they can be called before they are defined in the code.
*/
// Example of a function declaration
function greet(name) {
  return "Hello, " + name + "!";
};

console.log(greet("Jay")); // Output: Hello, Jay!

/*                        Function Expression 
A function expression defines a function as part of a larger expression, typically by assigning it to a variable. Function expressions are not hoisted, so they cannot be called before they are defined.
*/
// Example of a function expression
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5

/*                        Arrow Function
An arrow function is a shorter syntax for writing function expressions, introduced in ES6. Arrow functions use the "=>" syntax and do not have their own "this" context, making them useful for certain scenarios, such as callbacks.
*/
// Example of an arrow function
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // Output: 20

// Note: Parameters are enclosed in parentheses (). If there is only one parameter, the parentheses can be omitted. If there are no parameters, empty parentheses are used.
//Note: Function arguments are the actual values we decide to pass to the function. example: greet("Jay") -> "Jay" is the argument.
//Note: Function parameters are the names listed in the function definition. example: function greet(name) -> "name" is the parameter.