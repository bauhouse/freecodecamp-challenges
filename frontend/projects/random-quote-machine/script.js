/*--------------------------------*/
/* Random Quote Machine           */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var display = document.getElementById("display");
var pads = document.getElementsByClassName("buttons");

var key = null;
var sound = null;

init();

function init() {
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function( event ) {
      getInput(this);
    });
  }
  keyboard();
}

function getInput(button) {
  key = pad.id;
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

    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      if (button.id == key || button.id == key.toUpperCase() || button.value == key) {
        if (keyEvent == "keydown") {
          button.classList.add("select");
          getInput(pad);
        }
        if (keyEvent == "keyup") {
          button.classList.remove("select");
        }
      }
    }
  });
}
