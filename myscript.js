const daysDisplay = document.getElementById("days");
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const goalDateDisplay = document.getElementById("title");

let timer;

function initializeTime() {
    
    clearInterval(timer); //reset timer

    let timeValue = document.getElementById('theDate').value;
    timeValue = timeValue + " " + 0 + ":" +0; // set the time at 00:00
    const end = new Date(timeValue); // Arrange values in Date Time Format
    //const now = new Date(); 
    function countdown() {
        const now = new Date(); // Get Current date time
        const remain = (end - now) / 1000;
        if (remain < 0) {
            clearInterval(timer);
            document.getElementById("title").innerHTML = 'Reached!';
            return;
        }
        
        const days = Math.floor(remain / (60*60*24));
        const hours = Math.floor((remain / (60*60)) % 24);
        const minutes = Math.floor((remain / 60) % 60);
        const seconds = Math.floor(remain % 60);

        daysDisplay.innerHTML = days;
        hoursDisplay.innerHTML = setTime(hours);
        minutesDisplay.innerHTML = setTime(minutes);
        secondsDisplay.innerHTML = setTime(seconds);
        goalDateDisplay.innerHTML = "Until " + timeValue.slice(0, -4);
    }
    function setTime(time) {
    return time < 10 ? (`0${time}`) : time;
    }
    timer = setInterval(countdown, 1000); // Display Timer In Every 1 Sec
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
changeBackground();

//call the function every second
setInterval(changeBackground, 1000);