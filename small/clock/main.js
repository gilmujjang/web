const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${
        minutes < 10 ? `0${minutes}`: minutes
    }:${seconds < 10 ? `0${seconds}`: seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
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
loadName();