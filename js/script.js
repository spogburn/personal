'use strict';

console.log('hello')

var down = document.getElementById("go-down");
var description = document.querySelector("#description");

down.addEventListener('click', function(e){
  console.log('clicked');
  Velocity(description, "scroll", {duration: 1000})
})

$(function(){
       $("#name").typed({
           strings: ["<h1 id='first-name'>Stephanie </h1><h1 id='last-name'>Ogburn</h1><br> <h3 id='description'>Full Stack web developer.</h3>"],
           typeSpeed: 50
       });
   });
