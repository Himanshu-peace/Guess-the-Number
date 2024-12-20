// const max = prompt ("enter the number");
// console.log(max);


const random = Math.floor(Math.random()* max) + 1;//return number between 1 to maximum number entered by the user

let guess = prompt("guess the number");

while(true){
    if (guess == "quit"){
        console.log("user Quit");
        break;
    }
    if (guess == random){
        console.log(" congrats!! you have gussed right ");
        prompt(" congrats!! you have gussed right ");
        break;
    }else if(guess < random) {
        guess = prompt("hint: your guess was too small. Please try again");
    }else {
        guess = prompt("Hint: your guess was too large. Please try again");
    }

}