// ================================================
// JavaScript Basics: Printing, Variables, and Comments
// ================================================

/* 
  ==================================================
  1. Printing in JavaScript using console.log
  ==================================================
*/

// Example 1: Printing a single string with a newline character
console.log("Hello World! \nHii"); 
// Outputs:
// Hello World! 
// Hii

// Example 2: Printing a single string
console.log("hiii"); 
// Outputs: hiii

// Example 3: Printing multiple strings in one console.log statement
console.log("hii", "hello", "hey"); 
// Outputs: hii hello hey

/* 
  ==================================================
  2. Variable Declaration, Redeclaration, and Reassignment
  ==================================================
*/

/* 
  2.1 Using var
  ----------------------------------
  - Can be redeclared
  - Can be reassigned
*/

// Declaring variables using var
var firstName = "Bhavesh";
var lastName = "Bansal";
console.log(firstName, lastName); 
// Outputs: Bhavesh Bansal

// Redeclaring a variable with var (allowed)
var firstName = "Rahul";
console.log(firstName); 
// Outputs: Rahul

// Reassigning a variable with var (allowed)
firstName = "Karan";
console.log(firstName); 
// Outputs: Karan

// Declaring a variable without initializing
var a;
var a; // Redeclaration allowed with var
console.log(a); 
// Outputs: undefined

/* 
  2.2 Using let
  ----------------------------------
  - Cannot be redeclared in the same scope
  - Can be reassigned
*/

// Declaring variables using let
let b = 10;
console.log(b); 
// Outputs: 10

// Reassigning a variable with let (allowed)
b = 20;
console.log(b); 
// Outputs: 20

// Attempting to redeclare a variable with let in the same scope (Not allowed)
// let b = 30; // Uncommenting this line will throw a SyntaxError

/* 
  2.3 Using const
  ----------------------------------
  - Cannot be redeclared
  - Cannot be reassigned
  - Must be initialized at the time of declaration
*/

// Declaring a constant using const
const c = 10;
console.log(c); 
// Outputs: 10

// Attempting to reassign a constant (Not allowed)
// c = 20; // Uncommenting this line will throw a TypeError

// Attempting to redeclare a constant (Not allowed)
// const c = 30; // Uncommenting this line will throw a SyntaxError

/* 
  ==================================================
  3. Differences Between var, let, and const
  ==================================================
*/

/*
  | Feature                | var                  | let                   | const                 |
  |------------------------|----------------------|-----------------------|-----------------------|
  | Redeclaration          | Allowed              | Not allowed in the same scope | Not allowed         |
  | Reassignment            | Allowed              | Allowed               | Not allowed           |
  | Initialization         | Can be declared without initialization | Can be declared without initialization | Must be initialized at declaration |
*/

/* 
  ==================================================
  4. Variable Naming Conventions
  ==================================================
*/

/* 
  Rules for Naming Variables:
  - Can contain letters, digits, underscores (_), and dollar signs ($)
  - Must begin with a letter, underscore, or dollar sign
  - Cannot be a reserved keyword (e.g., `var`, `let`, `const`, `function`, etc.)
  - Case-sensitive
*/

/* 
  Examples of Valid Variable Names
*/
var firstName = "Alice";      // Camel case
let _age = 30;                // Starts with an underscore
const $salary = 5000;         // Starts with a dollar sign
let user1 = "Bob";            // Contains digits

/* 
  Examples of Invalid Variable Names
*/
// var first/ = "abc"; // Error: Invalid character '/' in identifier
// console.log(first$); // This would work only if 'first$' is a defined variable

/* 
  Corrected Version:
*/
var first_ = "abc"; // Using an underscore instead of '/'
console.log(first_); // Outputs: abc

/* 
  ==================================================
  5. Commenting in JavaScript
  ==================================================
*/

/* 
  - Single-line Comments: Use // to comment out a single line
  - Multi-line Comments: Use /* */ to comment out multiple lines
*/

// Single-line comment example
console.log("This line will execute"); // This is an inline comment

// Another single-line comment
// console.log("This line is commented out and won't execute");

/* 
  Multi-line comment example:
  The following code declares a constant and logs it to the console.
*/

const $first = "abc";
console.log($first); // Outputs: abc

/*
  Uncommenting the below lines will execute the code:
*/

// var $first = "abc";
// console.log("$first");

/* 
  Note:
  - In the multi-line comment above, "$first" is a string and will be printed as is.
  - To print the value of the variable $first, remove the quotes:
  console.log($first); // Outputs: abc
*/