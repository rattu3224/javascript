'use strict';

let arr = ['a','b','c','d','e'];
console.log(arr.slice(2)); // slice the array without affecting the original array
console.log(arr.slice(2,4));
console.log(arr.slice(-2));// to read from the end
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));// to slice the array starting from 1 reducing last 2 elements
// creating shallow copy
console.log(arr.slice());
//or 
let arr_two = [...arr];
console.log(arr_two);

// SPLICE
// mutates the orignal arrayt
// remove the elements from original array
console.log(arr_two.splice(2));
console.log(arr_two);
// arr.splice(-1);
// console.log(arr)
arr.splice(1,2);// remove elements starting from index
console.log(arr);

// reverse
// mutate the orignal arr
const arrnew = ['j','i','k'];
console.log(arrnew.reverse())

// concat
// doesn't mutate
const letters= arr.concat(arrnew);
console.log(letters);
// console.log([...arr,...arrnew])

//join
console.log(letters.join('-'));

// at
console.log(arr.at(2));
//use case
console.log(letters[arr.length-1]);
console.log(letters.slice(-1)[0]);
console.log(letters.at(-1));// if access last element // method chaining
// at works on strings also

console.log(letters.join('-').at(-3));
