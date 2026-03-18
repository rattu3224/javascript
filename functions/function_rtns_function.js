'use strict';

const greet = function(greeting)
{
    return function(name)
    {
        console.log(`${greeting} ${name}`)
    }
}


const greeterHey = greet('hey');// value is inner function
greeterHey('Jonas')
greeterHey('Harpreet'); // works because of clousures

// other way
greet('Hello')('James');

// usage of closure is functional programming

const newGreet = (greeting) =>{
    return (name) =>{
        console.log(`${greeting} ${name}`)
    }
}
const newGreetSay = newGreet('Hey!!');
newGreetSay('Thomas');
newGreet('Hii!!')('Chotee')

// const newGreet2 = (greet) => {
//     return (name) => {}
// }

// const calVat = (rate) => {
//     return (value) => {
//         console.log(`${rate} ${value}`)
//     }
// }

// const vatval = calVat('One')('Onnee');
// short form of arrrow function
const greetThird = greeting => name => console.log(`${greeting} ${name}`)

greetThird('Hii!!')('Chotee');



// THIS KEYWORD

const lufthansa = {
    airline : 'Lufthansa',
    iataCode : 'LH',
    booking : [],
    book(flightno,name)
    {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightno}`);
        this.booking.push({flight:`${this.iataCode}${flightno}`,name:name})
        // this.booking.push({flight:`${this.iataCode}`})
        // console.log(this.iataCode)
    },
    
}

lufthansa.book(245,'Harpreet Rattu');
lufthansa.book(212,'Rahul');


const eurowings = {
    airline:'eurowings',
    iataCode : 'ER',
    booking:[]
}


const book = lufthansa.book;
 // this will give an error of this (strict mode) coz book function points to this keyword and it reach out to near by values/object hence there none. Also book is not a function 
// book(23,'Sarah');


book.call(lufthansa,332,'Cooper');
console.log(lufthansa)

// call method
book.call(eurowings,23,'Sarah Williams')// first parameter is point to this
console.log(eurowings)



// apply method it accepts  array of values

const flightData = [543,'George Cooper'];
book.apply(eurowings,flightData)
console.log(eurowings)

const swiss = {
    airline:'Swiss',
    iataCode : 'SA',
    booking:[]
}

book.call(swiss,...flightData);
// bind method
// allows to set manually set this keyword
// returns a function
//book.call(eurowings,23,'Sarah Williams')
const bookEW = book.bind(eurowings,23);
const bookLH = book.bind(lufthansa);
bookEW('Jyoti');
bookLH(112,'jonas');


// with event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function()
{
    this.planes++;
    console.log(this.planes)
}
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane);
// defining this key word itself in the above statement
// when we call lufthansa.buyPlane function this points to the button not to the lufthansa
// so SOLUTION bind

document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));
// partial application :: preset values
//
const addTax = (rate,value) => value + value * rate;

console.log(addTax(0.1,500));

// one tax all the time
const addVAT =  addTax.bind(null,0.23); // = addVAT = value => value + value * 0.23
console.log(addVAT(120));
console.log(addVAT(200));

//wr
const addVAT2 = (rate) => {
    return (value) => { // return new function
        console.log(value + value * rate)
    }
}

const vat2 = addVAT2(0.23);
vat2(231)
// console.log(vat2)