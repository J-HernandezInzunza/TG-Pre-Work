let isSoccerFan = true;

if (isSoccerFan === true) {
    console.log("Goal!");
} else {
    console.log("No goal!");
}

let wordCount = 1;

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log('Better get to work!');
}


let favoritePhrase = 'ball';

if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log('This string is definitely empty.');
}

let wordCount = 1;

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log('Better get to work!');
}


let favoritePhrase = 'ball';

if (!favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log('This string is definitely empty.');
}

let hungerLevel = 10;

if (hungerLevel > 7) {
    console.log("Time to eat!");
} else {
    console.log("We can eat later!");
}

let moonPhase = "full";

if (moonPhase === "full") {
    console.log("Howl!");
} else {
    console.log("I swear I'm not a werewolf.");
}

let moonPhase = "solar eclipse";

if (moonPhase === "full") {
    console.log("Howl!");
} else if (moonPhase === "mostly full") {
    console.log("Arms and legs are getting hairier.");
} else if (moonPhase === "mostly new") {
    console.log("Back on two feet.")
} else {
    console.log("Invalid moon phase.");
}

let moonPhase = "full";
let isFoggyNight = false;

if (moonPhase === "full" || isFoggyNight) {
    console.log("Howl!");
} else if (moonPhase === "mostly full") {
    console.log("Arms and legs are getting hairier.");
} else if (moonPhase === "mostly new") {
    console.log("Back on two feet.")
} else {
    console.log("Invalid moon phase.");
}

let moonPhase = "full";

switch (moonPhase) {
    case "full":
        console.log("Howl!");
        break;
    case "mostly full":
        console.log("Arms and legs are getting hairier");
        break;
    case "mostly new":
        console.log("Back on two feet.")
        break;
    default:
        console.log("Invalid moon phase.");
        break;
}

