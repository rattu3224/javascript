'use strict';
/***
 * 
 * this challenge is based on string & methods
 * 
 */
// Coding Challenge #4


/*1.Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
*/

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

const camelCaseString = (variables)=>
{
    
    const varNames = [...variables];
    let camelcase_vars = []
    for(let vars of varNames)
    {
        let indexof_ = vars.indexOf('_');
        vars = vars.toLowerCase();//.replace(vars[indexof_],'')
        let newvar =  vars.slice(0,indexof_)+vars.slice(indexof_+1,indexof_+2).toUpperCase()+vars.slice(indexof_+2);
        console.log(newvar.trim())
    }
}

const varibles = new Set(['user_id','first_name','last_name'])
// const first_op = camelCaseString(varibles);
// console.log(first_op);

let submittext = document.getElementById('submittext');
submittext.addEventListener('click',function(){
    let txtvalue = document.getElementById('variable_area').value;
    let varible = txtvalue.split('\n');
    camelCaseString(varible);
    // console.log(txtvalue.split('\n'))
})