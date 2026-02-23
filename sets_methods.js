'use strict';

// set are collection of unique values
// hence unique values
// different data type
// set is iterable
const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pasta',
    'Risotto',
    'Pizza'
]);
console.log(orderSet);

console.log(new Set('Jonas'));

// working with set
console.log(orderSet.size);

// check if any element in a set
console.log(orderSet.has('Pizza'))
console.log(orderSet.has('Bread'))

// adding new elements in set
orderSet.add('Garlic Bread')
orderSet.add('Garlic Bread')
console.log(orderSet)

// delete an element
orderSet.delete('Risotto')

// retrieve element of set
// set doesn't have index
for(const order of orderSet) console.log(order)
// clearning set
orderSet.clear();


//USE CASE

const staff =['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffUnique =  [new Set(staff)];
console.log(staffUnique);
const staffUniquearr=  [...new Set(staff)];
console.log(staffUniquearr);// converted to array

// get size of unique values
console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size)


// ES6 set methods

// New Operations to Make Sets Useful!

const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
]);

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
]);

//intersection method

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log([...commonFoods])

//common method without duplicates

const allFoods = italianFoods.union(mexicanFoods);
console.log([...allFoods]);
// other way 
const fusionFood = new Set([...italianFoods,...mexicanFoods]);
console.log([...fusionFood]);

// difference
// get all from first set and common in second
const uniqueItalianFood = italianFoods.difference(mexicanFoods);
console.log([...uniqueItalianFood])
const uniqueMexicanFood = mexicanFoods.difference(italianFoods);
console.log([...uniqueMexicanFood]);

// symetric difference
// get all from first mentioned set but not the common one

const notCommonFoods = italianFoods.difference(mexicanFoods);
console.log([...notCommonFoods]);
const notCommonFoodsMexican = mexicanFoods.difference(italianFoods);
console.log([...notCommonFoodsMexican]);


// is disjoint
// to check if other set is completely different
// if other set doesn't contain any element from prior one
console.log(italianFoods.isDisjointFrom(mexicanFoods));


// is subset of to check if later is subset of previous
console.log(`Italian food is ${italianFoods.isSubsetOf(mexicanFoods)&&' a subset of mexican food'}`)

