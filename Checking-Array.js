// 4. Checking if it's an Array
//      Instructions:
//      Create different variables, each containing either an array or a non-array value.
//      Now use isArray to check if each variable is an array.
//      Print a message to the console indicating whether each variable is an array or not.


const friends =['sakib', 'eti', 'labib', 'soma', 'sumi'];

const numbers = [];

const foods = 'Bery ean i e';

const boolean = true;

console.log(Array.isArray(boolean));
console.log(Array.isArray(foods));
console.log(Array.isArray(numbers));
console.log(Array.isArray(friends));

// boolean array or not array
if (Array.isArray(boolean)) {
    console.log('is an array');
} 
else{
    console.log('is an not array')
}

// foods array or not array
if (Array.isArray(foods)) {
    console.log('is an array');
} 
else{
    console.log('is an not array')
}

// numbers array or not array
if (Array.isArray(numbers)) {
    console.log('is an array');
} 
else{
    console.log('is an not array')
}

// friends array or not array
if (Array.isArray(friends)) {
    console.log('is an array');
} 
else{
    console.log('is an not array')
}
