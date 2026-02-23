'use strict';

// maps :: used to map values to keys
// object have keys of type string
// maps keys can be of any datatype

const rest = new Map();
// fill map
rest.set('name','Classico Italiano');
rest.set(1,'Firenze, Italy')
console.log(rest.set(2,'Lisbon, Portugal'));
// chaning
rest.set('categories',['Italian','Indian','Chinese'])
.set('open','11')
.set('close','7')
.set(true,'We are open :D')
.set(false,'We are closed :(');
console.log(rest.get('name'));
console.log(rest.get('1'));// false coz Firenze, Italy has integer key

console.log(rest.get(true));


const time = 21;
console.log(rest.get((time > rest.get('open') && time < rest.get('close'))));

// check if map contain a certain key

console.log(rest.has('categories'));
rest.delete(2);

console.log(rest);

// size
console.log(rest.size);
// rest.clear()
console.log(rest.size);

//using array or object in maps

rest.set([1,2],'Test'); // this and below is not same as key in memory is exactly like [1,2]
console.log(rest.get[1,2])//won't work


// solution
const arr = [1,2];
rest.set(arr,'Test')// object as map keys
console.log(rest.get(arr))
rest.set(document.querySelector('h1'),'heading');
console.log(rest);

// iteration on maps

const question = new Map([
    ['question','What is the best programming language in the world ?'],
    [1,'C'],
    [2,'Java'],
    [3,'JavaScript'],
    ['correct',3],
    [true,'Correct 🥳'],
    [false,'Try Again ❌']
]);
console.log(question);

// object to map
// const hoursMap = new Map(Object.entries(openingHours))

for(const [key,value] of question)
{
    if(typeof key === 'number') console.log(`Answer ${key}:${value}`)
}
const answer = 3;//Number(prompt('Your Answer'))
// console.log(answer == question.get('correct'))
const result = answer == question.get('correct');
console.log(question.get(result))

// converting map to array

console.log([...question]);
// console.log(question.entries());
console.log([...question.key()]);
console.log([...question.key()]);