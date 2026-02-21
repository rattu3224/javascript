'use strict'
const weekdays =['mon','tues','wed','thurs','fri','sat','sun'];
const  hours= {
    [weekdays[3]]:{
        open:12,
        close:22,
    },
    [weekdays[5]]:
    {
        open:11,
        close:23,
    },
    [weekdays[6]]:
    {
        open:0,
        close:24,
    }
};
//

//--------------
const restaurent = {
    name:'sip n dine',
    location:'SCO 11, sector 7, chandigarh',
    categories:['Italian','Indian','Chinese'],
    starter:['Salad','Soup','Fries'],
    mainCourse:['Pizza','Burger','Thali','Rajma','Paneer Tikka'],
    openingHours:openingHours,
    // ES6 object literals
    hours,
    // es6 new version
    order(starterIndex,mainCourseIndex)
    {
        return [this.starter[starterIndex],this.mainCourse[mainCourseIndex]]
    },
    // es6 old version
    // order : function(starterIndex,mainCourseIndex)
    // {
    //     return [this.starter[starterIndex],this.mainCourse[mainCourseIndex]]
    // },
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

// {} object literal
// 