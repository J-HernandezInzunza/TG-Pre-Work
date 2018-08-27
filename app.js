let person = {
    name: 'Jose',
    age: 29
};

let person = {
    name: 'Jose',
    age: 40
};
console.log(person.name);
console.log(person.age);

let person = {
    name: 'Jose',
    age: 40
};
console.log(person.name);
console.log(person['age']);
console.log(person['name']);

let person = {
    name: 'Jose',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
};
console.log(person.name);
console.log(person['age']);
console.log(person['name']);

let day = 'Monday';
let alarm;

if (day === "Saturday" || day === "Sunday") {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);

let person = {
    name: 'Jose',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
};

person.hobbies = ['coding', 'studying'];
console.log(person['hobbies']);
console.log(person.name);
console.log(person['age']);
console.log(person['name']);

let day = 'Monday';
let alarm;

if (day === "Saturday" || day === "Sunday") {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);

let person = {
    name: 'Jose',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
};

person.hobbies = ['coding', 'studying'];
person.hobbies = ['coding'];
console.log(person['hobbies']);
console.log(person.name);
console.log(person['age']);
console.log(person['name']);

let day = 'Monday';
let alarm;

if (day === "Saturday" || day === "Sunday") {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);

let person = {
    name: 'Jose',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello: () => {
        return 'Hello, there!';
    }
};
console.log(person.sayHello());
person.hobbies = ['coding', 'studying'];
person.hobbies = ['coding'];
console.log(person['hobbies']);
console.log(person.name);
console.log(person['age']);
console.log(person['name']);

let day = 'Monday';
let alarm;

if (day === "Saturday" || day === "Sunday") {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);

let person = {
    name: 'Jose',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello: () => {
        return 'Hello, there!';
    },
    sayGoodbye() {
        return 'Goodbye!';
    }
};
console.log(person.sayHello());
console.log(person.sayGoodbye());
person.hobbies = ['coding', 'studying'];
person.hobbies = ['coding'];
console.log(person['hobbies']);
console.log(person.name);
console.log(person['age']);
console.log(person['name']);

let day = 'Monday';
let alarm;

if (day === "Saturday" || day === "Sunday") {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);

let person = {
    name: 'Jose',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello() {
        return 'Hello my name is ' + this.name;
    },
    sayGoodbye() {
        return 'Goodbye!';
    }
};
console.log(person.sayHello());
console.log(person.sayGoodbye());
person.hobbies = ['coding', 'studying'];
person.hobbies = ['coding'];
console.log(person['hobbies']);
console.log(person.name);
console.log(person['age']);
console.log(person['name']);

let day = 'Monday';
let alarm;

if (day === "Saturday" || day === "Sunday") {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);

let person = {
    name: 'Jose',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello() {
        return 'Hello my name is ' + this.name;
    },
    sayGoodbye() {
        return 'Goodbye!';
    }
};
//friend obj
let friend = {
    name: 'Helena'
}
friend.sayHello = person.sayHello;

console.log(person.sayHello());
console.log(person.sayGoodbye());
person.hobbies = ['coding', 'studying'];
person.hobbies = ['coding'];
console.log(person['hobbies']);
console.log(person.name);
console.log(person['age']);
console.log(person['name']);

let day = 'Monday';
let alarm;

if (day === "Saturday" || day === "Sunday") {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);
console.log(friend.sayHello());

