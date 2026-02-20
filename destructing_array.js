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
};

const [x ,y ] =  restaurent.categories;
console.log(x,y );
//--------swapping positing -------------
let [main,secondary] = restaurent.order(1,4);
[main,secondary] = [secondary,main];
console.log(main,secondary);
//-------------nested array----------------

const nested = [2,4,[5,6]];
// const [i,,j] = nested;
// destructing nested array
// console.log(i,j)
const [i, ,[j,k]] = nested;
// destructing nested array
console.log(i,j,k);
const [p,q,r] = [8,9];
console.log(p,q,r);//r = undefined
//----------------
const [f=1,g=1,h=1] = [8,9];
console.log(f,g,h);