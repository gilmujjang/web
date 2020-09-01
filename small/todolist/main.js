        //clock 구현
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

        //사용자 구현
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

        //todolist 구현
        let toDoForm = document.querySelector(".js-toDoForm");
        let toDoInput = toDoForm.querySelector("input");
        let toDoList = document.querySelector(".js-toDoList");
        let TODOS_LS = 'toDos';
        let toDos = [];
        function filterFn(toDo){
            return toDo.id === 1
        }
        function deleteToDo(event) {
            let btn = event.target;
            let li = btn.parentNode;
            toDoList.removeChild(li);
            let cleanToDos = toDos.filter(function(toDo){
                return toDo.id !==parseInt(li.id);
            });
            toDos = cleanToDos;
            saveToDos();
        }
        function paintToDo(text){
            let li = document.createElement("li");
            let delBtn = document.createElement("button");
            delBtn.innerText = "X";
            delBtn.addEventListener("click", deleteToDo);
            let span = document.createElement("span");
            let newId = toDos.length +1;
            span.innerText = text;
            li.appendChild(span);
            li.appendChild(delBtn);
            li.id = newId;
            toDoList.appendChild(li);
            let toDoObj = {
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
            let currentValue = toDoInput.value;
            paintToDo(currentValue);
            toDoInput.value = "";
        }
        function loadToDos(){
            let loadedtoDos = localStorage.getItem(TODOS_LS);
            if(loadedtoDos !== null){
                let parsedToDos = JSON.parse(loadedtoDos);
                parsedToDos.forEach(function (toDo){
                    paintToDo(toDo.text);
                });
            } 
        }

        //배경화면 구현
        let main = document.querySelector(".body");
        let IMG_NUMBER = 3;
        function paintImage(imgNumber){
            let img = new Image();
            img.src = `https://raw.githubusercontent.com/gilmujjang/web/master/small/todolist/${imgNumber +1}.jpg`;
            img.classList.add("bgImage")
            main.appendChild(img)
        }
        function getRandom(){
            let number = Math.floor(Math.random()*IMG_NUMBER);
            return number;
        }

        //오른쪽 아래 위치와 날씨 구현
        let COORDS = 'coords';
        let API_KEY = "c466723c64a109ca3433c6f2215cf3cc";
        let weather = document.querySelector(".js-weather");
        function getWeather(lat, lng){
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
                ).then(function(response){
                    return response.json()
                }).then(function(json){
                    let temperature = json.main.temp;
                    let place = json.name;
                    weather.innerText = `${temperature} @ ${place}`
                })
        }
        function saveCoords(coordsObj){
            localStorage.setItem(COORDS, JSON.stringify(coordsObj));
        }
        function handleGeoSucces(position){
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let coordsObj = {
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
            let loadedCoords = localStorage.getItem(COORDS);
            if(loadedCoords === null){
                askForCoords();
            } else{
                //get weather
                let parseCoords = JSON.parse(loadedCoords);
                getWeather(parseCoords.latitude, parseCoords.longitude);
            }
        }
        function init(){
            getTime();
            setInterval(getTime, 1000);
            loadName();
            loadToDos();
            toDoForm.addEventListener("submit", handleSubmit);
            let randomNumber = getRandom();
            paintImage(randomNumber);
            loadCoords();
        }
        init();