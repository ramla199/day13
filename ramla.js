
const ramla = 'hi';
// JavaScript: Tips of the Day

// Destructuring is a new concept in ES6 that is going to save a lot of time for JavaScript developers.

//Destructuring assignments From Object

//The old way of getting variable from an object:

const car = { a: 'tesla', b: 'ford', c: 'lambo', d: 'lexus' }
const ab = cars.a; // a = tesla
const bc = cars.b; // b = ford
const cd = cars.c; // c = lambo
const de = cars.d; // d = lexus

// The new way of getting variable:

const cars = { a: 'tesla', b: 'ford', c: 'lambo', d: 'lexus' }
// w: tesla, x: ford, y: lambo, z: lexus

// Getting a variable from a nested object:

const Address = {
    Australia: { Street: 'Victoria Rd', Suburb: 'Alberta', State: 'NSW', Zip: 2222 }
}
function getState(state) {
    const { Australia: { State: stateName } } = state;
    return stateName;
}
console.log(getState(Address)); //NSW

// Destructuring assignments From Arrays

// So you want to select random elements from an array.This is how you select.

const [ac, bd] = [1, 2, 3, 4, 5]
console.log(ac, bd) // return 1 2

// And if you want to select first element (1) and last element (5) this is how destructuring will help you.

const [af, , , , bg] = [1, 2, 3, 4, 5]
console.log(af, bg) // return 1 5


function AlphabeticalOrder(str) {
    return str
        .split("")
        .sort()
        .join("");
}

function evenOnly(arr) {
    let result = arr.filter(arr => arr % 2 == 0);
    return result;
}

function numbersOnly(arr) {
    return arr.filter(arr => typeof arr == "number");
}

function minMaxLengthAverage(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const len = arr.length;

    //Reducer for get Average function
    const ave = arr => arr.reduce((acc, curVal) => acc + curVal, 0) / len;
    const average = ave(arr);

    //Return output
    return [min, max, len, average];
}

function reverse_a_number(n) {
    n = n + "";

    return n.split("").reverse().join("");
}

console.log(Number(reverse_a_number(32243)));

function reverse_a_number(n) {
    n = n + "";

    return n.split("").reverse().join("");
}

const address = {
    Australia: { Street: 'Victoria Rd', Suburb: 'Alberta', State: 'NSW', Zip: 2222 }
}
function getState(state) {
    const { Australia: { State: stateName } } = state;
    return stateName;
}
console.log(getState(Address)); //NSW




function minMaxLengthAverage(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const len = arr.length;

    //Reducer for get Average function
    const ave = arr => arr.reduce((acc, curVal) => acc + curVal, 0) / len;
    const average = ave(arr);

    //Return output
    return [min, max, len, average];
}