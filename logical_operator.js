'use strict';
const restaurent = {
    name:'sip n dine',
    location:'SCO 11, sector 7, chandigarh',
    categories:['Italian','Indian','Chinese'],
    starter:['Salad','Soup','Fries'],
    mainCourse:['Pizza','Burger','Thali','Rajma','Paneer Tikka'],
    order : function(starterIndex,mainCourseIndex)
    {
        return [this.starter[starterIndex],this.mainCourse[mainCourseIndex]]
    },
    orderPizza:function(mainingredient,...otheringrediants)
    {
        console.log(mainingredient);
        console.log(otheringrediants);
    }
};


const rest1 = {
    name:'Capri',
    // numGuests:'10',
    numGuests:0,
}

const rest2 = {
    name:'La Pizza',
    owner:'XYZ',
}

// add numguest property that doesn't have it

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1)
// console.log(rest2)
// // OR operator

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1)
// console.log(rest2)

// nulish operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1)
console.log(rest2)

// doesn't handle undefined
// rest1.owner = rest1.owner && '<Anonyms>';
// rest2.owner = rest2.owner && '<Anonyms>';
// console.log(rest1)
// console.log(rest2)

// other way handling null values or undefined 
// assinging the values if it's truthy not falsy
rest1.owner &&= '<Anonyms>';
rest2.owner &&= '<Anonyms>';
console.log(rest1)
console.log(rest2)


