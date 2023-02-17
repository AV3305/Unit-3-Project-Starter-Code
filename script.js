/* Declare variables below to save the different sections (divs) of your story*/
let carButton1 = document.querySelector(".option-one");
let optionOneScreen = document.querySelector(".option-two-screen");
let carButton2 = document.querySelector(".option-two");
let optionTwoScreen = document.querySelector(".option-one-end");
let carButton3 = document.querySelector(".option-three");
let optionTwoEnd = document.querySelector(".option-two-end");
let body = document.querySelector("body");
let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
*/


carButton1.onclick=function(){
optionOneScreen.style.display="block";
};

carButton2.onclick=function(){
optionTwoScreen.style.display="block";
};


carButton3.onclick=function(){
optionTwoEnd.style.display="block";
};


body.onkeydown=function(){
body.style.backgroundColor="blue";
};

button.onclick = function() {
    header.innerHTML = "Enjoy the game!";
    button.innerHTML = "button was clicked!";
};