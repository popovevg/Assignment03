
userChoice = "";
while (true) {
    userChoice = window.prompt("Select your choice: rock, paper or scissors?");
    if ((userChoice === "rock")||(userChoice === "paper")||(userChoice === "scissors")) {
        break;
    }
}
let computerChoice;
let x = Math.floor(Math.random()*10) + 1;
if ( (x >= 1) && (x <= 3)) {
    computerChoice = "rock";
}
else if ( (x >= 4) && (x <= 6)) {
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}

if (userChoice === "rock") {
    if (computerChoice === "paper") {
        window.alert("Paper covers rock. You loose!");
    }
    else if (computerChoice === "scissors") {
        window.alert("Rock destroys scissors. You won!");
    }
    else {
        window.alert("You and Computer selected " + userChoice + ". Try one more time.")
    }
}
else if (userChoice === "paper") {
    if (computerChoice === "rock") {
        window.alert("Paper covers rock. You won!");
    }
    else if (computerChoice === "scissors") {
        window.document.write("Scissors cut paper. You loose!");
    }
    else {
        window.alert("You and Computer selected " + userChoice + ". Try one more time.")
    }
}
else {
    if (computerChoice === "rock") {
        window.alert("Rock destroys scissors. You loose!");
    }
    else if (computerChoice === "paper") {
        window.alert("Scissors cut paper. You won!");
    }
    else {
        window.alert("You and Computer selected " + userChoice + ". Try one more time.")
    }
}

