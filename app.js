let vacationSpots = ['Italy', 'Japan', 'Canada'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];

for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
    console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}


let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];

for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) {
    console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);

let myPlaces = ['tokyo', 'italy', 'seattle'];
let friendPlaces = ['spain', 'tokyo', 'kansas'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
    //console.log(myPlaces[myPlacesIndex]);
    for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
        if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
            console.log(myPlaces[myPlacesIndex]);
        }
        //console.log(friendPlaces[friendPlacesIndex]);
    }
}

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Diamond';

while (currentCard != 'Spade') {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log(currentCard); 

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
//console.log(groceryList);
groceryList.unshift('popcorn');
//console.log(groceryList);
console.log(groceryList.slice(1, 4));
console.log(groceryList);