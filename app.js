let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function (fruitItem) {
    console.log(' - ' + fruitItem);
});

fruits.forEach(fruitItem => console.log(fruitItem));


let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
/*
let secretMessage = animals.map(function(animal){
  return animal[0];
});
console.log(secretMessage.join(''));
*/

let secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(function (numbers) {
    return numbers / 100;
});
console.log(smallNumbers);
/*
let smallNumbers2 = bigNumbers.map(numbers => numbers / 100);
console.log(smallNumbers2);
*/

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(function (number) {
    return number < 250;
});

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

/*
let longFavoriteWords = favoriteWords.filter(function(word) {
  return word.length > 7;
});
*/

// Refactor the code above using arrow function syntax
let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(function (number) {
    return number < 250;
});

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

/*
let longFavoriteWords = favoriteWords.filter(function(word) {
  return word.length > 7;
});
*/

// Refactor the code above using arrow function syntax
let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);


