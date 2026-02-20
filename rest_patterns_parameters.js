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
    },
    orderPizza:function(mainingredient,...otheringrediants)
    {
        console.log(mainingredient);
        console.log(otheringrediants);
    }
};


//DESTURCTURING
// spread, coz on the right side of =
const arr = [1,2,...[3,4]];


const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);

// using ... on both sides of assignment operator


const [pizza, ,risotto,...remaining] = [...restaurent.mainCourse,...restaurent.starter];
console.log(pizza,risotto,remaining);


// Objects


const {sat,...remainingdays} = restaurent.openingHours;


console.log(sat,remainingdays);


// functions

const add = function(...numbers)
{
    console.log(numbers);
    // let sum=0;
    // for(let i =0;i<numbers.length;i++) sum+=numbers[i];
    // console.log(sum)
}

// add(2,4,7,1,8);

const x = [23,5,7];
add(...x)
// console.log(...x);

restaurent.orderPizza('mushrooms','onions','olives','capsicum');
// combines last 3 into arr leaving first one

restaurent.orderPizza('mushrooms');
// console.log(restaurent.mainCourse)
// console.log(...restaurent.mainCourse)
