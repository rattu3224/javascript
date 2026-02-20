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
// OR operator
// any data type, return any data type
// short circuiting 

// Or -- if first is truthy value will not the second value will return true
console.log(3 || 'Jonas');

console.log('' || 'jonas');
console.log(true || 0);// first is truthy value
console.log(undefined || null); // undefined is false value and second value w/c is falsy
console.log(undefined || null || 0 || '' || 'Hello'); // 0 is also falsy value

const guests1 = restaurent.numGuests ? restaurent.numGuests : 10;

console.log(guests1);
//if we set restaurent.numGuests = 0 then it will return 10 as restaurent.numGuests being 0 is considered as falsy values
const guests2 = restaurent.numGuests || 10;// short cicuit
console.log(guests2);

/*---------------------AND----------------------------------*/
console.log(0 && 'Jonas'); // returns false
console.log(7 && 'Jonas'); // returns Jonas
console.log('Hello' && 23 && null && 'Jonas'); // returns false

if(restaurent.orderPizza)
{
    restaurent.orderPizza('mushrooms','olives');
}


// other way

restaurent.orderPizza && restaurent.orderPizza('mushrooms','olives');