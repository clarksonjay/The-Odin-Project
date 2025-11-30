// What are Loops and arrays?
/* 
Loops are control structures that allow you to execute a block of code repeatedly. 

Arrays are data structures that can hold multiple values in a single variable.

Note: TDD (Test-Driven Development) is a software development approach where tests are written before the actual code. It helps ensure that the code meets the specified requirements and behaves as expected.

   WHY ARE LOOPS USEFUL?
Loops are all about doing the same thing over and over again. Often, the code will be slightly different each time round the loop, or the same code will run but with different variables.


   TYPES OF LOOPS
1. For Loop: Used when the number of iterations is known.
   Syntax:
   for (initialization; condition; increment) {
      // code to be executed
   }
2. While Loop: Used when the number of iterations is not known and depends on a condition.
   Syntax:
   while (condition) {
      // code to be executed
   }
3. Do...While Loop: Similar to the while loop, but guarantees that the code block is executed at least once.
   Syntax:
   do {
      // code to be executed
   } while (condition);

   Note: In modern JavaScript, there are also other loop constructs like for...of and for...in loops that are used to iterate over arrays and objects respectively. example:
   const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

   for (const cat of cats) {
      console.log(cat);
   }

   MAP() and FILTER()
   The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
   Example:
   const numbers = [1, 2, 3, 4, 5];
   const doubled = numbers.map(num => num * 2);
   console.log(doubled); // Output: [2, 4, 6, 8, 10]
   The filter() method creates a new array with all elements that pass the test implemented by the provided function.
   Example:
   const numbers = [1, 2, 3, 4, 5];
   const evenNumbers = numbers.filter(num => num % 2 === 0);
   console.log(evenNumbers); // Output: [2, 4]

*/

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

function random(number) {
   return Math.floor(Math.random() * number);
}

function draw() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.fillStyle = "rgb(255 0 0 / 50%)";
      ctx.arc(
         random(canvas.width),
         random(canvas.height),
         random(50),
         0,
         2 * Math.PI,
      );
      ctx.fill();
   }
}

btn.addEventListener("click", draw);

// ARRAYS