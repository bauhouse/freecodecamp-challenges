/*--------------------------------*/
/* Pomodoro Clock                 */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var display = document.getElementById("display");
var displayTime = document.getElementById("time-left");
var displaySession = document.getElementById("session-length");
var displayBreak = document.getElementById("break-length");
var startStopButton = document.getElementById("start_stop");
var resetButton = document.getElementById("reset");
var buttons = document.getElementsByClassName("button");

var mode = "session";
var sessionLength = 25;
var breakLength = 5;
var time = 0;
var status = 0;
var minutes = sessionLength;
var seconds = 0;
var display = updateDisplay();
var countdown = null;

init();

function init() {
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function( event ) {
      var value = this.value;

      // Get input type
      inputType(this);

      // Get input
      switch (type) {
        case "start_stop":
          startStop();
          break;
        case "reset":
          reset();
          break;
        case "session-increment":
          changeSession(1);
          break;
        case "session-decrement":
          changeSession(-1);
          break;
        case "break-increment":
          changeBreak(1);
          break;
        case "break-decrement":
          changeBreak(-1);
      }
    });
  }
}

function inputType(button) {
  var id = button.id;
  type = id;
  console.log(id);
  return type;
}

function startStop() {
  if (status == 1) {
    timerSwitch(0);
  } else {
    timerSwitch(1);
  }
}

function timerSwitch(on) {
  if (on == 1) {
    countdown = setInterval(timer, 1000);
    status = 1;
    console.log("Timer started");
  } else {
    clearInterval(countdown);
    status = 0;
    console.log("Timer stopped");
  }
}

function timer() {
  if (minutes >= 0) {
    if (seconds > 0) {
      seconds -= 1;
      updateDisplay()
    } else {
      minutes -= 1;
      seconds = 59;
      updateDisplay()
    }
  }
  if (minutes == 0 && seconds == 0) {
    timerSwitch(0);
    return console.log("Countdown completed");
  }
}

function updateDisplay() {
  display = minutes + ":" + formatSeconds(seconds);
  displayTime.innerHTML = display;
  console.log(display);
  return display;
}

function formatSeconds(num) {
  var str = num.toString();
  if (str.length == 1) {
    str = "0" + str;
  }
  return str;
}

function reset() {
  minutes = sessionLength;
  seconds = 0;
  updateDisplay();
}

function changeSession(value) {
  if (sessionLength + value >= 0) {
    sessionLength += value;
    displaySession.innerText = sessionLength;
    reset();
  }
  return sessionLength;
}

function changeBreak(value) {
  if (breakLength + value >= 0) {
    breakLength += value;
    displayBreak.innerText = breakLength;
  }
  return breakLength;
}

function debugClock() {
  console.log("mode: " + mode);
  console.log("time: " + time);
  console.log("display: " + display);
  console.log("status: " + status);
}
