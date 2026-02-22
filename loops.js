'use strict';


`Concept LOOPS`

//---------------DO WHILE---------------------//

let x=0;
do{
    x+=1;
    // console.log(x)
}
while(x<5)


//---------------WHILE---------------------//

let y=5;
while(y>0)
{
    y-=1;
    // console.log(y);
}

//---------for in loop----------------//

const userDetail4 = {
    firstname:'Jonas',
    lastname:'schmeethan',
    birthyear:1991,
    job:'programmer',
    friends :['john','michal','steve'],
    calage:function(){
        this.age = 2037 - this.birthyear; // storing age in variable age
        // console.log(this.age)
        return this.age;// function return 
    },
    haveLicence:true,
    getSummery:function(){
        return `${this.firstname} is a ${this.job} of ${this.calage()} age and have ${this.haveLicence?'a':'no'} licence`
    }
}
function johnloop(obj,objname)
{
    for(const i in obj)
    {
        console.log(i)
    }
}


johnloop(userDetail4, 'friends');

const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}


for(const i of arr)
{
    console.log(`value of arr ${i}`)
}

for (const[key,val] of Object.entries(arr))
{
    console.log(key)
}


console.log(Object.entries(arr));


//-------------for of loop-------------------------
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
const menu = [...restaurent.mainCourse,...restaurent.starter];

// for-- of 
// 
for(const item of menu) console.log(item)

// what is we need index
// .enteries split into 2-d array as index and value

for(const item of menu.entries()){
    console.log({item})
    // console.log(`${item[0]+1}: ${item[1]}`)
}

// desctructing assignment assingning variable to key/index
// or value

for(const [i,ej] of menu.entries()){
    console.log(`Menu item no:${i+1}: ${ej}`)
}

// console.log([...menu.entries()])