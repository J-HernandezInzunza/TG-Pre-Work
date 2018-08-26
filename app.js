let userName = '';
let userQuestion = '';
let randomNumber = Math.floor((Math.random() * 8) + 1);
var eightBall = '';

userName ? console.log("Hello " + userName + "!") : console.log("Hello!");

console.log("You asked the Magic 8 Ball: " + userQuestion);

switch (randomNumber) {
    case 1:
        eightBall = "It is certain";
        break;
    case 2:
        eightBall = "It is decidedly so";
        break;
    case 3:
        eightBall = "Reply hazy try again";
        break;
    case 4:
        eightBall = "Cannot predict now";
        break;
    case 5:
        eightBall = "Do not count on it";
        break;
    case 6:
        eightBall = "Do not count on it";
        break;
    case 7:
        eightBall = "Do not count on it";
        break;
    case 8:
        eightBall = "Do not count on it";
        break;

}
console.log(eightBall);