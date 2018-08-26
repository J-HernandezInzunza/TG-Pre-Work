let raceNumber = Math.floor((Math.random() * 1000) + 1);
let isEarly = true;
let runnersAge = 10;

if (runnersAge >= 18 && isEarly) {
    raceNumber += 1000;
    console.log("Your race will begin at 9:30 am");
    console.log("Your race number is: " + raceNumber);
} else if (runnersAge >= 18 && isEarly === false) {
    console.log("Late adults run at 11:00 am");
    console.log("Your race number is: " + raceNumber);
} else {
    console.log("Youth registrants run at 12:30 pm");
    console.log("Your race number is: " + raceNumber);
}
