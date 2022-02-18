
const ramla = 'hi';
// JavaScript: Tips of the Day

// Destructuring is a new concept in ES6 that is going to save a lot of time for JavaScript developers.

//Destructuring assignments From Object

//The old way of getting variable from an object:

const cars = { a: 'tesla', b: 'ford', c: 'lambo', d: 'lexus' }
const a = cars.a, // a = tesla
const b = cars.b, // b = ford
const c = cars.c, // c = lambo
const d = cars.d // d = lexus

// The new way of getting variable:

const cars = { a: 'tesla', b: 'ford', c: 'lambo', d: 'lexus' }
const { a: w, b: x, c: y, d: z }
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

const [a, b] = [1, 2, 3, 4, 5]
console.log(a, b) // return 1 2

// And if you want to select first element (1) and last element (5) this is how destructuring will help you.

const [a, , , , b] = [1, 2, 3, 4, 5]
console.log(a, b) // return 1 5


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

const Address = {
    Australia: { Street: 'Victoria Rd', Suburb: 'Alberta', State: 'NSW', Zip: 2222 }
}
function getState(state) {
    const { Australia: { State: stateName } } = state;
    return stateName;
}
console.log(getState(Address)); //NSW

const cars = { a: 'tesla', b: 'ford', c: 'lambo', d: 'lexus' }
const a = cars.a, // a = tesla
const b = cars.b, // b = ford
const c = cars.c, // c = lambo
const d = cars.d // d = lexus


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