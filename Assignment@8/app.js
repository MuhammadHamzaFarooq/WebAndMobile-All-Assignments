var min = 0;
var sec = 0;
var msec = 0;
var interval = 0;

var minutes_heading = document.getElementById("minutes");
var seconds_heading = document.getElementById("seconds");
var miliseconds_heading = document.getElementById("miliseconds");

function timer() {
    msec++
    miliseconds_heading.innerHTML = msec;

    if (msec >= 100) {
        sec++
        seconds_heading.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++
        sec = 0;
        minutes_heading.innerHTML = min;
    }
}


function start() { interval = setInterval(timer, 10); }

function stop() {

}


function stop() {
    clearInterval(interval)
}

function restart() {
    min = 0;
    sec = 0;
    msec = 0;

    minutes_heading.innerHTML = min;
    seconds_heading.innerHTML = sec;
    miliseconds_heading.innerHTML = msec;
    stop();


}