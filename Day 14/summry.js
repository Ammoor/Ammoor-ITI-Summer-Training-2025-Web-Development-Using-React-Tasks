// Summary of Day 14 - JS DOM & JavaScript Basics

const presentationSummary = `

JavaScript Objects
- Objects store key-value pairs using curly braces {}
- Access & modify using dot or bracket notation
- Use 'delete' to remove properties

Arrays
- Arrays are a special type of object with numeric indices
- Use methods: push, pop, splice
- Use loops like forEach, map
- Indices start at 0; length gives the number of elements

DOM (Document Object Model)
- Tree-like structure of HTML
- Use methods like:
  - getElementById()
  - getElementsByClassName()
  - querySelector(), querySelectorAll()
- Modify content using:
  - innerHTML, innerText, textContent
- Create/update/remove elements:
  - createElement(), createTextNode()
  - setAttribute(), remove(), removeChild()

Node vs NodeList vs HTMLCollection
- Node: basic DOM unit (element, attribute, text)
- HTMLCollection: live, auto-updates
- NodeList: static snapshot (unless from childNodes)

ES6 Features
- let & const: block-scoped variables
- Template literals: use backticks and ${} for expressions
- Spread operator (...) for expanding arrays/objects
- Destructuring: extract values from arrays or objects

JS Loops
- for, while, do...while: control flow
- for...of: loop over values (arrays, strings)
- for...in: loop over object keys
- forEach: array iteration (no return)
- map: transforms array and returns new one
`;

console.log(presentationSummary);
