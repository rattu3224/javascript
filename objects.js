const jonas = {
    firstname:'Jonas',
    lastname:'schmeethan',
    age:2036-1991,
    job:'programmer',
    friends :['john','michal','steve']
}

// let jonasinfo = prompt('Which detail you would like know about jonas');

// console.log(jonas.age);


// let str = `${jonas.firstname} has ${jonas.friends.length}, and his best friend is called ${jonas['friends'][0]}`

// console.log(str);


//*************function in a object***************** */

//****CASE -- 1 */
const userDetail1 = {
    firstname:'Jonas',
    lastname:'schmeethan',
    birthyear:1991,
    job:'programmer',
    friends :['john','michal','steve'],
    calage:(birthyear)=>2037-birthyear
}

console.log(userDetail1.calage(1991));

//============USAGE 2 CASE -- 1 ================

console.log(`USAGE 2 CASE -- 1 ${userDetail1['calage'](1991)}`);


//****CASE -- 2 ARROW function */

const userDetail2 = {
    firstname:'Jonas',
    lastname:'schmeethan',
    birthyear:1991,
    job:'programmer',
    friends :['john','michal','steve'],
    calage:() => 2037 - userDetail2.birthyear
}

console.log(`USAGE 1 CASE -- 2 ${userDetail2.calage()}`);



const userDetail3 = {
    firstname:'Jonas',
    lastname:'schmeethan',
    birthyear:1991,
    job:'programmer',
    friends :['john','michal','steve'],
    calage:function(){
        return 2037 - this.birthyear;
    }
}

console.log(`USAGE 1 CASE -- 3 ${userDetail3.calage()}`);

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

// console.log(userDetail4.calage());
// userDetail4.calage();
// console.log(`USAGE 1 CASE -- 4 ${userDetail4.age}`);
console.log(`USAGE 2 CASE -- 4 ${userDetail4.getSummery()}`);
console.log('userDetail 5');
