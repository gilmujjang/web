let clockContainer = document.querySelector(".js-clock");
let clockTitle = clockContainer.querySelector("h1");

function getTime(){
    let date = new Date();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${
        minutes < 10 ? `0${minutes}`: minutes
    }:${seconds < 10 ? `0${seconds}`: seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
let form = document.querySelector(".js-form");
let input = form.querySelector("input");
let USER_LS = "currentUser";
let greeting = document.querySelector(".js-greetings");
let SHOWING_CN = "showing";

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
    let currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    greeting.classList.remove(SHOWING_CN);
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName(){
    let currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } 
    else{
        paintGreeting(currentUser);
    }
}
loadName();