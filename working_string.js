'use strict';

const airline = 'TAP Air India';
/* The line `// const plane = 'A4520';` is a commented-out line of code in JavaScript. This means that
it is not active or executed when the code runs. It is used for documentation or temporarily
disabling code without deleting it. In this case, the variable `plane` is declared but not assigned
a value, so it will result in an error when trying to access its elements later in the code. */
const plane = 'A4520';

console.log(plane[0]);// o/p A
console.log(plane[1]);// o/p 4
console.log(plane[2]);// o/p 5

console.log('B737'[0]);
console.log(airline.length);

console.log(airline.indexOf('r'));

// to get last character of string
console.log(airline.lastIndexOf('r'));// we don't mention take till last
console.log(airline.indexOf('india'));// false coz of lower case

console.log(airline.slice(4,9));// being start index, end index

console.log(airline.slice(airline.indexOf(' '),airline.lastIndexOf()+1));


console.log(airline.slice(-5))

const checkMiddleSeat = function(seat){
 // B&E are middle
 const seat_number = seat.slice(-1);
//  const seat_number = seat.indexOf('B');
 const message = (seat_number == 'E' || seat_number == 'B')?'You got middle seat':'You are lucky';
 console.log(seat_number)
} 

checkMiddleSeat('113B');
checkMiddleSeat('117A');


/// PART 2

console.log(airline.toLowerCase())
console.log(airline.toUpperCase())

// fix capitalisation in passenger name
const passenger = 'HarpEET';
const passengerLower = passenger.toLowerCase();
const correctOne = passengerLower[0].toUpperCase()+passengerLower.slice(1);
console.log(correctOne);


// comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';
const lowerloginemail = loginEmail.toLowerCase();
const trimmed = lowerloginemail.trim();// trim spaces and extra stuff
console.log(trimmed);


const user_login_email = loginEmail.toLowerCase().trim();
console.log(user_login_email);

// replacing

const priceGB = '288,97EU';
const priceUS = priceGB.replace('EU','$').replace(',','.')
console.log(priceUS);


const annoucement = 'All Passengers come to Boarding door 23. Boarding Door 23!!';
console.log(annoucement.replace('door','gate'));// only replace first occurance
// console.log(annoucement.replaceAll('door','gate'));

// Alternate 

console.log(annoucement.replace(/door/gi,'gate'));// case sensitive


// methods that return Booleans

const plane_neo = 'Airbus A320neo';
console.log(plane_neo.includes('neo'));
console.log(plane_neo.includes('sA32'));

if(plane_neo.startsWith('Airbus') && plane.endsWith('neo'))
{
    console.log('part of new airbus family')
}

// practice exercis

const checkBaggage = function(items)
{
    const baggage = items.toLowerCase();
    const status = (baggage.includes('knife') || baggage.includes('gun'))?' Not allowed':'Welcome Aboard';
    console.log(`You are ${status}`)
}
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks AND CAMERA');
checkBaggage('Got some snacks and a gun for protection');

// effects of not using lowecase
const checkBaggage_second = function(items)
{
    const baggage = items;//items.toLowerCase();
    const status = (baggage.includes('knife') || baggage.includes('gun'))?' Not allowed':'Welcome Aboard';
    console.log(`You are ${status}`)
}
checkBaggage_second('I have a laptop, some food and a pocket Knife');
console.log('asdfads')

