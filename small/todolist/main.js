        //clock 구현
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

        //사용자 구현
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

        //todolist 구현
        const toDoForm = document.querySelector(".js-toDoForm");
        const toDoInput = toDoForm.querySelector("input");
        const toDoList = document.querySelector(".js-toDoList");
        const TODOS_LS = 'toDos';
        let toDos = [];
        function filterFn(toDo){
            return toDo.id === 1
        }
        function deleteToDo(event) {
            const btn = event.target;
            const li = btn.parentNode;
            toDoList.removeChild(li);
            const cleanToDos = toDos.filter(function(toDo){
                return toDo.id !==parseInt(li.id);
            });
            toDos = cleanToDos;
            saveToDos();
        }
        function paintToDo(text){
            const li = document.createElement("li");
            const delBtn = document.createElement("button");
            delBtn.innerText = "X";
            delBtn.addEventListener("click", deleteToDo);
            const span = document.createElement("span");
            const newId = toDos.length +1;
            span.innerText = text;
            li.appendChild(span);
            li.appendChild(delBtn);
            li.id = newId;
            toDoList.appendChild(li);
            const toDoObj = {
                text: text,
                id: newId
            };
            toDos.push(toDoObj);
            saveToDos();
        }
        function saveToDos(){
            localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
        }
        function handleSubmit(event){
            event.preventDefault();
            const currentValue = toDoInput.value;
            paintToDo(currentValue);
            toDoInput.value = "";
        }
        function loadToDos(){
            const loadedtoDos = localStorage.getItem(TODOS_LS);
            if(loadedtoDos !== null){
                const parsedToDos = JSON.parse(loadedtoDos);
                parsedToDos.forEach(function (toDo){
                    paintToDo(toDo.text);
                });
            } 
        }

        //배경화면 구현
        const body = document.querySelector("#body");
        const IMG_NUMBER = 3;
        function paintImage(imgNumber){
            const img = new Image();
            img.src = `https://raw.githubusercontent.com/gilmujjang/web/master/small/todolist/${imgNumber +1}.jpg`;
            img.classList.add("bgImage")
            body.appendChild(img)
        }
        function getRandom(){
            const number = Math.floor(Math.random()*IMG_NUMBER);
            return number;
        }

        //오른쪽 아래 위치와 날씨 구현
        const COORDS = 'coords';
        const API_KEY = "c466723c64a109ca3433c6f2215cf3cc";
        const weather = document.querySelector(".js-weather");
        function getWeather(lat, lng){
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
                ).then(function(response){
                    return response.json()
                }).then(function(json){
                    const temperature = json.main.temp;
                    const place = json.name;
                    weather.innerText = `${temperature} @ ${place}`
                })
        }
        function saveCoords(coordsObj){
            localStorage.setItem(COORDS, JSON.stringify(coordsObj));
        }
        function handleGeoSucces(position){
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const coordsObj = {
                latitude,
                longitude
            };
            saveCoords(coordsObj);
            getWeather(latitude, longitude);
        }
        function handleGeoError(){
            console.log("Cant access");
        }
        function askForCoords(){
            navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
        }
        function loadCoords(){
            const loadedCoords = localStorage.getItem(COORDS);
            if(loadedCoords === null){
                askForCoords();
            } else{
                //get weather
                const parseCoords = JSON.parse(loadedCoords);
                getWeather(parseCoords.latitude, parseCoords.longitude);
            }
        }
        function init(){
            getTime();
            setInterval(getTime, 1000);
            loadName();
            loadToDos();
            toDoForm.addEventListener("submit", handleSubmit);
            const randomNumber = getRandom();
            paintImage(randomNumber);
            loadCoords();
        }
        init();