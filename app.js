//initialize kelvin variable
let kelvin = 293;
//celcius is 273 less than kelvin
let celsius = kelvin - 273;
//use equation to determine f
let fahrenheit = ((celsius * (9 / 5)) + 32);
//round down to nearest integer
fahrenheit = Math.floor(fahrenheit);

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");