const takeOrder = () => {
    console.log("Order: pizza");
};

takeOrder();

const takeOrder = (topping) => {
    console.log('Order: pizza topped with ' + topping);
};

takeOrder("mush");

const takeOrder = (topping, crustType) => {
    console.log("Order: " + crustType + " crust pizza topped with " + topping);
};

takeOrder('mushrooms', 'thin');
takeOrder('mushrooms', 'deep');
takeOrder('mushrooms', 'hand tossed');

let orderCount = 0;

const takeOrder = (topping, crustType) => {
    orderCount++;
    console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

const getSubTotal = (itemCount) => {
    return itemCount * 7.5;
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');
console.log(getSubTotal(orderCount));


let orderCount = 0;

const takeOrder = (topping, crustType) => {
    orderCount++;
    console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
    return itemCount * 7.5;
};

const getTax = (itemCount) => {
    return getSubTotal(itemCount) * 0.06
}

const getTotal = (itemCount) => {
    return getTax(itemCount) + getSubTotal(itemCount)
}

console.log(getSubTotal(orderCount));

console.log(getTotal(orderCount))