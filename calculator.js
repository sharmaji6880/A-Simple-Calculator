let screen = document.querySelector(".screen");
let input = document.querySelector(".screen input");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear-tomato");
let equal = document.querySelector(".btn-equal-black");

function addToScreen(button) {
    input.value +=button.value; 
}

function evaluate() {
    if(input.value ==""){
        input.value=="";
    }else{
        input.value = eval(input.value);
    }
}

for (let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener("click",function(){addToScreen(buttons[i])});
}

equal.addEventListener("click",evaluate);
clear.addEventListener("click",function(){input.value = "";});
