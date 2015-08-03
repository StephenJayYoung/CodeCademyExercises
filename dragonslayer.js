var slaying = true;
var youHit = Math.floor(Math.random() *2);
var damageThisRound = Math.floor(Math.random()*5 + 1 );
var totalDamage = 0;
// var totalDamage += damageThisRound;


var loop = function(){
	while(slaying = true){
	    if(youHit === 1) {
	        totalDamage += damageThisRound;
	        console.log("You hit the beast!");
	        }
	        if (totalDamage >= 4){
	            youhit = Math.floor(Math.random()*5 + 1 );
	            }
	    else {
	        console.log("The dragon defeated you");
	        }
	        
	    slaying = false;

    };
}
	console.log(slaying);