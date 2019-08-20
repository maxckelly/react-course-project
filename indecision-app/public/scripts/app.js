'use strict';

// Arguments object - no longer bound with arrow functions

// The below function would not work

// const add = (a, b) => {
//     console.log(arguments)
//     return a + b
// }

// The below function would work. 

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 101));

// this keyword no longer bound with arrow functions
// The below would not work due to the function word being used it needs to be an arrow function instead.
// const user = {
//     name: 'Max',
//     cities: ['Melbourne, Sydney, Perth, New York'],
//     printPlacesLived: function() {

//         this.cities.forEach(function (city) {
//             console.log(this.name + ' has lived in' + city)
//         })
//     }
// }

var userArrowFunction = {
    name: "Max",
    cities: ['Melbourne', 'Sydney', 'Perth', 'New York'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' had lived in ' + city;
        });
    }
};

console.log(userArrowFunction.printPlacesLived());

// Challenge area

var multiplier = {

    multiplyBy: 24,
    numbers: [12, 20, 30, 50],
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
