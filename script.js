'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclose = document.querySelector('.btnclose');
const btnopenmodal = document.querySelectorAll('.btnopenmodal');

console.log(btnopenmodal);

for(let i = 0;i<btnopenmodal.length;i++)
{
    console.log(btnopenmodal[i].textContent);
}