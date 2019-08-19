'use strict';

var square = function square(x) {
    return x * x;
};

// You can remove the const from the name and put it like the below.
function noConst(x) {
    return x * x;
}

console.log(square(8));

//--- Arrow function--

// Arrow function removes the function key word
// Arrow functions are always anonymous. So you have to assign a const
var squareArrow = function squareArrow(x) {
    return x * x;
};

// The below if you want to make the arrow function more compact.
var newSquareArrow = function newSquareArrow(x) {
    return x * x;
};

console.log(squareArrow(500));
console.log(newSquareArrow(16));

//--- Challenge ---

function getFirstName(name) {
    return name.split(' ')[0];
}

var getFirstNameArrow = function getFirstNameArrow(name) {
    return name.split(' ')[0];
};

var getFirstNameArrowCompact = function getFirstNameArrowCompact(name) {
    return name.split(' ')[0];
};

console.log(getFirstName('Max Kelly'));
console.log(getFirstNameArrow('John Smith'));
console.log(getFirstNameArrowCompact('Tess Buckley'));
