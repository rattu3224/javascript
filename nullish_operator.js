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

restaurent.numGuests = 0;
const guests2 = restaurent.numGuests || 10;// short cicuit
console.log(guests2);

// SOLUTION

// nullish :: ?? works with null values not with falsy vlues
// 0 is not nullish value

const guestCorrect = restaurent.numGuests ?? 10;
console.log(guestCorrect)