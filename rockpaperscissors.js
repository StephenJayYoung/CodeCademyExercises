var compare = function(userChoice, computerChoice) {
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
    if (userChoice === computerChoice) {
        return "The result is a tie!";
        }
    else if (userChoice === "rock") {
    if(computerChoice === "scissors") {
        return "rock wins";
    }
    else {
        return "paper wins";
    }
}
} 