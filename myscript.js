const daysDisplay = document.getElementById("days");
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const goalDateDisplay = document.getElementById("title");

const goalDate = "1 July 2021";

function countdown() {
    const goalDateValue = new Date(goalDate);
    const currentDateValue = new Date();
    const secondsBetween = (goalDateValue - currentDateValue) / 1000;
    const days = Math.floor(secondsBetween / (60*60*24));
    const hours = Math.floor((secondsBetween / (60*60)) % 24);
    const minutes = Math.floor((secondsBetween / 60) % 60);
    const seconds = Math.floor(secondsBetween % 60);

    daysDisplay.innerHTML = days;
    hoursDisplay.innerHTML = setTime(hours);
    minutesDisplay.innerHTML = setTime(minutes);
    secondsDisplay.innerHTML = setTime(seconds);
}

goalDateDisplay.innerHTML += goalDate;

function setTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

function changeBackground() {
    const currentTime = new Date().getHours();
    if (document.body) {
        if (currentTime >= 9 && currentTime < 19) {
            document.body.className = "dayTime";
        } else if (currentTime >= 19 && currentTime < 21) {
            document.body.className = "eveningTime";
        } else if (currentTime >= 7 && currentTime < 9) {
            document.body.className = "morningTime";
        } else {
            document.body.className = "nightTime";
        }
    }
}

//initial call
countdown();
changeBackground();

//call the function every second
setInterval(countdown, 1000);
setInterval(changeBackground, 1000);