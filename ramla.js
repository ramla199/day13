
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
