/*--------------------------------*/
/* Pomodoro Clock                 */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

var mode = "session";
var time = 0;
var display = "00:00";
var status = "off";

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
        case "pause":
          pause();
          break;
        case "start-stop":
          startStop();
          break;
        case "reset":
          reset();
      }
    });
  }
}

function inputType(button) {
  var id = button.id;
  var classes = button.classList;

  // Get input type
  if (id === "session") {
    type = "session";
  } else if (id === "break") {
    type = "break";
  }
}

function timer() {
 
}

function timerControl(state) {

}

function reset() {

}

function changeSession(value) {

}

function changeBreak(value) {

}

function debugClock() {
  console.log("mode: " + mode);
  console.log("time: " + time);
  console.log("display: " + display);
  console.log("status: " + status);
}
