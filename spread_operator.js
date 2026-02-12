'use strict';


const restaurent = {
    name:'sip n dine',
    location:'SCO 11, sector 7, chandigarh',
    categories:['Italian','Indian','Chinese'],
    starter:['Salad','Soup','Fries'],
    mainCourse:['Pizza','Burger','Thali','Rajma','Paneer Tikka'],
    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:
        {
            open:11,
            close:23,
        },
        sat:
        {
            open:0,
            close:24,
        }
    },
    order : function(starterIndex,mainCourseIndex)
    {
        return [this.starter[starterIndex],this.mainCourse[mainCourseIndex]]
    },
    // orderdelivery:function(obj)
    orderdelivery:function({starterIndex=1,mainCourseIndex=2,address='sadfasd',time=20}) // this also an object not single parameters
    {
        console.log(`Order recieved!! ${this.starter[starterIndex]} and ${this.mainCourse[mainCourseIndex]} that will be delivered to address ${address} at ${time}`);
    },
    // spread operator
    orderPasta :function(ing1,ing2,ing3)
    {
        console.log(`Here is your delicous pasta with ${ing1},${ing2} and ${ing3}`)
    }
};

const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);


const newArr = [1,2,...arr];
console.log(newArr);


//------------writing an array--------------
console.log(...newArr);


// working with restaurent object

const newStarter = [...restaurent.starter,'dhokla','mushroom'];
console.log(newStarter);


// shallow copies of arrays

const mainMenuCopy = [...restaurent.mainCourse];

// join arrays

const menu = [...newStarter,...mainMenuCopy];
console.log(menu);


// spread operator works on all 
// iterables are strings, maps, sets,arrays not objects

const str = 'Jonas';
const letters = [...str,' ','S.'];
console.log(letters);
console.log(`${[...str]} scsdfs`); // won't work

// const ingredients = [prompt('Let\'s make pasta!! Ingredient 1?'),prompt('Let\'s make pasta!! Ingredient 2?'),prompt('Let\'s make pasta!! Ingredient 3?')];

// console.log(ingredients);
// restaurent.orderPasta(...ingredients);

//objects
const newRestaurent = {founderyears:1998,...restaurent,founder:'Some founder'};

console.log({...newRestaurent})









