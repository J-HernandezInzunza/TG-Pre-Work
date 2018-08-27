let person = {
    _name: 'Lu Xun',
    _age: 137,

    set age(newAge) {
        if (typeof newAge === 'number') {
            this._age = newAge;
            console.log(this.age);
        } else {
            return console.log('Invalid input');
        }
    }
};

let person = {
    _name: 'Lu Xun',
    _age: 137,

    set age(newAge) {
        if (typeof newAge === 'number') {
            this._age = newAge;
            console.log(this._age);
        } else {
            return console.log('Invalid input');
        }
    }
};

person.age = 'Thirty-nine';
person.age = 39;

let person = {
    _name: 'Lu Xun',
    _age: 137,

    set age(newAge) {
        if (typeof newAge === 'number') {
            this._age = newAge;
            console.log(this._age);
        } else {
            console.log('Invalid input');
        }
    },

    get age() {
        console.log(this._name + " is " + this._age + " years old.");
        return this._age;
    }
};

person.age = 'Thirty-nine';
person.age = 39;
let myAge = person._age;
console.log(myAge);
console.log(person.age);

