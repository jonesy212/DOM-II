// Your code goes here


let navLinks = document.querySelector('nav');

    navLinks.addEventListener('mouseover', event =>{
        event.target.style.color = 'blue'});

    navLinks.addEventListener('mouseout', event =>{
        event.target.style.color = 'blue'});

    navLinks.addEventListener('dblclick', event =>{
        event.target.style.color = 'green'});
    
const header = document.querySelector('h1');

    header.addEventListener('onblur', (event) => {
        event.target.style.background = 'pink';    
    });

    header.addEventListener('blur', (event) => {
        event.target.style.background = '';    
    });

