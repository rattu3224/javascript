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
    }
};

// for object destructing {}
// object name to be used as same

const {name,openingHours,categories} = restaurent;
console.log(name,openingHours,categories);

const {name:restaurentName,openingHours:hours,categories:foodmenu}=restaurent;
console.log(restaurentName,hours,foodmenu);

// default value for the object properties

const {menu = [],starter:starterMenu=[]} = restaurent;
console.log(menu,starterMenu);

//--------mutating values ----------
let a = 111;
let b = 999;
const obj = {a:23,b:34,c:14};
 
({a,b} = obj);
console.log(a,b);
// nested object

const {fri} = openingHours;
console.log(fri);

const {fri:{open,close}} = openingHours;
console.log(open,close);

// object : renaming name
const {fri:{open:openinghours,close:closinghours}} = openingHours;
console.log(openinghours,closinghours);


restaurent.orderdelivery({
    time:'22:35',
    address:'sd fasdf',
    mainCourseIndex:0,
    starterIndex:0,
})