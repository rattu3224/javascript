'use strict';

const runOnce = function()
{
    console.log('This will never run again');
}
runOnce();

(function()
{
    console.log('This will never run again');
})();// by putting () after function at the end, will be called // writing function in () no need of name as it will be treated as function expression
// () immediately called function expression

// same for arrow function
(() =>console.log('This arrow function will never run again'))
();


// closures
const securebooking = function()
{
    let passengerCount = 0;

    return () => {
        passengerCount++
        console.log(`${passengerCount} passengers`)
    }
}

const booker = securebooking();
booker();
booker();
booker();