/* http://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript */

var timeAliveInSec = 0;
var timeAliveSpan = document.getElementById("timeAlive");

window.setInterval(setTime, 1000);

function setTime() {

  if (!gameOptions.paused) {

    timeAliveSpan.innerHTML = timeAliveInSec + "";
    timeAliveInSec++;

  }

}

function boostCountdown () {

  if (!gameOptions.paused) {

    boostModeTimeLeft -= 1000;

  }

}