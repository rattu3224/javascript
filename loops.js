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

console.log('hello');