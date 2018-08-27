const getSleepHours = (day) => {
    day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return 7;
            break;
        case 'tuesday':
            return 6;
            break;
        case 'wednesday':
            return 6.5;
            break;
        case 'thursday':
            return 6.5;
            break;
        case 'friday':
            return 6;
            break;
        case 'saturday':
            return 7.5;
            break;
        case 'sunday':
            return 7;
            break;
    }
};

//console.log( getSleepHours('monday') );
//console.log( getSleepHours('sunday') );
//console.log( getSleepHours('friday') );

const getActualSleepHours = () => {
    return getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday');
};

const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
};

//console.log(getActualSleepHours() );
//console.log(getIdealSleepHours() );

const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log("You currently get the perfect ammount of sleep.");
    } else if (actualSleepHours < idealSleepHours) {
        console.log("YOu should get some more rest.");
    } else {
        console.log("You are sleeping a bit too much.");
    }
};

calculateSleepDebt();