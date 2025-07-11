/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);

let customerName = "Alice";
let numberOfItems = 5;
let itemPrice = 20;
let totalCost = numberOFItems * itemPrice;
let (sum) = customerName + " bought " + numberOfItems + " items for" + totalCost + "dollar" + ", each item is $" + itemPrice + ".");
 
console.log(sum);



Things to reflect on: 

 - Why is it important to use meaningful variable names?

Variables are important to have a better understanding of the purpose of codes for developers. 

  - What are the common pitfalls to avoid when naming variables?

  Using vague names, making names too long, mixing styles, using reserved words like function, giving misleading names.

  - How do clear variable names benefit team collaboration?

  it makes code easier to understand, and it reduces mistakes.
  
git add .
git commit -m "Refactored variables and added userName and currentDate variables"
git push origin main
