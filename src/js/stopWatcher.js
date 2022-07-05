// Задача-2.
// 1. Створити секунжомір який буди при запуску по кнопці Start виводити 
// на сторінку час в мілісекундах(сотні, десятки), секундах, хвилинах і зупинятися по по кліку на кнопку Stop.
// 2. Додати кнопку Lap клік по котрій буде виводити, поточний результат 
// та записувати йогов список під тблом.
const minutesEl = document.querySelector(".js-minutes")
const secondsEl = document.querySelector(".js-seconds")
const millisecondsEl = document.querySelector(".js-miliseconds")
const containerBtnEl = document.querySelector(".js-buttons")
let intervalId = null; 



const pad = (num) => String(num).padStart(2,"0")

const addTextValue = (timeObj) => {
    minutesEl.textContent = pad(timeObj.minutes)
    secondsEl.textContent = pad(timeObj.seconds)
    millisecondsEl.textContent = pad(timeObj.milliSeconds)
}

const getTimeObject = (time) => 
( {
    minutes: Math.floor(time / 1000 / 60 % 60) ,
    seconds: Math.floor(time / 1000 % 60),
    milliSeconds: Math.floor(time % 1000 / 10),
})

const showCounter = () => {
    const startTime = new Date()
    intervalId = setInterval (() => {
    const currentTime = Date.now()
    const timeDiff = currentTime - startTime
    const timeObj =  getTimeObject(timeDiff)

    addTextValue(timeObj)
    
}, 10)
}

containerBtnEl.addEventListener("click", (evt)=> {
    const {action} = evt.target.dataset;
    switch (action) {
        case "start":
            showCounter(); 
            break;
        case "stop":
        clearInterval(intervalId)
    }
    
})

