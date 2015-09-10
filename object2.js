//Finish the james object by adding properties to it. His job should be "programmer" and should have a married property set to false.

var james = {
    // add properties to this object!
    job: "programmer",
    married: false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}
//Create a new gabby object using the Person constructor. She should have a job of "student" and her married property should be true.
// create a "gabby" object using the Person constructor!
var gabby = new Person()
gabby.job = "student";
gabby.married = true;
///////////////////////////////////////////////////////////
// Add a speak method to the Person constructor. Whenever speak is called,
//  it should print "Hello!" to the console.
function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = function(){
        console.log("Hello!");
        };
    
}

var user = new Person("Codecademy Student",false);
user.speak();