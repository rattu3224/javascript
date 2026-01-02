'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclose = document.querySelector('.btnclose');
const btnopenmodal = document.querySelectorAll('.btnopenmodal');

// console.log(btnopenmodal);
/***
 * 
 * close modal
 * 
 */
const closeModal = function(){
    modal.classList.add('hidden');
};

/****
 * 
 * reading modal
 * 
 */
for(let i = 0;i<btnopenmodal.length;i++)
{
    console.log(btnopenmodal[i].textContent);
    btnopenmodal[i].addEventListener('click',function(){
        modal.querySelector('h2').textContent = btnopenmodal[i].textContent;
        modal.classList.remove('hidden');
    })
}

btnclose.addEventListener('click',closeModal);
