const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const USER_LS = "currentUser";
const greeting = document.querySelector(".js-greetings");
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
 
function askForName(){
    greeting.classList.remove(SHOWING_CN);
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } 
    else{
        paintGreeting(currentUser);
    }
}




function init(){
    loadName();
}

init();