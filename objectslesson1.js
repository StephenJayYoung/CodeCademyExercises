var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 = susan.name;
var age2 = susan.age;

////////////////////////////
// Our bob object again, but made using a constructor this time 
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;

////////////////////////////////

var bob = new Object();
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());

////////////////////////////////////

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;

// change bob's age to 50 here
bob.setAge(50);

/////////////////////////////////////
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;


// here, update Susan's age to 35 using the method
susan.setAge(35);

//////////////////////////////////////////////////
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);

////////////////////////////////////////////
function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(age, color) {
    this.age = age;
    this.color = color;
    
    }

/////////////////////////////////////////////
///Create a new object called sally using the 
///Person constructor. Her name is "Sally Bowles" and she 
///is 39. Create another object called holden. His name is 
///"Holden Caulfield" and he is 16.

Edit the sentence printed out such that it includes the age of sally and holden respectively.

function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person ("Sally Bowles", 39);
var holden = new Person ("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);

/////////////////////////////////////
// Create a new object rabbit1 with the adjective "fluffy",
// a new object rabbit2 with the adjective "happy", and a new
// object rabbit3 with the adjective "sleepy".

// Use the method describeMyself to print out in the console a sentence
//  about each object you just created!

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");
///////////////////////////////////////////////
//Add one more Person to the family array, "timmy", who is 6 years old.

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy",6);
// add the last family member, "timmy", who is 6 years old

///////////////////////////////////////////////////
///// Write a person constructor called Person that has two properties (name and age).

// Create an empty array called family.
// Our Person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// There will be four objects in the array. Using your Person constructor, 
// create the four objects and put them in the array. The order of the objects are.
// Now we can make an array of people
var family = new Array();
 family[0] = new Person("alice", 40);
 family[1] = new Person("bob", 42);
 family[2] = new Person("michelle", 8);
 family[3] = new Person("timmy", 6);
// loop through our new array

// Create a for-loop that loops through the family array and prints out the name property for each family member in order of creation.
for (var i = 0; i < family.length; i++) {
    console.log(family[i].name);
    };
    
/////////////////////////////////////////////////  

