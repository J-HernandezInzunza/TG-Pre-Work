let Airplane = {};

Airplane.myAirplane = 'StarJet';

module.exports = Airplane; 


const Airplane = require('./1-airplane.js');

function displayAirplane() {
    console.log(Airplane.myAirplane);
}

displayAirplane();

const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());

let Airplane = {};

Airplane.availableAirplanes = [
    {
        name: 'AeroJet',
        fuelCapacity: 800
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500
    }
];

export default Airplane;

import Airplane from './airplane';

function displayFuelCapacity() {
    Airplane.availableAirplanes.forEach(function (element) {
        console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
    });
}

displayFuelCapacity();

let flightRequirements = {
    requiredStaff: 4
};

let availableAirplanes = [
    {
        name: 'AeroJet',
        availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
        fuelCapacity: 800
    },
    {
        name: 'SkyJet',
        availableStaff: ['pilots', 'flightAttendants'],
        fuelCapacity: 500
    }
];


function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
};

export { availableAirplanes, flightRequirements, meetsStaffRequirements };

import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

function displayFuelCapacity() {
    availableAirplanes.forEach(function (element) {
        console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
    });
}

function displayStaffStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
    });
}

displayFuelCapacity();
displayStaffStatus();

export let availableAirplanes = [
    {
        name: 'AeroJet',
        fuelCapacity: 800,
        availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
        maxSpeed: 1200,
        minSpeed: 300
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500,
        availableStaff: ['pilots', 'flightAttendants'],
        maxSpeed: 800,
        minSpeed: 200
    }
];

export let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
    let range = maxSpeed - minSpeed;
    if (range > requiredSpeedRange) {
        return true;
    } else {
        return false;
    }
};

import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

function displayFuelCapacity() {
    availableAirplanes.forEach(function (element) {
        console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
    });
}

displayFuelCapacity();

function displayStaffStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
    });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
    });
}

displaySpeedRangeStatus();


let availableAirplanes = [
    {
        name: 'AeroJet',
        fuelCapacity: 800,
        availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
        maxSpeed: 1200,
        minSpeed: 300
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500,
        availableStaff: ['pilots', 'flightAttendants'],
        maxSpeed: 800,
        minSpeed: 200
    }
];

let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
    let range = maxSpeed - minSpeed;
    if (range > requiredSpeedRange) {
        return true;
    } else {
        return false;
    }
};

export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };

import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

function displayFuelCapacity() {
    availableAirplanes.forEach(function (element) {
        console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
    });
}

displayFuelCapacity();

function displayStaffStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element['name'] + ' meets staff requirements: ' + meetsStaffRequirements(element['availableStaff'], flightRequirements['requiredStaff']));
    });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element['name'] + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element['maxSpeed'], element['minSpeed'], flightRequirements['requiredSpeedRange']));
    });
}

displaySpeedRangeStatus();

export let availableAirplanes = [
    {
        name: 'AeroJet',
        fuelCapacity: 800,
        availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
        maxSpeed: 1200,
        minSpeed: 300
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500,
        availableStaff: ['pilots', 'flightAttendants'],
        maxSpeed: 800,
        minSpeed: 200
    }
];

export let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
    let range = maxSpeed - minSpeed;
    if (range > requiredSpeedRange) {
        return true;
    } else {
        return false;
    }
};

export default meetsSpeedRangeRequirements;

import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity() {
    availableAirplanes.forEach(function (element) {
        console.log('Fuel Capacity of ' + element.name + ': ' + element['fuelCapacity']);
    });
}

displayFuelCapacity();

function displayStaffStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
    });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
    });
}

displaySpeedRangeStatus();