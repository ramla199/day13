// function multiplyAll() {

// }
// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


const arr = [
    [1, 2], [3, 4], [5, 6]
];

let product = 0;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
        product += arr[i][j];
    }
}

console.log(product);



