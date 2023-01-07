// Variables for buttons

const startSopBtn = document.querySelector('#startStopBtn');
const restoreBtn = document.querySelector('#restBtn');

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading 0
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set Interval & timerstatus
let timerInterval = null;
let timerStatus = "stopped";

function stopWatch(){
    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if(hours < 10){
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    let displayTtimer = document.getElementById("timer").innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(stopWatch, 1000);

startSopBtn.addEventListener('click', function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);

        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="pause"></i>`;

        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);

        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;

        timerStatus = "stopped";
    }
});

restoreBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";

    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
});