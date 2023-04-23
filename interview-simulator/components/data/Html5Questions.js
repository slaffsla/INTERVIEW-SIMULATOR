const Html5Questions = [
  {
    id: "1",
    question: "What symbol is used for equality in JavaScript?",
    answers: ["==", "===", "=", "!="],
    correctIndex: 1,
  },

  {
    id: "2",
    question: "What is the syntax for creating an object in JavaScript?",
    answers: ["let obj = []", "let obj = {}", "obj = []", "obj = {}"],
    correctIndex: 1,
  },

  {
    id: "3",
    question: "Which of these is not a way to create a variable in JavaScript?",
    answers: ["var", "const", "let", "define"],
    correctIndex: 3,
  },

  {
    id: "4",
    question:
      "What type of loop is best suited to iterating over an array in JavaScript?",
    answers: ["for loop", "while loop", "do-while loop", "forEach loop"],
    correctIndex: 3,
  },

  {
    id: "5",
    question:
      "What is the correct syntax for creating a function in JavaScript?",
    answers: [
      "function = myFunction()",
      "let myFunction = function()",
      "function myFunction()",
      "let = function myFunction()",
    ],
    correctIndex: 2,
  },

  {
    id: "6",
    question: "What is the keyword used to issue an error in JavaScript?",
    answers: ["error", "throw", "fail", "exception"],
    correctIndex: 1,
  },

  {
    id: "7",
    question: "What's the difference between let and var?",
    answers: [
      "let is block-scoped, var is function-scoped",
      "var is block-scoped, let is function-scoped",
      "let and var are both function-scoped",
      "let and var are both block-scoped",
    ],
    correctIndex: 0,
  },

  {
    id: "8",
    question: "What is const keyword used for?",
    answers: [
      "Define block-scoped variables",
      "Define global variables",
      "Define constant variables",
      "Define function-scoped variables",
    ],
    correctIndex: 2,
  },

  {
    id: "9",
    question: "How can you destructure an object in JavaScript?",
    answers: [
      "Using square brackets",
      "Using curly braces",
      "Using both square and curly braces",
      "Destructuring is not possible for objects",
    ],
    correctIndex: 1,
  },

  {
    id: "10",
    question: "How to destructure an array?",
    answers: [
      "Using destructuring assignment",
      "Using spread operator",
      "Using rest operator",
      "None of the above",
    ],
    correctIndex: 0,
  },

  {
    id: "11",
    question: "How to declare a class?",
    answers: [
      "Using class keyword",
      "Using function constructor",
      "Using object literal notation",
      "None of the above",
    ],
    correctIndex: 0,
  },

  {
    id: "12",
    question: "How do you declare a JavaScript arrow function?",
    answers: [
      "function (params) => { code }",
      "function params => { code }",
      "(params) => { code }",
      "(params) { code }",
    ],
    correctIndex: 2,
  },

  {
    id: "13",
    question: "What is the result of the following expression: Boolean(NaN)?",
    answers: ["NaN", "undefined", "true", "false"],
    correctIndex: 3,
  },

  {
    id: "14",
    question:
      "What will be the output of the following code? let num = 0.1 + 0.2;console.log(num)",
    answers: ["0.3", "0.30000000000000004", "0.5", "1"],
    correctIndex: 1,
  },

  {
    id: "15",
    question:
      "What method is not a working way to check if x is an array in JavaScript?",
    answers: [
      "Array.isArray(x)",
      "x instanceof Array",
      "typeof x === 'array'",
      "Object.prototype.toString.call(x) === '[object Array]'",
    ],
    correctIndex: 2,
  },

  {
    id: "16",
    question:
      "What is the value of a after the following code runs?; let a = (1, 2, 3)",
    answers: ["1", "2", "3", "undefined"],
    correctIndex: 2,
  },

  {
    id: "17",
    question: "What is the use of the 'this' keyword in JavaScript?",
    answers: [
      "To refer to a function's arguments object",
      "To refer to the object that a function is a property of",
      "To refer to the global object",
      "To refer to a newly created object",
    ],
    correctIndex: 1,
  },

  {
    id: "18",
    question: "What is a closure?",
    answers: [
      "A function that has access to variables in its parent scope",
      "A function that can only be invoked once",
      "A function that can only be invoked by its parent function",
      "None of the above",
    ],
    correctIndex: 0,
  },

  {
    id: "19",
    question: "What is the purpose of the let keyword in JavaScript?",
    answers: [
      "To declare a variable with global scope",
      "To declare a variable with block-level scope",
      "To declare a variable that can only be reassigned",
      "To declare a constant variable",
    ],
    correctIndex: 1,
  },

  {
    id: "20",
    question:
      "What is the difference between null and undefined in JavaScript?",
    answers: [
      "null is a value that represents no value, while undefined means a variable has been declared but has not been assigned a value",
      "undefined is a value that represents no value, while null means a variable has been declared but has not been assigned a value",
      "null and undefined are the same thing",
      "null is an object, while undefined is a primitive value",
    ],
    correctIndex: 0,
  },

  {
    id: "21",
    question: "Which of the following is not a feature introduced in ES6?",
    answers: [
      "Template literals",
      "Rest parameters",
      "Spread operator",
      "TypeScript",
    ],
    correctIndex: 3,
  },

  {
    id: "22",
    question: "Which of the following is not a feature of arrow functions?",
    answers: [
      "Lexical this",
      "Shorter syntax",
      "Dynamic this",
      "Can’t be used as constructors",
    ],
    correctIndex: 2,
  },

  {
    id: "23",
    question: "What is the purpose of the ... operator in JavaScript?",
    answers: [
      "To destructure arrays",
      "To merge arrays",
      "To spread arrays",
      "To concatenate arrays",
    ],
    correctIndex: 2,
  },

  {
    id: "24",
    question:
      "What is the output of this code: let x = [1,2,3]; console.log(...x);",
    answers: ["undefined", "Error", "1,2,3", "[1,2,3]"],
    correctIndex: 2,
  },

  {
    id: "25",
    question:
      "What is the output of this code: let obj = { name: 'John', age: 30 }; let { name, age} = obj; console.log(name, age);",
    answers: ["undefined, undefined", "Error", "John, 30", "name, age"],
    correctIndex: 2,
  },

  {
    id: "26",
    question:
      "How to check if an object has a specific property in JavaScript?",
    answers: [
      "object.hasOwnProperty()",
      "object.propertyIsEnumerable()",
      "Object.keys()",
      "property in object",
    ],
    correctIndex: 0,
  },

  {
    id: "27",
    question: "How to make a deep copy of an object in JavaScript?",
    answers: [
      "JSON.parse(JSON.stringify())",
      "Object.assign({}, object)",
      "Object.create(object)",
      "Spread operator",
    ],
    correctIndex: 0,
  },

  {
    id: "28",
    question: "What is hoisting in JavaScript?",
    answers: [
      "Variable and function declarations moved to top",
      "Variable declarations moved to top, function declarations remain in place",
      "A way to move elements in the DOM",
      "A method for handling errors",
      "None of the above",
    ],
    correctIndex: 0,
  },

  {
    id: "29",
    question:
      "Which of the following is not a valid way to declare a variable in JS?",
    answers: ["var", "let", "const", "define"],
    correctIndex: 3,
  },

  {
    id: "30",
    question: "What does the spread operator do in JavaScript?",
    answers: [
      "It creates a new array by spreading all elements of an existing array into a new array",
      "It concatenates two arrays into a single array",
      "It spreads the properties of an object into a new object",
      "It creates a shallow copy of an array or an object",
    ],
    correctIndex: 0,
  },

  {
    id: "31",
    question:
      "What is the output of the following code? console.log(typeof(null))",
    answers: ["null", "object", "undefined", "string"],
    correctIndex: 1,
  },

  {
    id: "32",
    question:
      "What is the output of this code: function* generator() { yield 1; yield 2; yield 3; } let gen = generator(); console.log(gen.next().value);",
    answers: ["1", "2", "3", "undefined"],
    correctIndex: 0,
  },

  {
    id: "33",
    question:
      "What is the output of this code: let x = 0.1 + 0.11; console.log(x === 0.21);",
    answers: ["true", "false", "0.21", "undefined"],
    correctIndex: 1,
  },

  {
    id: "34",
    question: "How to declare private properties in JavaScript class?",
    answers: [
      "_property",
      "private property",
      "property with #",
      "property with ~",
    ],
    correctIndex: 2,
  },

  {
    id: "35",
    question:
      "What is the output of this code? (() => { let x = 5; return (() => x)(); })();",
    answers: ["5", "undefined", "error", "null"],
    correctIndex: 0,
  },

  {
    id: "36",
    question:
      "Which of the following is not a primitive data type in JavaScript?",
    answers: ["Number", "String", "Boolean", "Object"],
    correctIndex: 3,
  },

  {
    id: "37",
    question: "What's the result of `{} + []`?",
    answers: ["0", "[object Object]", "{}", "[]"],
    correctIndex: 0,
  },
  {
    id: "38",
    question: "What is the difference between == and === in JavaScript?",
    answers: [
      "=== performs type coercion while == does not",
      "== performs type coercion while === does not",
      "Both == and === perform type coercion",
      "Neither == nor === perform type coercion",
    ],
    correctIndex: 1,
  },

  {
    id: "39",
    question: "What is the difference between == and === in JavaScript?",
    answers: [
      "== compares values and type coercion, === compares values without type coercion",
      "== compares values without type coercion, === compares values and type coercion",
      "Both == and === perform type coercion",
      "Both == and === do not perform type coercion",
    ],
    correctIndex: 0,
  },

  {
    id: "40",
    question:
      "What is the output of the following code: console.log(typeof undefined == typeof null)",
    answers: ["true", "false", "undefined", "null"],
    correctIndex: 0,
  },

  {
    id: "41",
    question:
      "What is the difference between null and undefined in JavaScript?",
    answers: [
      "They are the same, both represent non-values",
      "undefined is explicitly set to a non-value, null means a value has not been assigned",
      "null is explicitly set to a non-value, undefined means a value has not been assigned",
      "They are different, one represents an error and one represents a non-value",
    ],
    correctIndex: 2,
  },

  {
    id: "42",
    question: "What is the purpose of the 'new' operator in JavaScript?",
    answers: [
      "The 'new' operator creates a new array",
      "The 'new' operator creates a new instance of a primitive type",
      "The 'new' operator creates a new instance of an object, using a constructor function",
      "The 'new' operator creates a new function",
    ],
    correctIndex: 2,
  },
  {
    id: "43",
    question:
      "What is the difference between the let and const keywords in JavaScript?",
    answers: [
      "Let is block-scoped and const is function-scoped",
      "Const is block-scoped and let is function-scoped",
      "Both let and const are block-scoped",
      "Variables declared with const have to be initialized when declared and can't be reassigned",
    ],
    correctIndex: 3,
  },
  {
    id: "44",
    question:
      "What would be the final value of arr? const arr = [0, 1, 2]; arr[3] = 3",
    answers: [
      "[0, 1, 2]",
      "[0, 1, 2, 3]",
      "An error will be thrown",
      "undefined",
    ],
    correctIndex: 1,
  },

  {
    id: "45",
    question: "Which of the following is not a feature of ECMAScript 6 (ES6)?",
    answers: [
      "Destructuring assignment",
      "Map and Set data structures",
      "Block-scoped variables with let and const",
      "Private properties in classes",
    ],
    correctIndex: 3,
  },

  {
    id: "46",
    question: "What is the purpose of the for...of loop in JavaScript?",
    answers: [
      "To iterate over the values in an array",
      "To iterate over the properties in an object",
      "To execute a block of code for a specific number of times",
      "To execute a block of code until a specified condition is met",
    ],
    correctIndex: 0,
  },

  {
    id: "47",
    question:
      "What is the difference between the spread operator (...) and the rest operator (...) in JavaScript?",
    answers: [
      "The rest operator expands an array, while the spread operator collects multiple values into an array",
      "The spread operator expands an array, while the rest operator collects multiple values into an array",
      "Both  do the same thing",
      "They are completely different and have no relationship",
    ],
    correctIndex: 1,
  },

  {
    id: "48",
    question:
      "Which of the following is not a way to create a new object in JavaScript?",
    answers: [
      "Object literal",
      "Object constructor",
      "Class constructor",
      "Object.create() method",
    ],
    correctIndex: 2,
  },

  {
    id: "49",
    question:
      "What is the result of executing this code? console.log(typeof typeof 1);",
    answers: ["number", "string", "undefined", "null"],
    correctIndex: 1,
  },

  {
    id: "50",
    question:
      "Which of the following is not a valid way to declare a variable in JavaScript?",
    answers: ["var", "let", "const", "define"],
    correctIndex: 3,
  },

  {
    id: "51",
    question:
      "What is the purpose of the Array.prototype.reduce() method in JavaScript?",
    answers: [
      "To remove elements from an array",
      "To iterate over an array and produce a single value as output",
      "To sort an array in ascending or descending order",
      "To reduce an array from the end by a certain number",
    ],
    correctIndex: 1,
  },

  {
    id: "52",
    question:
      "What is the correct way to convert a string to a number in JavaScript?",
    answers: [
      "Number(string)",
      "string.toNumber()",
      "parseInt(string)",
      "convertToNumber(string)",
    ],
    correctIndex: 2,
  },

  {
    id: "53",
    question:
      "What method can you use to add an element to the end of an array in JavaScript?",
    answers: ["push()", "pop()", "unshift()", "shift()"],
    correctIndex: 0,
  },

  {
    id: "54",
    question: "What is the syntax for a ternary operator in JavaScript?",
    answers: [
      "if (condition) { statement1 } else { statement2 }",
      "condition ? statement1 : statement2",
      "switch (condition) { case statement1 : break; case statement2 : break; }",
      "while (condition) { statement1; statement2; }",
    ],
    correctIndex: 1,
  },

  {
    id: "55",
    question: "Which of these is not a falsy value in JavaScript?",
    answers: ['"" (empty string)', "null", "NaN", "None of the above"],
    correctIndex: 3,
  },

  {
    id: "56",
    question: "What is the correct syntax to use a while loop in JavaScript?",
    answers: [
      "do { statements; } while (condition);",
      "while (condition) { statements; }",
      "while (statements) { conditions }",
      "None are correct",
    ],
    correctIndex: 1,
  },

  {
    id: "57",
    question:
      "How can you know for sure if a variable is an object in JavaScript?",
    answers: [
      'typeof variable === "object"',
      "variable instanceof Object",
      "Array.isArray(variable)",
      'Object.prototype.toString.call(variable) === "[object Object]"',
    ],
    correctIndex: 3,
  },

  {
    id: "58",
    question:
      "What is the correct way to check if an array is empty in JavaScript?",
    answers: [
      "array.length === 0",
      "array === []",
      "array.size === 0",
      "array.empty()",
    ],
    correctIndex: 0,
  },

  {
    id: "59",
    question:
      "What is the correct way to round a number to two decimal places in JavaScript?",
    answers: [
      "round(number, 2)",
      "number.round(2)",
      "number.toFixed(2)",
      "toFixed(number, 2)",
    ],
    correctIndex: 2,
  },

  {
    id: "60",
    question: 'What is the purpose of "use strict" in JavaScript?',
    answers: [
      "To enforce strict typing in JavaScript",
      "To make JavaScript code run faster",
      "To enforce more strict coding rules and throw errors for common mistakes",
      "To make JavaScript code more compatible with other programming languages",
    ],
    correctIndex: 2,
  },

  {
    id: "61",
    question:
      "What is the value of `x` after the following code execution? var x = '5'; var y = +x;",
    options: ["5", "NaN", "undefined", "null"],
    correctIndex: 0,
  },

  {
    id: "62",
    question: "What's the result of (1,5,2) in JavaScript?",
    answers: ["An array", "2", "1", "undefined"],
    correctIndex: 1,
  },

  {
    id: "63",
    question:
      "How can you add an element to the end of an array in JavaScript?",
    answers: [
      "`arr.push(element)`",
      "`arr[arr.length] = element`",
      "`arr.append(element)`",
      "`arr[-1] = element`",
    ],
    correctIndex: 0,
  },

  {
    id: "64",
    question:
      "What is the difference between call() and apply() methods in JavaScript?",
    options: [
      "Call and apply are the same thing",
      "Call method passes arguments separately, apply takes an array",
      "Apply can only be used with objects, call can be used with primitives",
      "Apply can only be used with functions, call can be used with objects",
    ],
    correctIndex: 1,
  },

  {
    id: "65",
    question: "What is the use of bind() method in JavaScript?",
    options: [
      "Bind is used to link two functions together",
      "Bind is used to define prototype properties",
      "Bind is used to assign new values to function arguments",
      "Bind is used to set the value of 'this' permanently",
    ],
    correctIndex: 3,
  },

  {
    id: "66",
    question: "What's the result of `typeof null`?",
    answers: ["Object", "null", "Undefined", "String"],
    correctIndex: 0,
  },

  {
    id: "67",
    question: "What's the result of `Boolean(0)`?",
    answers: ["0", "null", "False", "True"],
    correctIndex: 2,
  },

  {
    id: "68",
    question: "What's the result of `[] == false`?",
    answers: ["True", "False", "undefined", "NaN"],
    correctIndex: 0,
  },

  {
    id: "69",
    question: "What's `undefined` in JS?",
    answers: ["value", "var w/o val", "null val", "non-existent"],
    correctIndex: 1,
  },

  {
    id: "70",
    question:
      "What's the value of arr after `const arr = [1,2,3,4]; arr[100] = undefined`?",
    answers: [
      "undefined",
      "[ 1, 2, 3, 4, undefined ]",
      "[ 1, 2, 3, 4, <96 empty items>, undefined ]",
      "An Error will be thrown",
    ],
    correctIndex: 2,
  },

  {
    id: "71",
    question: "What's the output of `typeof NaN`?",
    answers: ["string", "NaN", "object", "number"],
    correctIndex: 3,
  },

  {
    id: "72",
    question: "What's the output of `[] + []`?",
    answers: ["null", "''", "[]", "NaN"],
    correctIndex: 1,
  },

  {
    id: "73",
    question:
      "What is the output of the following code snippet? let x = 5; console.log(typeof x++);",
    answers: ["string", "undefined", "number", "syntax error"],
    correctIndex: 2,
  },

  {
    id: "74",
    question: "What is the output of this code? console.log(typeof typeof 1);",
    answers: ["number", "undefined", "TypeError", "string"],
    correctIndex: 3,
  },

  {
    id: "75",
    question:
      "What is the value of x after this code runs? let x = '5'; x = +x;",
    answers: ["5", '"5"', "NaN", "0"],
    correctIndex: 0,
  },

  {
    id: "76",
    question: "What is the difference between var, let, and const?",
    answers: [
      "let and const are hoisted, var is not",
      "var can be reassigned, let and const cannot",
      "var is function scoped, let and const are block scoped",
      "All of the above",
    ],
    correctIndex: 2,
  },

  {
    id: "77",
    question: "What is the difference between .map() and .forEach()?",
    answers: [
      ".map() modifies the original array and .forEach() does not",
      ".map() can only be used on arrays and .forEach() can be used on any iterable",
      ".map() is used for mapping values and .forEach() is used for iterating",
      "map() returns a new array, forEach() modifies original one",
    ],
    correctIndex: 3,
  },

  {
    id: "78",
    question:
      "What is the difference between synchronous and asynchronous code?",
    answers: [
      "Synchronous code is executed simultaneously and asynchronous code is not",
      "Synchronous code is executed by the browser and asynchronous code is executed by the server",
      "Synchronous code is executed faster than asynchronous code",
      "Synchronous code is executed in the order it is written and asynchronous code is not",
    ],
    correctIndex: 3,
  },

  {
    id: "79",
    question: "What is a pure function?",
    answers: [
      "A function that does not modify any variables outside of its scope",
      "A function that always returns the same output for the same input",
      "A function that does not call any other functions",
      "None of the above",
    ],
    correctIndex: 1,
  },

  {
    id: "80",
    question:
      "How can you remove the last element from an array in JavaScript?",
    answers: [
      "You can use the splice() method",
      "You can use the shift() method",
      "You can use the pop() method",
      "None of the above",
    ],
    correctIndex: 2,
  },

  {
    id: "81",
    question: "What is a higher-order function?",
    answers: [
      "A function that takes one or more functions as arguments",
      "A function that returns a new function",
      "A function that can be invoked multiple times",
      "All of the above",
    ],
    correctIndex: 3,
  },

  {
    id: "82",
    question: "What is a callback function in JavaScript?",
    answers: [
      "A callback function is a function that is defined inside another function and is executed before the parent function has completed",
      "A callback function is a function that is passed as an argument to another function and is executed after the parent function has completed",
      "A callback function is a function that is defined inside an object and is executed after a certain event occurs",
      "A callback function is a function that is defined inside a loop and is executed on each iteration",
    ],
    correctIndex: 1,
  },

  {
    id: "83",
    question: "How can you add an element to an array in JavaScript?",
    answers: [
      "array.append()",
      "array.add()",
      "array.push()",
      "None of the above",
    ],
    correctIndex: 2,
  },

  {
    id: "84",
    question:
      "What is the difference between a forEach and a map method in JavaScript?",
    answers: [
      "forEach modifies the original array, map returns a new array",
      "forEach returns a new array, map modifies the original array",
      "forEach and map are the same thing",
      "None of the above",
    ],
    correctIndex: 0,
  },

  {
    id: "85",
    question: "What is the difference between a forEach and a for...of loop?",
    answers: [
      "forEach can be used with a break statement while for...of cannot",
      "forEach only iterates over the values of an array, while for...of iterates over both the values and keys",
      "forEach only works on arrays, while for...of works on any iterable",
      "None of the above",
    ],
    correctIndex: 2,
  },

  {
    id: "86",
    question:
      "What is the difference between a for...in loop and a for...of loop?",
    answers: [
      "for...in loops through the values of an object while for...of loops through the keys of an iterable",
      "for...in loops through the keys of an object while for...of loops through the values of an iterable",
      "for...in loops through the properties of an object while for...of loops through the elements of an array",
      "None of the above",
    ],
    correctIndex: 1,
  },

  {
    id: "87",
    question: "How can you check if a variable is a number in JavaScript?",
    answers: [
      "You can use the isNaN() function",
      "You can use the typeof operator",
      "You should use both together",
      "None of the above",
    ],
    correctIndex: 2,
  },

  {
    id: "89",
    question: "How can you check if a variable is an array in JavaScript?",
    answers: [
      "array.isArray()",
      'typeof variable === "array"',
      "Array.isArray(variable)",
      "None of the above",
    ],
    correctIndex: 2,
  },

  {
    id: "90",
    question: "What is an anonymous function?",
    answers: [
      "A function that does not have a name",
      "A function that is not invoked immediately",
      "A function that does not have access to variables in the parent scope",
      "A function that returns the global scope",
    ],
    correctIndex: 0,
  },

  {
    id: "91",
    question: "What is an event loop?",
    answers: [
      "A way to organize events in a loop",
      "A way to handle asynchronous code execution",
      "A way to handle errors",
      "A queue of functions that are executed by the JavaScript runtime",
    ],
    correctIndex: 3,
  },

  {
    id: "92",
    question: "What is a promise?",
    answers: [
      "A way to handle asynchronous code execution",
      "A way to handle errors",
      "A way to handle user interactions",
      "A queue of functions that are executed by the JavaScript runtime",
    ],
    correctIndex: 0,
  },

  {
    id: "93",
    question: "What is a generator function?",
    answers: [
      "A special type of function that can be paused and resumed",
      "A way to create private variables",
      "A way to create protected variables",
      "A way to create public variables",
    ],
    correctIndex: 0,
  },

  {
    id: "94",
    question: "What is a decorator?",
    answers: [
      "A way to modify existing functions",
      "A way to modify existing classes",
      "A way to modify existing objects",
      "All of the above",
    ],
    correctIndex: 3,
  },

  {
    id: "95",
    question: "What is an IIFE in JavaScript?",
    answers: [
      "An IIFE is a function that is invoked after an event occurs",
      "An IIFE is a function that is invoked as soon as it is defined",
      "An IIFE is a function that is invoked once the entire script has loaded",
      "An IIFE is a function that is invoked after a certain amount of time",
    ],
    correctIndex: 1,
  },

  {
    id: "96",
    question: "What is event bubbling in JavaScript?",
    answers: [
      "Event propagates from child to parent elements",
      "Event propagates from parent to child elements",
      "Event propagates in the same element",
      "Event propagates in a random order",
    ],
    correctIndex: 0,
  },

  {
    id: "97",
    question: "What is the difference between push and unshift in JavaScript?",
    answers: [
      "push removes elements from an array, unshift adds to it",
      "unshift removes elements from an array, push adds to it",
      "push adds to the end of an array, unshift adds to the beginning",
      "unshift adds to the end of an array, push adds to the beginning",
    ],
    correctIndex: 2,
  },

  {
    id: "98",
    question: "What is event capturing in JavaScript?",
    answers: [
      "The process of an event stopping its propagation after the first element",
      "The process of an event propagating to all elements with the same class",
      "The process of an event propagating from the outermost element to the innermost element",
      "The process of an event propagating from the innermost element to the outermost element",
    ],
    correctIndex: 2,
  },

  {
    id: "99",
    question:
      "What will be the output? const arr = [1,2,3]; arr.length = 0; console.log(arr)",
    answers: ["[1,2,3]", "Undefined", "[]", "An error will be thrown"],
    correctIndex: 2,
  },
  {
    id: "100",
    question: "Can an arrow function be hoisted?",
    answers: [
      "Yes",
      "No",
      "Only if it is declared with var variable",
      "Depends on implementation",
    ],
    correctIndex: 1,
  },
];
export default Html5Questions;
