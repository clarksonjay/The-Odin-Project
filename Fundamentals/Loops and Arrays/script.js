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
/*
 An Array is an ordered collection of items (strings, numbers, or other things).
You can create an array using square brackets [] and separate the items with commas.
   Example:
   const fruits = ["apple", "banana", "cherry"];

   You can access array elements using their index (starting from 0).
   Example:
   console.log(fruits[0]); // Output: "apple"

   You can add elements to an array using push() method.
   Example:
   fruits.push("date");
   console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]

   You can remove the last element from an array using pop() method.
   Example:
   fruits.pop();
   console.log(fruits); // Output: ["apple", "banana", "cherry"]

   You can get the length of an array using length property.
   Example:
   console.log(fruits.length); // Output: 3

   You can also push an array into another array.
   Example:
   const vegetables = ["carrot", "broccoli"];
   const food = fruits.concat(vegetables);
   console.log(food); // Output: ["apple", "banana", "cherry", "carrot", "broccoli"]

   You can create anested array using the push method.
   Example:
   const nestedArray = [];
   nestedArray.push([1, 2, 3]);
   nestedArray.push([4, 5, 6]);
   console.log(nestedArray); // Output: [[1, 2, 3], [4, 5, 6]]

   We can access the elements of a nested array using multiple indices.
   Example:
   console.log(nestedArray[0][1]); // Output: 2

   We access the last element of an array using the length property minus one... or using the at() method with -1 as the argument.
   Example:
   console.log(fruits[fruits.length - 1]); // Output: "cherry"
   console.log(fruits.at(-1)); // Output: "cherry"

   Some Methods to manipulate arrays:
   - shift(): Removes the first element from an array and returns it.
   - unshift(element): Adds a new element to the beginning of an array.
   - splice(start, deleteCount, item1, item2, ...): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Example:
     const arr = ['a', 'b', 'c', 'd'];
     arr.splice(1, 2, 'x', 'y');
       console.log(arr); // Output: ['a', 'x', 'y', 'd']

   - slice(start, end): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). Example:
     const arr = ['a', 'b', 'c', 'd', 'e'];
       const newArr = arr.slice(1, 4);
         console.log(newArr); // Output: ['b', 'c', 'd']


   - indexOf(element): Returns the first index at which a given element can be found in the array, or -1 if it is not present. Example:
     const arr = ['a', 'b', 'c', 'd'];
       console.log(arr.indexOf('c')); // Output: 2


   - includes(element): Determines whether an array includes a certain element, returning true or false as appropriate. Example:
     const arr = ['a', 'b', 'c', 'd'];
       console.log(arr.includes('b')); // Output: true

   - pop(): Removes the last element from an array and returns that element. e.t.c. Example:
     const arr = ['a', 'b', 'c', 'd'];
       const lastElement = arr.pop();
         console.log(lastElement); // Output: 'd'
         console.log(arr); // Output: ['a', 'b', 'c']

   -push(): Adds one or more elements to the end of an array and returns the new length of the array. Example:
     const arr = ['a', 'b', 'c'];
       const newLength = arr.push('d', 'e');
         console.log(newLength); // Output: 5
         console.log(arr); // Output: ['a', 'b', 'c', 'd', 'e']
   
   - The map() mehtod creates a new array populated with the results of calling a provided function on every element in the calling array.
      Example:
         const numbers = [1, 2, 3, 4, 5];
         const doubled = numbers.map(num => num * 2);
         console.log(doubled); // Output: [2, 4, 6, 8, 10]

   - The filter() method creates a new array with all elements that pass the test implemented by the provided function.
      Example:
         const numbers = [1, 2, 3, 4, 5];
         const evenNumbers = numbers.filter(num => num % 2 === 0);
         console.log(evenNumbers); // Output: [2, 4]

   - reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
      Example:
         const numbers = [1, 2, 3, 4];
         const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
         console.log(sum); // Output: 10
     In other words, reduce() reduces the array to a single value by applying the provided function to each element in the array, accumulating the result.



*/

function sumOfTripledEvens(array) {
   return array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr);
}
console.log(sumOfTripledEvens([1, 2, 3, 4, 5, 6])); // Output: 36 (2*3 + 4*3 + 6*3 = 6 + 12 + 18 = 36)

/* TDD(Test Driven Development)
 This refers to the practice of writing automated tests that describe how your code should work before you actually write the code. For example, if you want to write a function that adds a couple of numbers, you would first write a test that uses the function and supplies the expected output.

*/
// Example of TDD
// Step 1: Write the test
function testAdd() {
   const result = add(2, 3);
   if (result !== 5) {
      console.error(`Test failed: expected 5 but got ${result}`);
   } else {
      console.log("Test passed!");
   }
}
testAdd();
// Step 2: Write the function to make the test pass
function add(a, b) {
   return a + b;
}
// Step 3: Run the test again
testAdd();
// If the test passes, you can be confident that your add function works as expected. If it fails, you would go back and modify the add function until the test passes.