'use strict';
const bookings = [];
const createBooking = function(flightNum,numPassengers=1,price=200*numPassengers){
    // ES5 way to handle default values// falsy values
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123',2,800);
createBooking('LHS123',5);
// missing arguments
createBooking('LHS123',undefined,500);
// ES6 way to handle/skip parameters
// premitive & objects in functions
const flight = 'LH123-44';
const person = {
    name: 'Joe',
    passport: 1234567890
}

const checkIn = function(flightNum,passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. '+passenger.name; // it get changed as it points to same reference in memory heap
    let message = `${passenger.name} has not checked in to flight ${flightNum}` ;
    if(passenger.passport === 1234567890)
    {
        message = `${passenger.name} has checked in to flight ${flightNum}`;
    }
    // alert(message)
}
checkIn(flight,person);
// console.log(flight);
// console.log(person);

/// 
const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*1000000000);
    // console.log(person)
}
newPassport(person);
checkIn(flight,person);

// first class functions
// functions are treated as values. Functions are other type of values
// storing in variable and object
// functions are objects
// HIGHER ORDER FUNCTIONS :: Functions that call other functions or have callback functions
// Callback functions :: Functions that are called later
const greet = (a,b) => a+b;
// btnclose.addEventListener('click',greet);//greet is callback function && eventlistener function is higher functions


/// functions that take other function as input

const oneWord = function(str)
{
    return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord = function(str)
{
    const [first,...others] = str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}
const tranformer = function(str,fn)
{
    console.log(`Orignal string : ${str}`)
    console.log(`Transformed string : ${fn(str)}`)

    console.log(`Tranformed  by : ${fn.name}`)
}

tranformer('Javascript is the best!!', upperFirstWord);
tranformer('Javascript is the best!!', oneWord);


const high5 = function()
{
    console.log('👋🏻')
}
document.body.addEventListener('click',high5);

['Jonas','Martha','Adam'].forEach(high5);
// use of callbacks
// -- reusable code
// -- abstraction -- hiding the actual detail