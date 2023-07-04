/* function multiply(x, y) {
    return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply);

// Function Factory
function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x; 
    };

    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments
function doOperation(x, operation) {
    return operation(x);
}

var result = doOperation(5, multiplyBy3);
console.log(result);
result = doOperation(100, doubleAll);
console.log(result);


// Function constructors
function Circle (radius) {
    this.radius = radius;
}
Circle.prototype.getArea =  
    function () {
        return Math.PI * Math.pow(this.radius, 2);
    };

var myCircle = new Circle(10); // new Object();
console.log(myCircle);

// Array constructions
var array = new Array();
array[0] = "Abishek";
array[1] = 2;
array[2] = function (name) {
    console.log("Hello " + name);
};
array[3] = {course: "HTML, CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);

*/




// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    // STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using either the helloSpeaker's or byeSpeaker's 'speak' method.
    // See Lecture 50, part 1
    for (var i = 0; i < names.length; i++) {
    
      // STEP 11: (NOTHING TO DO. ALREADY DONE FOR YOU)
      // Retrieve the first letter of the current name in the loop.
      // Use the string object's 'charAt' function. Since we are looking for
      // names that start with either upper case or lower case 'J'/'j', call
      // string object's 'toLowerCase' method on the result so we can compare
      // to lower case character 'j' afterwards.
      // Look up these methods on Mozilla Developer Network web site if needed.
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      // STEP 12: (NOTHING TO DO. ALREADY DONE FOR YOU)
      // Compare the 'firstLetter' retrieved in STEP 11 to lower case
      // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
      // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
      // name in the loop.
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();
    


