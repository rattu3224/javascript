
let country = 'India';
let continent = 'Asia';
let population = '30';
let ispopulationavg = true;

if(population > 22)
{
	ispopulationavg = false;
}

let isaverage = (ispopulationavg)?'is average':'above average'


/*==========Using TEMPLATE LITERALs======================*/

var output = `I live in ${country} a country in continent ${continent} having population of ${population} billion which is ${isaverage}`;
console.log(output);


/*==========Conversion & Coercion======================*/


/**
 * 
 * CONVERSION 
 *
 **/
var str = 'I am '+ 32 + ' years old'; 
// O/p should be I am 32 years old
console.log(str);



var numberStr = '23'-10-3;
//output will be number because - is included in mathematical calculation only in javascript
// whereas + concat the strings and add if numbers for addition type of string/value needs to be numeric else will be treated as string
// O/p = 10
console.log(numberStr);


var numberStr1 = '23' + 10 + 3;
// Here in numberStr1 10 and 3 is also treated as string
//O/p 23103
console.log(numberStr1);

/**
 * 
 * COERCION
 *
 **/
var numberStr2 = Number('23') + 10 + 3;
//O/p 23103
console.log(numberStr2);

/*==========PROMPT======================*/

var promptval = Number(prompt("Check the number is Even, odd or prime"));


if(!promptval)
{
	console.log('Please add a number');
}
else if(promptval%2 == 0){
	console.log("It's an even number");
}
else if(promptval%3 == 0)
{
	console.log("It's an odd number");
}
else if(promptval%3 != 0 && promptval%5 != 0 && promptval%7 != 0 && promptval%11 != 0 && promptval > 11)
{
	console.log("It's an prime number");
}


/*=======COMPARISON====================*/

let age = '18';
if(age == 18)
{
	console.log('Checking with loose Comparison')
}

if(age === 18)
{
	console.log('Checking with STRICT Comparison')
}




















































