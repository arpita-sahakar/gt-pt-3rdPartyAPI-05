// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

// var fizzBuzz = function(arr) {};

const fizzBuzz = (numbs) => {
  for (i = 0; i < numbs.length; i++) {
    if (numbs[i] % 3 === 0 && numbs[i] % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (numbs[i] % 5 === 0) {
      console.log("Buzz");
    } else if (numbs[i] % 3 === 0) {
      console.log("Fizz");
    }
  }
};

fizzBuzz([12, 15, 2, 4, 10, 14]);
