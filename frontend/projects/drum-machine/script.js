/*--------------------------------*/
/* JavaScript Drum Machine        */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var display = document.getElementById("display");
var pads = document.getElementsByClassName("drum-pad");

var key = null;
var sound = null;

init();

function init() {
  for (var i = 0; i < pads.length; i++) {
    var pad = pads[i];
    pad.addEventListener("click", function( event ) {
      getInput(this);
    });
  }
  keyboard();
}

function getInput(pad) {
  key = pad.id;
  playSound(key);
}

function playSound(key) {
  console.log("Play sound " + key);
}

function keyboard() {
  keyboardEvents("keydown");
  keyboardEvents("keyup");
}

function keyboardEvents(keyEvent) {
  document.addEventListener(keyEvent, function (event) {
    if (event.defaultPrevented) {
      return;
    }
    var key = event.key || event.keyCode;

    for (var i = 0; i < pads.length; i++) {
      var pad = pads[i];
      if (pad.id == key || pad.id == key.toUpperCase() || pad.value == key) {
        if (keyEvent == "keydown") {
          pad.classList.add("select");
          getInput(pad);
        }
        if (keyEvent == "keyup") {
          pad.classList.remove("select");
        }
      }
    }
  });
}
