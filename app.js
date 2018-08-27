let input = 'I Love Helena Marie Meijer';
let vowels = ['A', 'E', 'I', 'O', 'U'];

resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i].toUpperCase() === vowels[j]) {
            resultArray.push(input[i].toUpperCase());
        }
    }
    //store any 'e's again
    if (input[i].toUpperCase() === 'E') {
        resultArray.push(input[i].toUpperCase());
    }
    //store any 'u's again
    if (input[i].toUpperCase() === 'U') {
        resultArray.push(input[i].toUpperCase());
    }
}
//console.log(resultArray);
console.log(resultArray.join(''));
