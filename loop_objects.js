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


// looping over
const openingHours = restaurent.openingHours;
const properties = Object.keys(openingHours);
// console.log(properties)

// console.log(`We are open on ${properties.length}`);

let openStr = `We are open on ${properties.length}`;
for(const day of Object.keys(openingHours))
{
    // console.log(day)
    openStr += `${day}`
}
console.log(openStr);

const values = Object.values(openingHours);
// console.log(values);

// entire object
const enteries = Object.entries(openingHours);

// console.log(enteries)// key values

for(const [day,{open,close}] of enteries)
{
    console.log(`On ${day} we open at ${open} and close at ${close}`)
}