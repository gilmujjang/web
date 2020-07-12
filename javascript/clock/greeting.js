const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const USER_LS = "currentUser";
const greeting = document.querySelector(".js-greetings");
const SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        paintGreeting("Unknown");
    } 
    else{
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();