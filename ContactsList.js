var friends = {}

friends.bill = {
    firstName : "Bill",
    lastName : "Swayze",
    number: 555-555-555,
    address: ["1007 Walker Street", "Philadelphia", "PA", "08019"]
    }
friends.steve = {
    firstName:"Steve",
    lastName: "Young",
    number: 555-555-5556,
    address: ["2222 Forest Drive", "Seattle", "WA", "19999"]
    }
friends.jeff = {
    firstName: "Jeff",
    lastName: "Merrill",
    number: 555-555-5557,
    address: ["1922 Settting Sun Ave", "Lake Winnipeg", "MI", "00006"]
    }
friends.isa = {
    firstName: "Isabella",
    lastName: "Bae",
    number: 555-555-5558,
    address: ["1234 West River Drive", "Chicago", "IL", "00456"]
    }
    
var list = function(){
    for (var prop in friends) {
        console.log(prop);
        }
    }
    
var search = function(name) {
    for (var prop in friends){
        if (friends[prop].firstName === name ){
            console.log(friends[prop]);
            return friends[prop];
            }
        }
    }

    //this is a pretty good exercise, and a decent intro to for in looping, 
    //as well as building objects