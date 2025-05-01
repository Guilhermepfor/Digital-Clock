function refreshTime (){

let display = document.querySelector(".display");

let time = new Date();

let hour = formatClock(time.getHours()) + ":" + formatClock(time.getMinutes()) + ":" + formatClock(time.getSeconds());

display.textContent = hour;

}

function formatClock (correctNumber){

    if (correctNumber < 10) {
        correctNumber = "0" + correctNumber;
    }
    return correctNumber;
}

refreshTime();
setInterval(refreshTime, 1000);

console.log (hour);