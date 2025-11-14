/*                        Problem Solving in JavaScript
Problem solving in JavaScript involves a systematic approach to identifying, analyzing, and resolving issues or challenges that arise during the development of applications. Effective problem solving requires a combination of critical thinking, creativity, and technical skills. Here are some key steps and strategies for problem solving in JavaScript:

1. Understand the Problem:
   - Clearly define the problem you are trying to solve.
   - Break down the problem into smaller, manageable parts.

2. Plan a Solution:
   - Outline a step-by-step approach to solve the problem.
   - Consider different algorithms or data structures that may be appropriate.

3. Pseudocode:
   - Pseudocode is writing out the logic for your program in natural language instead of code.
   - Write pseudocode to outline the logic of your solution before coding.
   - This helps to clarify your thoughts and identify potential issues.

4. Divide and Conquer:
   - Break the problem into smaller sub-problems that can be solved independently.
   - Tackle each sub-problem one at a time.

5. Implement the Solution:
   - Write the actual JavaScript code based on your plan and pseudocode.
   - Test your code frequently to catch errors early.

*/

//                     Solving FizzBuzz Problem with Pseudocode
/*
1. Understanding the problem: Write a program that takes a user’s input and prints the numbers from one   to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

2. Planning a solution:
   - Get user input for a number.
   - Loop from 1 to the user input number.
   - For each number in the loop:
     - Check if the number is divisible by both 3 and 5.
       - If true, print "FizzBuzz".
     - Else if the number is divisible by 3.
       - If true, print "Fizz".
     - Else if the number is divisible by 5.
       - If true, print "Buzz".
     - Else, print the number itself.

3. Pseudocode:
   - START
   - PROMPT user for a number and STORE it in variable 'num'
    - FOR i FROM 1 TO num DO
        - IF i MOD 3 EQUALS 0 AND i MOD 5 EQUALS 0 THEN
            - PRINT "FizzBuzz"
        - ELSE IF i MOD 3 EQUALS 0 THEN
            - PRINT "Fizz"  
        - ELSE IF i MOD 5 EQUALS 0 THEN
            - PRINT "Buzz"
        - ELSE
            - PRINT i
    - END FOR
- END 
4. Dividing and Conquering: The problem is already broken down into manageable parts in the planning stage.

5. Implementing the solution: 
*/
const answer = parseInt(prompt("Enter a number:"));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
};