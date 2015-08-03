var loop = function(i){
    var count = 0;
	while(count<3){
	    console.log("I'm looping!");
	    count++;
	}
};

loop();

//Do While loop example:

var theChoppa = false;

var getToDaChoppa = function(theChoppa){
do {
    console.log("If getting to the choppa is " + theChoppa + " then don't get on the choppa!");
    } while (theChoppa);
  
};

getToDaChoppa(theChoppa);
