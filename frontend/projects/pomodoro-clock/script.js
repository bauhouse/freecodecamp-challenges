/*--------------------------------*/
/* Pomodoro Clock                 */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var display = document.getElementById("display");
var displayTime = document.getElementById("time-left");
var timerLabel = document.getElementById("timer-label");
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
  if (minutes == 0 && seconds == 0) {
    return;
  }
  if (on == 1) {
    countdown = setInterval(timer, 1000);
    status = 1;
    startStopButton.innerText = "Stop";
    startStopButton.classList.remove('start');
    startStopButton.classList.add('stop');
    console.log("Timer started");
  } else {
    clearInterval(countdown);
    status = 0;
    startStopButton.innerText = "Start";
    startStopButton.classList.remove('stop');
    startStopButton.classList.add('start');
    console.log("Timer stopped");
  }
}

function timer() {
  if (minutes == 0 && seconds == 0) {
    updateDisplay();
    return zero();
  }
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
}

function zero() {
  modeSwitch();
}

function modeSwitch() {
  if (mode == "session") {
    console.log("Session finished");
    timerLabel.innerText = "Break";
    minutes = breakLength;
    updateDisplay();
    mode = "break";
    return;
  } else {
    console.log("Break finished");
    timerLabel.innerText = "Session";
    minutes = sessionLength;
    updateDisplay();
    mode = "session";
    return;
  }
}

function updateDisplay() {
  display = minutes + ":" + formatSeconds(seconds);
  displayTime.innerText = display;
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
  if (status == 1) {
    timerSwitch(0);
  }
  mode = "session";
  timerLabel.innerText = "Session";
  minutes = sessionLength;
  seconds = 0;
  updateDisplay();
}

function changeSession(value) {
  if (sessionLength + value > 0 && sessionLength + value <= 60) {
    sessionLength += value;
    if (mode == "session") {
      minutes = sessionLength;
      updateDisplay();
    }
    displaySession.innerText = sessionLength;
  }
  return sessionLength;
}

function changeBreak(value) {
  if (breakLength + value > 0 && breakLength + value <= 60) {
    breakLength += value;
    if (mode == "break") {
      minutes = breakLength;
      updateDisplay();
    }
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
