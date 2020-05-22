// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: nestedFunction() is a closure and has access to variables from a higher level scope (ie parent function myFunction()).

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, 
`summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(parameter){
  let counter = 0;
  for(let i = 0; i <= parameter; i++){
    counter += i;
  } 
  return counter;
}
console.log(sumation(4));