/*    DOM MANIPULATION
The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage - a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document. Each node represents an element, attribute, or piece of text in the document. JavaScript can be used to manipulate the DOM, allowing developers to dynamically change the content, structure, and style of a webpage.
*/

/*<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>*/

/*
In the above example, the <div class="display"></div> is a “child” of <div id="container"></div> and a “sibling” to <div class="controls"></div>. Think of it like a family tree. <div id="container"></div> is a parent, with its children on the next level, each on their own “branch”.

What is a node?
A node is any single point in the DOM tree. It can represent an element (like a <div> or <p>), an attribute (like class or id), or even a piece of text within an element. Each node has properties and methods that allow you to interact with it using JavaScript.

For example, consider the following HTML snippet:
<p id="greeting" class="welcome-text">Hello, World!</p>
Here, the <p> element is a node, and it has attributes (id and class) as well as text content ("Hello, World!"). You can use JavaScript to access and manipulate this node.

Types of Important nodes:
1. Element Nodes: Represent HTML elements (e.g., <div>, <p>, <a>).
2. Text Nodes: Represent the text content within an element.
3. Attribute Nodes: Represent the attributes of an element (e.g., id, class).
4. Comment Nodes: Represent comments in the HTML code (e.g., <!-- This is a comment -->).
5. Document Node: The root node representing the entire document.


  DOM Methods
  1. Query selectors:
     - document.getElementById('id'): Selects an element by its ID.
     - document.getElementsByClassName('class'): Selects elements by their class name.
     - document.getElementsByTagName('tag'): Selects elements by their tag name.
     - document.querySelector('selector'): Selects the first element that matches a CSS selector.
     - document.querySelectorAll('selector'): Selects all elements that match a CSS selector.
  2. Element creation:
      - document.createElement('tag'): Creates a new element of the specified tag.
      - document.createTextNode('text'): Creates a new text node with the specified text.
  3. Appending and removing elements:
      - parentNode.appendChild(childNode): Appends a child node to a parent node.
      - parentNode.removeChild(childNode): Removes a child node from a parent node.
  4. Altering Elements:
      - element.setAttribute('attribute', 'value'): Sets an attribute on an element.
      - element.getAttribute('attribute'): Gets the value of an attribute on an element.
      - element.classList.add('class'): Adds a class to an element.
      - element.classList.remove('class'): Removes a class from an element.
      - element.classList.toggle('class'): Toggles a class on an element.
  5. Adding inline style: 
      - element.style.property = 'value': Sets an inline style property on an element.
  Example:
      div.style.backgroundColor = 'blue'; // Sets the background color of the div to blue
      div.style.cssText = 'color: white; font-size: 20px;'; // Sets multiple CSS properties using cssText
      div.setAttribute('style', 'color: white; font-size: 20px;'); // Sets multiple CSS properties using setAttribute
  6. Editing Attributes and Content:
      - element.innerHTML = 'new content': Sets the HTML content inside an element.
      - element.textContent = 'new text': Sets the text content inside an element.
      - element.innerText = 'new text': Sets the visible text content inside an element, considering CSS styles.
      - element.setAttribute('attribute', 'value'): Sets an attribute on an element.
      - element.getAttribute('attribute'): Gets the value of an attribute on an element.
      - element.removeAttribute('attribute'): Removes an attribute from an element.
      Example:
          div.innerHTML = '<p>Hello, World!</p>'; // Sets the HTML content of the div
          div.textContent = 'Hello, World!'; // Sets the text content of the div
          div.setAttribute('data-info', 'sample data'); // Sets a custom data attribute on the div
          let info = div.getAttribute('data-info'); // Gets the value of the custom data attribute
          div.removeAttribute('data-info'); // Removes the custom data attribute
*/

// EXERCISE
const container = document.getElementById('container');

// Create new elements
const paragraph = document.createElement('p');
paragraph.style.cssText = 'color: red;';
paragraph.textContent = "Hey I'm red"

const heading3 = document.createElement('h3');
heading3.style.cssText = 'color: blue;';
heading3.textContent = "I'm a blue h3!";

const div = document.createElement('div');
div.setAttribute('style', 'border: 2px solid black; background-color: pink;');

const heading1 = document.createElement('h1');
heading1.textContent = "I'm in a div";

const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO!";
// Append elements to the div
div.appendChild(heading1);
div.appendChild(paragraph2);

// Append elements to the container
container.appendChild(paragraph);
container.appendChild(heading3);
container.appendChild(div);

/* EVENTS 
Events are actions that occur on your webpage, such as mouse-clicks or key-presses. JavaScript can be used to listen for these events and respond to them, allowing for interactive web experiences.

There are three main ways to handle events in JavaScript:
1. You can specify attributes directly on your HTML elements (not recommended for larger projects). Example:
<button onclick="alert('Button clicked!')">Click Me</button>
2. Youc an set properties in the form of on<eventType>, such as onclick, onmouseover, etc. Example:
const button = document.getElementById('myButton');
button.onclick = function() {
  alert('Button clicked!');
}
3. You can attach event listeners to the DOM nodes in your JavaScript. Example:
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button clicked!');
});
*/

const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World!");
// btn.setAttribute('style', 'cursor: pointer; background-color: lightgray; padding: 10px; border: none; border-radius: 5px;');

// btn.addEventListener('click', () => {
//   alert("Hello World!");
// });

btn.addEventListener("click", function (e) {
  console.log(e);
});

/*When we pass in function (e) {...} as an argument to addEventListener, we call this a callback. A callback is simply a function that is passed into another function as an argument. */

btn.addEventListener("click", function (e) {
  console.log(e.target);
});
// e.target references the element that triggered the event - in this case, the button that was clicked.

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
// This changes the background color of the button to blue when clicked.

/* ATTACHING LISTENERS TO GROUPS OF NODES
You can also attach event listeners to multiple elements at once by selecting a group of nodes and iterating over them. This is useful for adding the same behavior to multiple elements without having to write repetitive code.
*/