// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable
var name = "arpita";




// 2. ARRAYS
// ==========================================================

// Create an array of five strings

var myArray = ["arpi" ,"tiya" ,"abhi", "bandana", "hari"] ;




// Create an array of five numbers

var myNumber = [1,2,3,4,5];


// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"

for(i=0; i<5; i++){
    console.log("My name is Bob five times");
}



// Create a for loop that loops through your five string array
for(i=0; i<myArray.length;i++){
    console.log(myArray[i]);

}




// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function

function divideNo(x,y){
    var divide = x/y;
    console.log(divide);

}
divideNo(10,5);



// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function
var myNumber = [1,2,3,4,5];

function myNo(){
    for(i=0; i<myNumber.length; i++){
        console.log(myNumber[i]);
    }
}

myNo();


// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object

var car 




// Console log any three of the properties in that object

var car = {
    make : 2016,
    model : "nisan",
    capacity : function(){
        console.log("abc");
    }
    
}



// Create an Array of 5 Objects
var cars = [
        {
        make : 2016,
        model : "nisan",
        capacity : function(){
            console.log("abc");
        }
        
    },

    {
        make : 2017,
        model : "nisan",
        capacity : function(){
            console.log("abc");
        }
        
    },

    {
        make : 2018,
        model : "nisan",
        capacity : function(){
            console.log("abc");
        }
        
    },

    {
        make : 2019,
        model : "nisan",
        capacity : function(){
            console.log("abc");
        }
        
    },

    {
        make : 2000,
        model : "nisan",
        capacity : function(){
            console.log("abc");
        }
        
    }

]




// Console log 3 properties for every one of the five objects

for(i=0; i<cars.length; i++){
    console.log(cars[i].make + "," + cars[i].model );
    cars[i].capacity();
}




// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.

check index.html for the answer.........




// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.



