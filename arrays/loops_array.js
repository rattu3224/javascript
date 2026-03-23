'use strict';

// Looping over arrays

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movements){
for(const [i,movement] of movements.entries()){
    let action = (movement > 0)?'deposited':'withdraw';
    console.log(`Movement ${i+1}: You ${action} ${Math.abs(movement)}`);
}
console.log(`-------------- FOREACH -------------------`);
// foreach
// requirs callback function & is higher order function
// continue and break doesn't work with foreach
movements.forEach(function(movement,index,arr){ 
    // console.log(arr);// gives the whole of the array
    let action = (movement > 0)?'deposited':'withdraw';
    console.log(`Movement ${index+1}: You ${action} ${Math.abs(movement)}`);
});



// WORKING WITH MAPS & SETS

currencies.forEach(function(curr,key){
    console.log(`${key}: ${curr}`)
})

const currenciesSet = new Set(currencies);
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
// set is not key value pair 
// SET doen't have index/key so it consider value as key
// for of is best for set
currenciesUnique.forEach(function(curr,key){
    console.log(`${key}: ${curr}`)
});

